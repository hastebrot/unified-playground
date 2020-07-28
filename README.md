# unified-playground

> unified is an interface for processing text using syntax trees. It’s what powers remark (Markdown), retext (natural language), and rehype (HTML), and allows for processing between formats. https://github.com/unifiedjs/unified

## use unified on observablehq

build:

* install `node` and `yarn` on your machine.
* clone this repository using `git`.
* run `yarn install` to install unified dependencies into `node_modules/`.
* run `yarn build.esm` to build an esm bundle into `dist/`.

import:

* create a new notebook on https://observablehq.com/.
* open "file attachments" in your notebook and attach `dist/unified.esm.js`.
* create a new notebook cell with `unified = import(URL.createObjectURL(await FileAttachment("unified.esm.js").blob()))`
