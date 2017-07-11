
const art = require('art-template');

function artRenderer(data, options) {
  return art.render(data.text, Object.assign({ filename: data.path }, options));
}

artRenderer.template = art;

/**
 * art.compile
 * @param {Object} data - compile data
 * @return result
 */
function artCompile(data) {
  return art.compile(data.text);
}

artRenderer.compile = artCompile;

artRenderer.defaults = art.defaults;

module.exports = artRenderer;
