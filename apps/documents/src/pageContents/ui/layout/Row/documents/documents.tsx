import { Row } from '@upcast/react-ui';

import type { Documents } from '@src/store/pageContents/uiDocs/state';

const documents: Array<Documents> = [
  {
    title: 'Row',
    description: '',
    view: <Row>This is Row</Row>,
    componentString: [`<Row>This is Row</Row>`],
  },
];

export { documents };
