const Tabler = require('./index');

const tabler = new Tabler(200);

const array = [['hello', 'world'], ['wut', 'who', 'me'], ['antdisestablishmentarianism', 'thats me'], ['wasd', 'cruel world']];

let table = tabler.tableByRow(array);

console.log(table);

tabler.getLongestLengthPerColumn(array);

const test = [[00,01], [10,11,12], [20,21], [30,31,32]];

console.log(test)
console.log('');
console.log(tabler.colsToRows(test));
console.log('');
console.log(tabler.tableByRow(array))
console.log('--------');
console.log(tabler.tableByRow(tabler.colsToRows(array)));