# Brackets Extension Generator [![Built with Grunt][grunt-img]](http://gruntjs.com/) [![MIT License][license-img]][license-url] [![NPM version][npm-version-img]][npm-url] [![NPM downloads][npm-downloads-img]][npm-url]

> A Simple Brackets Extension Generator

## Install

```bash
npm install -g generator-brackextension
```

## Usage

```bash
cd myproject
yo brackextension
```

## Prompts

* Project name (current folder name)
* Repository user name (current git username)
* Repository user email (current git user email)
* Project description (Place your project's description here)
* Project repository url (https://github.com/user/projectname)

## Folder & Files

> See generators/app/bones.yml

```yml
# project folders
root:
    - [_.editorconfig, _.gitattributes, _.gitignore, _.jshintrc, _Gruntfile.js, _LICENSE-MIT, _main.js, _package.json, _README.md, CHANGELOG.md, strings.js]
    - build:
      - Releases:
    - grunt:
        - [_compress.js, aliases.yml, autoprefixer.js, bump.js, jshint.js, less.js, watch.js]
    - htmlContent:
      - css:
        - [_button.html, _panel.html]
    - lib:
      - [_helper.js]
    - nls:
      - [strings.js]
      - root:
        - [_strings.js]
    - node:
      - [_simpleDomain.js]
      - lib:
    - src:
      - less:
        - [__.less, _styles.less]
```

# History

v0.1.15 - Added node/package.json for npm flatten-packages lib
v0.1.14 - Update grunt-autoprefixer task

[grunt-img]: https://cdn.gruntjs.com/builtwith.png

[license-img]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE-MIT

[npm-url]: https://npmjs.org/package/generator-brackextension
[npm-version-img]: http://img.shields.io/npm/v/generator-brackextension.svg?style=flat-square
[npm-downloads-img]: http://img.shields.io/npm/dm/generator-brackextension.svg?style=flat-square
