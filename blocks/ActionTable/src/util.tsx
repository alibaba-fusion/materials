import { ColumnProps } from '@alifd/next/types/table';

export function getColumnKey(column: ColumnProps & { key?: string }) {
  if (column) {
    return column.key || column.title || column.dataIndex;
  }
  return null;
}