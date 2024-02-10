import { assert } from 'chai';

import { media, toStylesheet } from '../utils/responsive.utils';

test('media', () => {
  Object.keys(media).map((size) =>
    assert.match(
      media[size as keyof typeof media],
      /@media \(min-width: \d{3,4}px\)/,
    ),
  );
});

test('toStylesheet', () => {
  const exampleCSS = {
    width: '5em',
    sm: {
      cursor: 'pointer',
    },
    md: {
      backgroundColor: '#fff',
      color: '#ffa',
    },
    lg: {
      backgroundColor: '#aaa',
      color: '#aab',
      width: '4em',
    },
  };
  const { sm, md, lg } = exampleCSS;
  const result = toStylesheet({ sm, md, lg });
  assert.isObject(result);
  assert.hasAllKeys(result, ['sm', 'md', 'lg']);
});
