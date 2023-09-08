import type { APIs } from '@src/store/components/DocsContents/state';

const apis: Array<APIs> = [
  {
    name: 'type',
    type: '"type-1" | "type-2"',
    defaultValue: '"type-1"',
    description: 'Spinner 타입',
  },
];

export { apis };