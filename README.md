# Hotshell Util [![npm version](https://badge.fury.io/js/hotshell-util.svg)](https://www.npmjs.com/package/hotshell-util) [![Build Status](https://travis-ci.org/julienmoumne/hotshell-util.svg?branch=master)](https://travis-ci.org/julienmoumne/hotshell-util)

> A collection of common [Hotshell](http://julienmoumne.github.io/hotshell) patterns

[Hotshell](http://julienmoumne.github.io/hotshell)
is a command-line application to efficiently recall and share commands.

`hotshell-util` aims to factor and distribute a common set of patterns.

# Content

  - [Patterns](#patterns)
    * [Prompt](#prompt)
    * [Confirm](#confirm)
  - [Tips](#tips)
  - [Import hotshell-util](#import-hotshell-util)


## Patterns

### Prompt

> Prompt for inputs before executing a command.

Usage:

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

See [demo source code](./examples/prompt/hs.js).

### Confirm

> "Are you sure? [y/n]"

Usage:

```javascript
confirm({
    key: 'o', desc: 'open hotshell website',
    cmd: 'open http://julienmoumne.github.io/hotshell'
})
```

See [demo source code](./examples/confirm/hs.js).

## Tips

### Chain patterns

> Prompt for input then ask for confirmation

```javascript
prompt(
    confirm({
        key: 'p', desc: 'open a website - prompt for URL then ask for confirmation',
        cmd: 'open $l',
        vars: [{name: 'l', prompt: 'location'}],
    }, false)
)
```

See [demo source code](./examples/chained/hs.js).

## Import hotshell-util

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

Copy `util.hs.js` along your `hs.js` file and import it using `var util = require('./util.hs.js')`.

#### Symlink the project

Clone `hotshell-util`, symlink `util.hs.js` along your `hs.js` file and import it using `var util = require('./util.hs.js')`.