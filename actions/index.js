'use strict';

function addColumn (ev) {
  ev.preventDefault();
  this.setState({
    table: this.state.table.map(row => ([...row, '']))
  })
}

function addRow (ev) {
  ev.preventDefault();
  var newRow = this.state.table[0].map(() => "")
  this.setState({
    table: [...this.state.table, newRow]
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  const newTable = this.state.table;
  newTable[rowIndex][columnIndex] = ev.target.value;
  this.setState({
    table: newTable
  })
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex],
  })
}

function blurCell () {
  this.setState({
    focused: null,
  })
}

function removeRow (ev) {
  ev.preventDefault();
  if (this.state.table.length > 1) {
    let newTable = this.state.table.slice(0, -1)
    this.setState({
      table: newTable,
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  const table = this.state.table
  if (table[0].length > 1) {
    let newTable = table.map((row) => row.slice(0, -1))
    this.setState({
      table: newTable,
    })
  }
}

module.exports = {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
