import React, { useState, useRef } from 'react';
import { Button, Icon, Checkbox, Overlay } from '@alifd/next';
import { ReactSortable } from 'react-sortablejs';
import { getColumnKey } from './util';
import styles from './index.module.scss';

const TableActionIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1899388_oxn3zhg34oj.js',
});

function CustomList({ columns, onChange }) {
  const buttonRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const onColumnChildrenChange = (idx, newColumns) => {
    const newColumnList = [...columns];
    newColumnList[idx].children = newColumns;
    onChange(newColumnList);
  };

  const onHiddenChange = (key, status) => {
    const columnsHiddenChange = items => {
      const newItems = [];
      items.forEach(item => {
        const columnItem = { ...item };
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
      <Button text size="large" ref={buttonRef} onClick={() => setVisible(!visible)}>
        <TableActionIcon type="custom-list" size="small" />
      </Button>
      <Overlay align="tr br" visible={visible} target={buttonRef.current}>
        <ReactSortable
          className={styles.columnSortPanel}
          handle=".column-handle"
          list={columns}
          setList={onChange}
        >
          {columns.map((item, idx) => (
            <div className="sort-item-container" key={getColumnKey(item)}>
              <div className="sort-item">
                <Checkbox
                  className="sort-checkbox"
                  checked={!item.hidden}
                  onChange={status => onHiddenChange(getColumnKey(item), !status)}
                >
                  {item.title}
                </Checkbox>

                <Icon className="column-handle" type="ellipsis" size="small" />
              </div>
              {Array.isArray(item.children) && (
                <ReactSortable
                  handle=".column-handle"
                  list={item.children}
                  setList={newState => onColumnChildrenChange(idx, newState)}
                >
                  {item.children.map(childrenItem => (
                    <div key={getColumnKey(childrenItem)} className="sort-item sort-item-children">
                      <Checkbox
                        checked={!childrenItem.hidden}
                        onChange={status => onHiddenChange(getColumnKey(childrenItem), !status)}
                      >
                        {childrenItem.title}
                      </Checkbox>

                      <Icon className="column-handle" type="ellipsis" size="small" />
                    </div>
                  ))}
                </ReactSortable>
              )}
            </div>
          ))}
        </ReactSortable>
      </Overlay>
    </React.Fragment>
  );
}

export default CustomList;
