---
sidebar_position: 6
---

# API Usage

The following step-by-step introduction will guide you through integrating this API into your own project; you'll be amazed by how little time it takes.

## Accessing The Helper

In order to make integration as simple as possible, all while ensuring standardized messages and behavior, the `PredicateHelper` has been introduced. Let's obtain a reference to it.

```java
var parserPlugin = ItemPredicateParserPlugin.getInstance();

if (parserPlugin == null)
  throw new IllegalStateException("Depending on ItemPredicateParser to be successfully loaded");

var predicateHelper = parserPlugin.getPredicateHelper();
```

### Parsing Tokens

The prerequisite to both parsing predicates and creating real-time suggestions as well as expanded previews is a list of tokens. A token represents the smallest logical unit and can be either an integer, a parenthesis, a quoted- or an unquoted-string.

#### Command Arguments

Command arguments, represented by an array of strings, can be parsed as follows:

```java
@Override
public boolean onCommand(@NotNull CommandSender sender, @NotNull Command command, @NotNull String label, @NotNull String[] args) {
  try {
    var tokens = predicateHelper.parseTokens(args, 0);
  } catch (ItemPredicateParseException e) {
    player.sendMessage(predicateHelper.createExceptionMessage(e));
  }
}
```

The second parameter indicates the index of the first argument corresponding to the predicate expression; this offset becomes useful if you have other, separately handled arguments in front of the predicate.

#### Plain Strings

Plain strings, as they would occur when reviving persisted stringified predicates, can simply be parsed as follows:

```java
String input;

try {
  var tokens = predicateHelper.parseTokens(input);
} catch (ItemPredicateParseException e) {
  // TODO: Log message and handle this error-case
  predicateHelper.createExceptionMessage(e);
}
```

### Parsing Predicates

After having parsed the input into a list of tokens, these tokens can now be parsed into the final predicate. Since tokens are a language-agnostic concept, you only now need to specify a concrete language whose identifiers are to be matched against when searching syllable matching units; select one from the corresponding enumeration of supported languages.

```java
TranslationLanguage language;

try {
  List<Token> tokens;
  var predicate = predicateHelper.parsePredicate(language, tokens);
} catch (ItemPredicateParseException e) {
  // TODO: Send to player or append to log
  predicateHelper.createExceptionMessage(e);
}
```

### Executing Predicates

Predicates are represented by an AST (Abstract Syntax Tree), whose root-node is returned when parsing tokens. In order to execute all nodes and retrieve the final result-boolean, simply apply the predicate to any given `ItemStack`, as follows:

```java
ItemStack item;
ItemPredicate predicate;

var result = predicate.test(item);
```

### Stringifying Predicates

To debug or persist predicates, simply stringify them by calling the corresponding method. The passed flag signals whether tokens are to be used; true means use tokens and thereby stringify as parsed, including abbreviations, while false means use translated identifiers, resulting in fully expanded matching units.

:::warning
When stringifying with the intent of persisting predicates, it is advised to always fully expand, as to avoid needless ambiguity when changing the server-version.
:::

```java
ItemPredicate predicate;

var stringRepresentation = predicate.stringify(false);
```

### Completion And Preview

Implementing bukkit's `TabCompleter` not only provides the user with a fully expanded live-preview (best displayed within the action-bar) of the entered predicate, but also responds with a list of suggestions, serving both as completions and as a preview of custom material groups (involving the `?`-syllable, see [Material Predicate](expression-syntax/material-predicate.md)).

:::warning
In order to avoid cutting off crucial information regarding the latter, it is advised to keep the maximum number of completions reasonably high.
:::

```java
@Override
public @Nullable List<String> onTabComplete(@NotNull CommandSender sender, @NotNull Command command, @NotNull String label, @NotNull String[] args) {
  if (!(sender instanceof Player player))
    return null;

  TranslationLanguage language;

  try {
    var tokens = predicateHelper.parseTokens(args, 0);
    var completion = predicateHelper.createCompletion(language, tokens);

    if (completion.expandedPreviewOrError() != null)
      showActionBarMessage(player, completion.expandedPreviewOrError());

    return completion.suggestions();
  } catch (ItemPredicateParseException e) {
    showActionBarMessage(player, predicateHelper.createExceptionMessage(e));
    return null;
  }
}

private void showActionBarMessage(Player player, String message) {
  player.spigot().sendMessage(ChatMessageType.ACTION_BAR, new TextComponent(message));
}
```

### Full Use Example

The following full example represents a template which can just be copied into your project to get started on parsing predicates.

