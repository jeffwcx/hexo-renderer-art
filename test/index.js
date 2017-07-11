const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');
const art = require('../lib/renderer');

function pathResolve(relative) {
  return path.join(__dirname, relative);
}

describe('art-template renderer', () => {
  
  // standard grammer
  it('standard', () => {
    const template = 'standard {{value}}';
    const result = art({ text: template }, { value: 'grammer' });
    expect(result).to.equal('standard grammer');
  });

  // loop grammer
  it('for', () => {
    const template = `
    <nav>
    <ul>
    {{each navlist}}
      <li>{{$index}} {{$value}}</li>
    {{/each}}
    </nav>
    </ul>
    `;
    const result = art({ text: template }, { navlist: ['home', 'menu'] });
    expect(result).to.equal(`
    <nav>
    <ul>
    
      <li>0 home</li>
    
      <li>1 menu</li>
    
    </nav>
    </ul>
    `);
  });

  // extend grammer
  it('extend', () => {
    const result = art.template(pathResolve('./target.art'), { title: 'title', content: 'content' });
    expect(result).to.eq(fs.readFileSync(pathResolve('./result.html'), 'utf8'));
  });

  // compile
  it('compile', () => {
    const template = '{{name}}';
    const func = art.compile({ text: template });
    const result = func({ name: 'jeff' });
    expect(result).to.eq('jeff');
  });
});