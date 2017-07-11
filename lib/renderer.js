
const art = require('art-template');

function artRenderer(data, options) {
  return art.render(data.text, Object.assign({ filename: data.path }, options));
}

artRenderer.template = function artTemplate(path, data) {
  return art(path, data);
};

artRenderer.compile = function artCompile(data) {
  return art.compile(data.text);
};

artRenderer.defaults = art.defaults;

module.exports = artRenderer;
