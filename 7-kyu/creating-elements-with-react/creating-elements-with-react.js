const React = require('react')
​
function createElement(content, tag = 'div', props = {}) {
  return React.createElement(tag, props, content);
}
​
function createUnorderedList(list) {
  const items = list.map(item =>
    React.createElement('li', { key: item }, item)
  );
  return React.createElement('ul', null, ...items);
}
​