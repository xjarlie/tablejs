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

        let width = this.getLongestLength(contents) + 2;

        for (let i in contents) {
            table += this.row(contents[i], width) + '\n';
        }

        return table;
    }

    tableByColumn(contents) {

    }

    getLongestLength(props) {
        let longest = 0;

        for (let i in props) {
            for (let j in props[i]) {
                if (props[i][j].length > longest) {
                    longest = props[i][j].length;
                }
            }
        }
        return longest;
    }
}

module.exports = Tabler;