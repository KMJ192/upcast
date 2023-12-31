import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Flex',
    defaultTag: 'div',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
    ],
  },
];

export { apis };
