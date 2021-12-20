const Tabler = require('./index');

const tabler = new Tabler(10);

let table = tabler.tableByRow([['hello', 'world'], ['gamerrs', 'epico', 'lmaoo'], ['wasdwasdwasd', 'wasdwasd'], ['gaymens', 'stonewall is epic']]);

console.log(table);