import React from 'react';

import Flex from '@src/layout/Flex/Flex';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  selected?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Menu<T extends React.ElementType = typeof ELEMENT>(
  {
    selected = false,
    disabled = false,
    children,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <Flex
      {...props}
      ref={ref}
      className={cx('menu', { selected }, { disabled }, className)}
    >
      {children}
    </Flex>
  );
}

export type SideNavMenuProps = Props<typeof ELEMENT>;
export default React.forwardRef(Menu) as typeof Menu;