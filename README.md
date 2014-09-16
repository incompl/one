## one

Returns the Number value `1`

### Overview

This module should be used when you need a function that returns the Number
value `1`.

### Installing

```bash
$ npm install one
```

### Usage

Simply require the `one` module. The export is a function which returns the
Number value `1`:

```javascript
  var one = require('./one-aka-1')
    , myOneValue = one();

console.log(myOneValue === one); // Logs 'true'
```

### Tests

Running the tests requires the [Jake JavaScript build
tool](https://github.com/mde/jake). In the root project directory, run the
following:

```bash
$ jake test
```

### Contributing

Please feel free to file bugs or suggest improvements here:

https://github.com/incompl/one/issues

