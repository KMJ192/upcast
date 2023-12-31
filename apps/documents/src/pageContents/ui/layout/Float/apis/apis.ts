import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Float',
    defaultTag: 'div',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
      {
        name: 'startDirection',
        type: '"lt" | "lb" | "rt" | "rb"',
        defaultValue: 'lt',
        description: '위치 지정',
        essential: false,
      },
      {
        name: 'left',
        type: 'number',
        defaultValue: 'undefined',
        description:
          '화면 왼쪽 기준 위치 지정 - startDirection이 "l"인 경우 적용',
        essential: false,
      },
      {
        name: 'right',
        type: 'number',
        defaultValue: 'undefined',
        description:
          '화면 오른쪽 기준 위치 지정 - startDirection이 "r"인 경우 적용',
        essential: false,
      },
      {
        name: 'top',
        type: 'number',
        defaultValue: 'undefined',
        description:
          '화면 상단 기준 위치 지정 - startDirection이 "t"인 경우 적용',
        essential: false,
      },
      {
        name: 'bottom',
        type: 'number',
        defaultValue: 'undefined',
        description:
          '화면 하단 기준 위치 지정 - startDirection이 "b"인 경우 적용',
        essential: false,
      },
    ],
  },
];

export { apis };
