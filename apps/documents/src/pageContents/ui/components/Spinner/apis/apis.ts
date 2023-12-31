import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Spinner',
    defaultTag: 'div',
    props: [
      {
        name: 'type',
        type: '"type-1" | "type-2"',
        defaultValue: '"type-1"',
        description: 'Spinner 타입',
        essential: false,
      },
    ],
  },
];

export { apis };
