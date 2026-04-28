((o, c, u) => {
  o[c] = o[c] || {}, o[u] = o[u] || {}, o[c].OCU = o[c].OCU || {
    api: o[u]
  }
})(window, 'Zipify', 'OCUApi');