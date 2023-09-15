import { Fragment } from 'react';
import { Spacing, Flex, Text } from '@ssamssam/react-ui';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { useDocsContentsState } from '@src/store/pageContents/uiDocs/state';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Documents() {
  const { documents } = useDocsContentsState();

  return documents.map(
    ({ title, description, view, componentString }, index: number) => {
      return (
        <Fragment key={index}>
          <Flex className={cx('container')}>
            <Text typo='h3'>{title}</Text>
            <Text typo='title2'>{description}</Text>
            <div className={cx('view')}>{view}</div>
            <CodeGuide header='javascript' code={componentString}></CodeGuide>
          </Flex>
          <Spacing direction='vertical' spacing={48} />
        </Fragment>
      );
    },
  );
}

export default Documents;