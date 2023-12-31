import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Badge',
    defaultTag: 'span',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
      {
        name: 'colorScheme',
        type: `"primary" | "success" | "info" | "warning" | "danger" | "custom"`,
        defaultValue: 'primary',
        description: '색상 지정 (custom CSS 변수 지정)',
        essential: false,
      },
    ],
  },
];

export { apis };
