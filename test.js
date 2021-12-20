const Tabler = require('./index');

const tabler = new Tabler(10);

const array = [['h', 'he'], ['hel', 'hell', 'hello'], ['hello ', 'hello w'], ['hello wo', 'hello wor']];

let table = tabler.tableByRow(array);

console.log(table);

tabler.getLongestLengthPerColumn(array);