# word-join [![License][1]][license] [![npm][2]][3] [![minzipped size][4]][5]

- Easily use the **Oxford comma** in any locale or language
- Customize the **list separator** (e.g., `";"`) and the **conjunction** (e.g., `"or"`)
- **ES6-compatible** for use in all modern environments
- **TypeScript-first**, with built-in type definitions
- **Zero dependencies**, for a minimal bundle footprint

## Installation

```sh
npm install word-join
```

## Usage

```js
import wordJoin from "word-join";

wordJoin(["pasta", "sauce", "cheese", "wine"]);
// pasta, sauce, cheese and wine

wordJoin(["pasta", "sauce", "cheese", "wine"], {
  conjunction: "or",
});
// pasta, sauce, cheese or wine

wordJoin(["pasta", "sauce", "cheese", "wine"], {
  conjunction: "or",
  oxford: true,
});
// pasta, sauce, cheese, or wine

wordJoin(["pasta", "sauce", "cheese", "wine"], {
  conjunction: "or",
  oxford: true,
  separator: ";",
});
// pasta; sauce; cheese; or wine
```

## Options

### conjunction

Type: `string`. Default: `"and"`.

The conjunction used to join the last item in the list.

```js
wordJoin(["pasta", "sauce", "cheese", "wine"], { conjunction: "or" });
// pasta, sauce, cheese or wine
```

### oxford

Type: `boolean`. Default: `false`.

Whether to use an Oxford comma — i.e., a final comma before the conjunction.

```js
wordJoin(["pasta", "sauce", "cheese", "wine"], { oxford: true });
// pasta, sauce, cheese, and wine
```

### separator

Type: `string`. Default: `","`.

The string used to separate the list items.

```js
wordJoin(["pasta", "sauce", "cheese", "wine"], { separator: ";" });
// pasta; sauce; cheese and wine
```

## License

[The MIT License][license]

Copyright (C) 2022-present stldo

[1]: https://img.shields.io/github/license/stldo/word-join
[2]: https://img.shields.io/npm/v/word-join
[3]: https://www.npmjs.com/package/word-join
[4]: https://img.shields.io/bundlejs/size/word-join
[5]: https://bundlejs.com/?q=word-join
[license]: ./LICENSE
