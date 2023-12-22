
const map = {
  py : [ 'py' ],
  cpp : [ 'h', 'c', 'cpp' ],
  yaml : [ 'yaml' ],
  cmake : [ 'cmake' ],
  js : [ 'js' ],
  bash : [ 'bash', 'sh' ],
};

function inverse(dictionary) {
  const inverse_d = {};
  for (const key in dictionary) {
    const value = dictionary[key];
    value.forEach(element => { inverse_d[element] = key; });
  }
  return inverse_d;
}

const inverse_map = inverse(map);

footers = document.getElementsByClassName("footer");
if (footers.length == 1) {
  const text = footers[0].innerText;

  // This page was generated in about 0.003s by Fossil 2.24 [3f97785608]
  // 2023-11-24 12:59:47

  // Check if the page contains both phrases
  const generated = text.includes("This page was generated");
  const by_fossil = text.includes("by Fossil");
  if (generated && by_fossil) {
    Object.entries(inverse_map).forEach(([ key, value ]) => {
      const cls = 'language-' + key;
      const sources = document.getElementsByClassName(cls);
      if (sources.length > 0) {
        nodes = Array.from(sources);
        nodes.forEach(node => {
          // Left below for debug.
          // node.setAttribute('data-highlighted', 'no');
          hljs.highlightElement(node);
        })
      }
    });
  }
}