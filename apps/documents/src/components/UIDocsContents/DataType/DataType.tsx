import { Spacing, Flex, Text } from '@upcast/react-ui';

import CodeGuide from '@src/components/CodeGuide/CodeGuide';
import { useUIDocsState } from '@src/store/pageContents/uiDocs/state';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function DataType() {
  const { title, dataType } = useUIDocsState();

  return (
    <Flex className={cx('data-type')}>
      <Text typo='b1'>[{title}]에서 사용되는 타입</Text>
      <Spacing spacing={32} />
      {dataType.map(({ name, description, code }, idx) => {
        return (
          <Flex key={`${name}-${idx}`} className={cx('info')}>
            <Spacing spacing={8}></Spacing>
            <Text typo='t1'>{name}</Text>
            <Spacing spacing={16}></Spacing>
            <Text typo='b1'>{description}</Text>
            <Spacing spacing={8}></Spacing>
            <CodeGuide header='typescript' code={code} />
            <Spacing spacing={32}></Spacing>
          </Flex>
        );
      })}
    </Flex>
  );
}

export default DataType;
