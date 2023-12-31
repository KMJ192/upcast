import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  vertical?: boolean;
  horizontal?: boolean;
  children?: React.ReactNode;
  display?: 'flex' | 'grid';
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Center<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    vertical = true,
    horizontal = true,
    children,
    display = 'flex',
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('center', display, { vertical }, { horizontal }, className)}
    >
      {children}
    </ELEMENT>
  );
}

export type CenterProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Center) as typeof Center;
