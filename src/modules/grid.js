export function createGrid(columns, data) {
  return new gridjs.Grid({
    columns: columns.map((col) => ({ name: col })),
    data: data,
  });
}