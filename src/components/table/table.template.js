const CHAR_CODES = {
  A: 65,
  Z: 90,
};
function createCell() {
  return `<div class="cell" contenteditable></div>`;
}
function createColumn(col) {
  return `<div class="column">${col}</div>`;
}

function createRow(index, content) {
  return `<div class="row">
        <div class="row-info">${index}</div>
        <div class="row-data">${content}</div>
    </div>`;
}

export function createTable(rowsCount = 15) {
  const colsCount = CHAR_CODES.Z - CHAR_CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
    .fill("")
    .map((_, index) => String.fromCharCode(CHAR_CODES.A + index))
    .map(createColumn)
    .join("");
  rows.push(createRow("", cols));

  const cell = createCell();
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill(cell).join("");
    rows.push(createRow(i + 1, cells));
  }
  return rows.join("");
}
