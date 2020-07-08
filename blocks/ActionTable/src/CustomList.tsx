import React, { useState, useRef } from 'react';
import { Button, Icon, Checkbox, Overlay } from '@alifd/next';
import { ReactSortable, ItemInterface } from 'react-sortablejs';
import { ColumnProps } from '@alifd/next/types/table/index';

import { getColumnKey } from './util';

import styles from './index.module.scss';

export type Column = ColumnProps & ItemInterface & {
  id?: string | number;
  children?: Column[];
}

const TableActionIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1899388_oxn3zhg34oj.js',
});

function CustomList({ columns, onChange }: { columns: Column[]; onChange: (columns: Column[]) => void }) {
  const buttonRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const onColumnChildrenChange = (idx: number, newColumns: Column[]): void => {
    const newColumnList: Column[] = [...columns];
    newColumnList[idx].children = newColumns;
    onChange(newColumnList);
  };

  const onHiddenChange = (key: string, status: boolean): void => {
    const columnsHiddenChange = (items: Column[]) => {
      const newItems: Column[] = [];
      items.forEach((item) => {
        const columnItem: Column = { ...item };
        const columnKey = getColumnKey(columnItem);
        if (columnItem.children) {
          columnItem.children = columnsHiddenChange(columnItem.children);
        }
        if (columnKey === key) {
          columnItem.hidden = status;
        }

        newItems.push(columnItem);
      });

      return newItems;
    };

    const visibleColumns = columnsHiddenChange(columns);
    onChange(visibleColumns);
  };


  return (
    <React.Fragment>
      <Button
        text
        size="large"
        ref={buttonRef}
        onClick={() => setVisible(!visible)}
      >
        <TableActionIcon type="custom-list" size="small" />
      </Button>
      <Overlay
        align="tr br"
        visible={visible}
        target={buttonRef.current}
      >
        <ReactSortable
          className={styles.columnSortPanel}
          handle=".column-handle"
          list={columns}
          setList={onChange}
        >
          {columns.map((item, idx) => (
            <div
              className="sort-item-container"
              key={getColumnKey(item)}
            >
              <div className="sort-item">
                <Checkbox
                  className="sort-checkbox"
                  checked={!item.hidden}
                  onChange={(status) => onHiddenChange(getColumnKey(item), !status)}
                >
                  {item.title}
                </Checkbox>

                <Icon className="column-handle" type="ellipsis" size="small" />
              </div>
              {
                Array.isArray(item.children) && (
                  <ReactSortable
                    handle=".column-handle"
                    list={item.children}
                    setList={(newState) => onColumnChildrenChange(idx, newState)}
                  >
                    {item.children.map((childrenItem) => (
                      <div key={getColumnKey(childrenItem)} className="sort-item sort-item-children">
                        <Checkbox
                          checked={!childrenItem.hidden}
                          onChange={(status) => onHiddenChange(getColumnKey(childrenItem), !status)}
                        >
                          {childrenItem.title}
                        </Checkbox>

                        <Icon className="column-handle" type="ellipsis" size="small" />
                      </div>
                    ))}
                  </ReactSortable>
                )
              }
            </div>
          ))}
        </ReactSortable>
      </Overlay>
    </React.Fragment>
  )
}

export default CustomList;
