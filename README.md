# word-join [![npm][1]][2] [![minzipped size][3]][4]

## Installation

```sh
npm install word-join
```

## Usage

```js
import wordJoin from 'word-join'

wordJoin(['pasta', 'sauce', 'cheese', 'wine'])
// pasta, sauce, cheese and wine

wordJoin(['pasta', 'sauce', 'cheese', 'wine'], {
  conjunction: 'or'
})
// pasta, sauce, cheese or wine

wordJoin(['pasta', 'sauce', 'cheese', 'wine'], {
  conjunction: 'or',
  oxford: true
})
// pasta, sauce, cheese, or wine

wordJoin(['pasta', 'sauce', 'cheese', 'wine'], {
  conjunction: 'or',
  oxford: true,
  separator: ';'
})
// pasta; sauce; cheese; or wine
```

## Options

### conjunction

Type: `string`. Default: `'and'`.

The conjunction to join the last word of the sentence.

```js
wordJoin(['pasta', 'sauce', 'cheese', 'wine'], { conjunction: 'or' })
// pasta, sauce, cheese or wine
```

### oxford

Type: `boolean`. Default: `false`.

Whether to use an Oxford comma or not — i.e. a last comma before the
conjunction.

```js
wordJoin(['pasta', 'sauce', 'cheese', 'wine'], { oxford: true })
// pasta, sauce, cheese, and wine
```

### separator

Type: `string`. Default: `','`.

String to separate the list items.

```js
wordJoin(['pasta', 'sauce', 'cheese', 'wine'], { separator: ';' })
// pasta; sauce; cheese and wine
```

## License

[The MIT License][license]

[1]: https://img.shields.io/npm/v/word-join
[2]: https://www.npmjs.com/package/word-join
[3]: https://img.shields.io/bundlephobia/minzip/word-join
[4]: https://bundlephobia.com/package/word-join
[license]: ./LICENSE
