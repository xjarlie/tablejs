class Tabler {
    constructor(defaultMaxWidth) {
        this.defaultMaxWidth = defaultMaxWidth;
        this.terminalWidth = process.stdout.columns;
        this.terminalHeight = process.stdout.rows;
    }

    row(contents, widths) {
        let row = '';
        const cols = contents.length;
        for (const i in contents) {
            let col = contents[i];
            let spaces = (widths[i] + 2) - col.length;
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

        let lengths = this.getLongestLengthPerColumn(contents);

        let cols = 0;
        for (let i in contents) {
            if (contents[i].length > cols) cols = contents[i].length;
        }

        // check if terminal is too small here pls {

        // }

        

        for (let i in contents) {
            table += this.row(contents[i], lengths) + '\n';
        }

        return table;
    }

    colsToRows(cols) {
        let rows = [];
        for (let i in cols) {
            let column = cols[i];
            for (let j in column) {
                if (!rows[j]) rows[j] = [];
                let content = column[j];
                rows[j][i] = content;
            }
        }

        return rows;
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