const modules = {};
const requires = (name) => modules[name];

modules["remark-parse"] = require("remark-parse");
modules["remark-stringify"] = require("remark-stringify");

modules["rehype-parse"] = require("rehype-parse");
modules["rehype-stringify"] = require("rehype-stringify");

modules["unist-builder"] = require("unist-builder");
modules["unist-util-visit"] = require("unist-util-visit");

export { modules as module, requires as require };
