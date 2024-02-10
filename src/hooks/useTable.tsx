import { useMemo, useRef } from 'react';

import { TableRow } from '../components';
import { Table, TableProps } from '../components/Table';
import { TableRowtype } from '../components/TableRow';
import { TableItemType, TableRowItem } from '../components/TableRowItem';

import { useScroll } from './useScroll';

/**
 * useTable
 * @hook
 * @description
 * Provide an object containing statefull components used for tables:
 *  -> Container: The container for the table
 *  -> Head: For the Title Rows
 *  -> Row: for the data Rows
 *  -> Cell: For the data Cell
 */
export function useTable() {
  const tableRef = useRef(null);
  return useMemo(
    () => ({
      Container: (p: TableProps) => <Table ref={tableRef} {...p} />,
      Head: (p: TableRowtype) => {
        const { isScrolling } = useScroll({ ref: tableRef, trigger: 50 });
        return <TableRow isHead isScrolling={isScrolling} {...p} />;
      },
      Row: (p: Omit<TableRowtype, 'isHead' | 'isScrolling'>) => (
        <TableRow {...p} />
      ),
      Cell: (p: TableItemType) => <TableRowItem {...p} />,
    }),
    [],
  );
}

export default useTable;
