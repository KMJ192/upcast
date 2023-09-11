import type { Documents } from '@src/store/components/DocsContents/state';

import DataTableView from './DataTableView/DataTableView';

const documents: Array<Documents> = [
  {
    title: 'DataTable 컴포넌트',
    description: '',
    view: <DataTableView />,
    componentString: [
      `<DataTableContainer>`,
      `    <DataTable>`,
      `        <DataTable.Caption>caption</Table.Caption>`,
      `        <DataTable.Thead>`,
      `            <DataTable.Tr>`,
      `                <DataTable.Th>head1</Table.Th>`,
      `                <DataTable.Th>head2</Table.Th>`,
      `                <DataTable.Th>head3</Table.Th>`,
      `            </DataTable.Tr>`,
      `        </DataTable.Thead>`,
      `        <DataTable.Tbody>`,
      `            <DataTable.Tr>`,
      `                <DataTable.Td>data1</Table.Td>`,
      `                <DataTable.Td>data2</Table.Td>`,
      `                <DataTable.Td>data3</Table.Td>`,
      `            </DataTable.Tr>`,
      `            <DataTable.Tr>`,
      `                <DataTable.Td>data1</Table.Td>`,
      `                <DataTable.Td>data2</Table.Td>`,
      `                <DataTable.Td>data3</Table.Td>`,
      `            </DataTable.Tr>`,
      `            <DataTable.Tr>`,
      `                <DataTable.Td>data1</Table.Td>`,
      `                <DataTable.Td>data2</Table.Td>`,
      `                <DataTable.Td>data3</Table.Td>`,
      `            </DataTable.Tr>`,
      `            <DataTable.Tr>`,
      `                <DataTable.Td>data1</Table.Td>`,
      `                <DataTable.Td>data2</Table.Td>`,
      `                <DataTable.Td>data3</Table.Td>`,
      `            </DataTable.Tr>`,
      `        </DataTable.Tbody>`,
      `        <DataTable.Tfoot>`,
      `            <DataTable.Tr>`,
      `                <DataTable.Th>foot1</Table.Th>`,
      `                <DataTable.Th>foot2</Table.Th>`,
      `                <DataTable.Th>foot3</Table.Th>`,
      `            </DataTable.Tr>`,
      `        </DataTable.Tfoot>`,
      `        <DataTable.DataTablePagination lastPage={55} />`,
      `    </DataTable>`,
      `</DataTableContainer>`,
    ],
  },
];

export { documents };
