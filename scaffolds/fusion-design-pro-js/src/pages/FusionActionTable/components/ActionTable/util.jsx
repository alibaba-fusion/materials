export function getColumnKey(column) {
  if (column) {
    return column.key || String(column.title) || column.dataIndex;
  }

  return null;
}
