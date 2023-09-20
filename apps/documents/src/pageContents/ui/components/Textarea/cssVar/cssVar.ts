import { CSS_VAR_TYPE } from '@src/components/UIDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/pageContents/uiDocs/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--upcast-color-textarea-border',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary600,
    description: '경계선 색상 - 기본',
  },
  {
    name: '--upcast-color-textarea-border-focus',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue500,
    description: '경계선 색상 - 포커싱',
  },
  {
    name: '--upcast-color-textarea-border-error',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.danger,
    description: '경계선 색상 - 오류',
  },
  {
    name: '--upcast-color-textarea-border-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: '경계선 색상 - 비활성화',
  },
  {
    name: '--upcast-color-textarea-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: '배경 색상 - 기본',
  },
  {
    name: '--upcast-color-textarea-bg-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray000,
    description: '배경 색상 - 비활성화',
  },
  {
    name: '--upcast-color-textarea-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 기본',
  },
  {
    name: '--upcast-color-textarea-text-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 비활성화',
  },
  {
    name: '--upcast-color-textarea-placeholder',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: 'Placeholder 색상 - 기본',
  },
  {
    name: '--upcast-color-textarea-placeholder-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: 'Placeholder 색상 - 비활성화',
  },
  {
    name: '--upcast-color-textarea-box-shadow',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: '0px 3px 6px rgba(62, 62, 62, 0.1)',
    description: '그림자 색상',
  },
];
export { cssVar };