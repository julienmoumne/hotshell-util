# Hotshell Util [![npm version](https://badge.fury.io/js/hotshell-util.svg)](https://www.npmjs.com/package/hotshell-util)

> A collection of common [Hotshell](http://julienmoumne.github.io/hotshell) patterns

# Content

  - [Patterns](#patterns)
    * [Prompt](#prompt)
  - [How to use](#how-to-use)


## Patterns

### Prompt

Prompt for inputs

```javascript
prompt({
    key: 'f', desc: 'find text in files',
    vars: [
        {name: 'l', prompt: 'location'}, // prompt for location of files
        {name: 'p', prompt: 'pattern'} // prompt for pattern to look for
    ],
    cmd: 'grep -rnws $l -e $p' // search for pattern 'p' traversing files rooted at 'l'
})
```

Generates

```bash
echo -n "location: "; read l; echo -n "pattern: "; read p; grep -rnws $l -e $p
```

See [complete example](./examples/prompt/hs.js).

## How to use

### Using Node

Node is not required to use Hotshell.
However, If you have an Node environment, you can leverage
the fact that `hotshell-util` is published as a npm module.

You can add `hotshell-util` in your `package.json` or install it manually using `npm install hotshell-util`.

You can then import it using `var util = require('./node_modules/hotshell-util')`.

### Without Node

Hotshell does not yet support downloading npm modules, see [Hotshell issue #11](https://github.com/julienmoumne/hotshell/issues/11).

In the meantime, here are two solutions if you do not have a Node environment.

#### Copy the file

Copy `util.hotshell.js` along your `hs.js` file and import it using `var util = require('./util.hotshell.js')`.

#### Symlink the project

Clone `hotshell-util`, symlink `util.hotshell.js` along your `hs.js` file and import it using `var util = require('./util.hotshell.js')`.