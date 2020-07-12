class Store {
  constructor(opts) {
    this.path = opts.configName + '.json';
    this.data = parseDataFile(this.path, opts.defaults);
  }

  get(key) {
    if (this.data === undefined) return null;
    return this.data[key];
  }

  has(key) {
    if (this.data === undefined) return false;
    return this.data[key] !== undefined;
  }

  set(key, val) {
    this.data[key] = val;
    localStorage.setItem(this.path, JSON.stringify(this.data));
  }
}

function parseDataFile(filePath, defaults) {
  var item = localStorage.getItem(filePath);
  if (item != null) {
    try {
      return JSON.parse(item);
    } catch (error) {
    }
  }
  if (defaults === undefined) {
    return JSON.parse("{}");
  } else {
    return defaults;
  }
}

export default Store;