```java
import me.blvckbytes.item_predicate_parser.PredicateHelper;
import me.blvckbytes.item_predicate_parser.parse.ItemPredicateParseException;
import me.blvckbytes.item_predicate_parser.predicate.ItemPredicate;
import me.blvckbytes.item_predicate_parser.translation.TranslationLanguage;
import net.md_5.bungee.api.ChatMessageType;
import net.md_5.bungee.api.chat.TextComponent;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.command.TabCompleter;
import org.bukkit.entity.Player;

import java.util.List;

public class ExampleCommand implements CommandExecutor, TabCompleter {

  private final TranslationLanguage translationLanguage;
  private final PredicateHelper predicateHelper;

  public ExampleCommand(TranslationLanguage translationLanguage, PredicateHelper predicateHelper) {
    this.translationLanguage = translationLanguage;
    this.predicateHelper = predicateHelper;
  }

  @Override
  public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (!(sender instanceof Player player))
      return false;

    ItemPredicate predicate;

    try {
      var tokens = predicateHelper.parseTokens(args, 0);
      predicate = predicateHelper.parsePredicate(translationLanguage, tokens);
    } catch (ItemPredicateParseException e) {
      player.sendMessage(predicateHelper.createExceptionMessage(e));
      return true;
    }

    if (predicate == null) {
      player.sendMessage("§cPlease provide a non-empty predicate");
      return true;
    }

    var handItem = player.getInventory().getItemInMainHand();

    if (predicate.test(handItem)) {
      player.sendMessage("§aThe item in your main hand matched the following predicate: " + predicate.stringify(false));
      return true;
    }

    player.sendMessage("§cThe item in your main hand mismatched the following predicate: " + predicate.stringify(false));
    return true;
  }

  @Override
  public List<String> onTabComplete(CommandSender sender, Command command, String label, String[] args) {
    if (!(sender instanceof Player player))
      return null;

    try {
      var tokens = predicateHelper.parseTokens(args, 0);
      var completion = predicateHelper.createCompletion(translationLanguage, tokens);

      if (completion.expandedPreviewOrError() != null)
        showActionBarMessage(player, completion.expandedPreviewOrError());

      return completion.suggestions();
    } catch (ItemPredicateParseException e) {
      showActionBarMessage(player, predicateHelper.createExceptionMessage(e));
      return null;
    }
  }

  private void showActionBarMessage(Player player, String message) {
    player.spigot().sendMessage(ChatMessageType.ACTION_BAR, new TextComponent(message));
  }
}
```

## Employing the EnumMatcher

While not strictly a part of the predicate parsing API, the `EnumMatcher` also integrates syllable-matching and thereby provides an elegant way of using plain enumerations to match on sub-commands. Names of constants will first be normalized by transforming their names to hyphen-separated, title-cased values, after which they are sorted alphabetically, just like on the client-side, as to provide sequence-correct selection.

### Handling Commands

Creating completions serves two purposes: by providing a non-null input string, tab-completions can be generated; by providing a null value, usage-strings may be generated. Additionally, one may provide a filter, which could - for example - filter out actions to which the user currently does not have any permission, as to personalize the overall appearance.

Let's introduce the following enumeration, which contains a static matcher-instance, as well as a filter-generator, based on the user for whom to personalize for.

```java
enum CommandAction {
  RELOAD,
  TEST
  ;

  public static final EnumMatcher<CommandAction> matcher = new EnumMatcher<>(values());

  public static EnumPredicate<CommandAction> makeFilter(Player player) {
    return item -> (
      switch (item.constant) {
        case TEST -> player.hasPermission("...");
        case RELOAD -> player.hasPermission("...");
      }
    );
  }
}
```

With next to no boilerplate-code in place, sub-command matching can be accomplished as follows.

```java
@Override
public boolean onCommand(@NotNull CommandSender sender, @NotNull Command command, @NotNull String label, @NotNull String[] args) {
  var actionFilter = CommandAction.makeFilter(sender);

  NormalizedConstant<CommandAction> action;

  if (args.length < 1 || (action = CommandAction.matcher.matchFirst(args[0], actionFilter)) == null) {
    var suggestions = CommandAction.matcher.createCompletions(null, actionFilter);

    if (suggestions.isEmpty()) {
      // Has no permission to any sub-command; may send general missing-permission message at this point.
      return true;
    }

    // Either did not provide any argument, or provided a value which could not match against any existing action
    // May send a usage-message using the suggestions-list from above
    return true;
  }

  switch (action.constant) {
    case TEST -> {
      // TODO: Handle sub-command
      return true;
    }

    case RELOAD -> {
      // TODO: Handle sub-command
      return true;
    }

    default -> {
      // Unreachable
      return true;
    }
  }
}
```

### Handling Completion

```java
@Override
public @Nullable List<String> onTabComplete(@NotNull CommandSender sender, @NotNull Command command, @NotNull String label, @NotNull String[] args) {
  var actionFilter = CommandAction.makeFilter(sender);

  if (args.length == 1)
    return CommandAction.matcher.createCompletions(args[0], actionFilter);

  var action = CommandAction.matcher.matchFirst(args[0], actionFilter);

  if (action == null) {
    // Provided a value which could not match against any existing action
    return List.of();
  }

  switch (action.constant) {
    case TEST -> {
      // TODO: Handle sub-command
      return List.of();
    }

    case RELOAD -> {
      // TODO: Handle sub-command
      return List.of();
    }

    default -> {
      // Unreachable
      return List.of();
    }
  }
}
```