import React from 'react';
import { Table, Text } from '@ssamssam/react-ui';

import { useDocsContentsState } from '@src/store/components/DocsContents/state';
import { useTheme } from '@src/store/theme/themeState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function APIs() {
  const { title, apis } = useDocsContentsState();
  const { theme } = useTheme();

  return (
    <Table className={cx('table', theme)}>
      <Table.Caption>
        <Text typo='t2'>{title} 컴포넌트 Props 목록</Text>
      </Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Default value</Table.Th>
          <Table.Th>Description</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {apis.map(({ name, type, description, defaultValue }, index) => {
          return (
            <Table.Tr key={`${index}-${name}`}>
              <Table.Td>{name}</Table.Td>
              <Table.Td>{type}</Table.Td>
              <Table.Td>{defaultValue}</Table.Td>
              <Table.Td>{description}</Table.Td>
            </Table.Tr>
          );
        })}
      </Table.Tbody>
    </Table>
  );
}

export default APIs;
