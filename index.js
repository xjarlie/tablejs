class Tabler {
    constructor(defaultMaxWidth) {
        this.defaultMaxWidth = defaultMaxWidth;
        this.terminalWidth = process.stdout.columns;
        this.terminalHeight = process.stdout.rows;
    }

    row(contents, maxWidth) {
        let row = '';
        const cols = contents.length;
        let width = maxWidth || this.defaultMaxWidth;
        for (const i in contents) {
            let col = contents[i];
            let spaces = width - col.length;
            if (spaces > 0) {
                row += col + ' '.repeat(spaces);
            } else {
                return 'error';
            }
        }
        return row;
    }

    tableByRow(contents) {
        let table = '';

        const lengths = this.getLongestLengthPerColumn(contents);

        let cols = 0;
        for (let i in contents) {
            if (contents[i].length > cols) cols = contents[i].length;
        }

        if (width * cols > process.stdout.columns) table += 'Increase terminal width to view table\n'

        for (let i in contents) {
            table += this.row(contents[i], width) + '\n';
        }

        return table;
    }

    getLongestLengthPerColumn(contents) {
        let lengths = [];
        for (let i in contents) {
            for (let j in contents[i]) {
               lengths[j] = lengths[j] ? lengths[j] : contents[i][j].length;
               if (lengths[j] < contents[i][j].length) {
                   lengths[j] = contents[i][j].length;
               }
            }
        }
        return lengths;
    }
}

module.exports = Tabler;