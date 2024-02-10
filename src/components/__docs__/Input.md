```js static
import { Input } from '@speira/styled';

function DisplayInput() {
  const handleChangw = () => {};
  return <Input value="MaValue" onChange={handleChange} />;
}
```

Simple Input examples:

```js
<Input onChange={() => {}} />
```

```js
<Input size="lg" onChange={() => {}} isAsync />
```

```js
<Input color="primary" size="lg" onChange={() => {}} isAsync />
```

```js
<Input status="info" size="lg" onChange={() => {}} isAsync />
```

```js
<Input size="xl" onChange={() => {}} status="success" />
```

```js
<Input size="sm" onChange={() => {}} status="danger" />
```

```js
<Input size="xs" onChange={() => {}} status="warning" />
```
