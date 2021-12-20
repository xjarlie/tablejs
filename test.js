const Tabler = require('./index');

const tabler = new Tabler(10);

let table = tabler.table([['hello', 'world'], ['gamerrs', 'epico', 'lmaoo'], ['wasdwasdwasd', 'wasdwasd']]);

console.log(table);