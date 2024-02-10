```js static
import { Menu } from '@speira/styled';

function DisplayMenu() {
  return <Menu />;
}
```

**[_Reduce the width of the screen or window to see the responsive behavior._]**

```js
import Link from '@speira/sc/Link';
<Menu brand="Brand" hideBefore="xl">
  <Link to="#">Menu 1</Link>
  <Link to="#">Menu 2</Link>
  <Link to="#">Menu 3</Link>
  <Link to="#">Menu 4</Link>
</Menu>;
```

```js
import Link from '@speira/sc/Link';
<Menu brand="Brand" hideBefore="xl" color="primary">
  <Link to="#">Menu 1</Link>
  <Link to="#">Menu 2</Link>
  <Link to="#">Menu 3</Link>
  <Link to="#">Menu 4</Link>
</Menu>;
```

```js
import Link from '@speira/sc/Link';
<Menu hideBefore="xl" color="secondary">
  <Link to="#">Menu 1</Link>
  <Link to="#">Menu 2</Link>
  <Link to="#">Menu 3</Link>
  <Link to="#">Menu 4</Link>
</Menu>;
```

```js
import Link from '@speira/sc/Link';
<Menu hideBefore="xl" color="light">
  <Link to="#">Menu 1</Link>
  <Link to="#">Menu 2</Link>
  <Link to="#">Menu 3</Link>
  <Link to="#">Menu 4</Link>
</Menu>;
```

```js
import Link from '@speira/sc/Link';
<Menu hideBefore="xl" color="dark">
  <Link to="#">Menu 1</Link>
  <Link to="#">Menu 2</Link>
  <Link to="#">Menu 3</Link>
  <Link to="#">Menu 4</Link>
</Menu>;
```
