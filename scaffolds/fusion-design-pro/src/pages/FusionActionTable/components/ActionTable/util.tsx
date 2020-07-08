import { ColumnProps } from '@alifd/next/types/table';

export function getColumnKey(column: ColumnProps & { key?: string }): string | null {
  if (column) {
    return column.key || String(column.title) || column.dataIndex;
  }
  return null;
}
