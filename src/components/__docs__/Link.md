```js static
import { Link } from '@speira/styled';

function DisplayLink() {
  const handleChangw = () => {};
  return <Link to="/home">My Link</Link>;
}
```

Simple Link examples:

```js
<Link to="#">Link</Link>
```

```js
<Link color="primary" to="#">
  Link color primary
</Link>
```

```js
<Link color="primary" spreading="plain" shape="curved">
  plain primary curved Link
</Link>
```

```js
<Link color="primary" spreading="soft" shape="rounded">
  Link
</Link>
```

```js
<Link color="primary" spreading="silent">
  silent primary link
</Link>
```

```js
<Link color="secondary" boxed spreading="plain" to="#">
  secondary Link
</Link>
```

```js
<Link color="secondary" to="#" spreading="soft">
  soft secondary Link
</Link>
```

```js
<Link to="#" status="info">
  info Link
</Link>
```

```js
<Link to="#" status="success">
  success Link
</Link>
```

```js
<Link to="#" status="danger">
  danger Link
</Link>
```

```js
<Link to="#" status="danger" spreading="plain">
  plain danger Link
</Link>
```

```js
<Link status="warning">warning Link</Link>
```
