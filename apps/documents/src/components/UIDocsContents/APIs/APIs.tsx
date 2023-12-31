import { Fragment } from 'react';
import {
  Badge,
  DataTable,
  DataTableContainer,
  Text,
  Flex,
  Spacing,
} from '@upcast/react-ui';

import { useUIDocsState } from '@src/store/pageContents/uiDocs/state';
import { useTheme } from '@src/store/theme/themeState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function APIs() {
  const { theme } = useTheme();
  const { apis } = useUIDocsState();

  return (
    <Flex className={cx('apis')}>
      {apis.map(({ title, defaultTag, props }, idx) => {
        const isLast = idx === apis.length - 1;
        return (
          <Fragment key={`${idx}-${title}`}>
            <Flex className={cx('head')}>
              <Text typo='h3'>{title}</Text>
              {defaultTag && (
                <Text typo='b2'>
                  기본 태그는{' '}
                  <strong className={cx('emphasis')}>[{defaultTag}]</strong>
                  이며, 해당 태그의 속성을 사용할 수 있습니다.
                </Text>
              )}
            </Flex>
            <Spacing spacing={16} />
            <DataTableContainer>
              <DataTable>
                <DataTable.Caption>
                  <Text typo='t2'>{title} 컴포넌트 Props</Text>
                </DataTable.Caption>
                <DataTable.Thead>
                  <DataTable.Tr>
                    <DataTable.Th>
                      <Text typo='t2'>Name</Text>
                    </DataTable.Th>
                    <DataTable.Th>
                      <Text typo='t2'>Type</Text>
                    </DataTable.Th>
                    <DataTable.Th>
                      <Text typo='t2'>Default value</Text>
                    </DataTable.Th>
                    <DataTable.Th>
                      <Text typo='t2'>Description</Text>
                    </DataTable.Th>
                  </DataTable.Tr>
                </DataTable.Thead>
                <DataTable.Tbody>
                  {props.map(
                    (
                      { name, type, description, defaultValue, essential },
                      index,
                    ) => {
                      return (
                        <DataTable.Tr key={`${index}-${name}`}>
                          <DataTable.Td className={cx('name')}>
                            <Text typo='s1'>{name}</Text>
                            {essential && (
                              <div className={cx('essential', theme)}>*</div>
                            )}
                          </DataTable.Td>
                          <DataTable.Td className={cx('type', theme)}>
                            <Badge colorSchema='custom'>
                              <Text typo='s2'>{type}</Text>
                            </Badge>
                          </DataTable.Td>
                          <DataTable.Td>
                            <Text typo='c1'>
                              {essential ? '-' : defaultValue}
                            </Text>
                          </DataTable.Td>
                          <DataTable.Td>
                            <Text typo='s2'>{description}</Text>
                          </DataTable.Td>
                        </DataTable.Tr>
                      );
                    },
                  )}
                </DataTable.Tbody>
              </DataTable>
            </DataTableContainer>
            {!isLast && <Spacing spacing={32} />}
          </Fragment>
        );
      })}
    </Flex>
  );
}

export default APIs;
