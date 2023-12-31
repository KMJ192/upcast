import React from 'react';

import { When } from '@upcast/react-modules';

import Center from '@src/layout/Center/Center';
import Flex from '@src/layout/Flex/Flex';
import Spinner from '../Spinner/Spinner';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import type { Shape, Variant } from './types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  variant?: Variant;
  shape?: Shape;
  loading?: boolean;
  loadingElement?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'button';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Button<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    variant = 'primary',
    shape = 'rect',
    loading = false,
    loadingElement,
    className,
    leftIcon,
    rightIcon,
    disabled = false,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      disabled={disabled || loading}
      className={cx(
        'button',
        variant,
        shape,
        className,
        { disabled },
        { loading },
      )}
    >
      <Center className={cx('contents')}>
        {leftIcon && <Flex className={cx('icon')}>{leftIcon}</Flex>}
        {children}
        {rightIcon && <Flex className={cx('icon')}>{rightIcon}</Flex>}
        <When condition={loading}>
          {loadingElement !== undefined ? (
            loadingElement
          ) : (
            <Spinner className={cx('btn-spinner')} type='type-1' />
          )}
        </When>
      </Center>
    </ELEMENT>
  );
}

export type ButtonProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Button) as typeof Button;
