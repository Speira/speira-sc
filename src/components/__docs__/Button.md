```js static
import { Button } from '@speira/styled';

function DisplayButton() {
  const executeFunction = () => null;
  return <Button onClick={executeFunction}>button text</Button>;
}
```

```js
<Button onClick={() => {}}>Hello world</Button>
```

```js
<Button disabled>Disabled button</Button>
```

```js
<Button color="dark" spreading="hollow">
  hollow dark Button
</Button>
```

```js
<Button color="dark" spreading="soft" shape="curved">
  soft dark curved Button
</Button>
```

```js
<Button color="dark" spreading="silent">
  silent dark Button
</Button>
```

```js
<Button color="dark" shape="rounded">
  rounded
</Button>
```

```js
<div style={{ backgroundColor: 'black', width: 'auto', padding: '8px 0px' }}>
  <Button color="light" shape="square">
    square light button
  </Button>
</div>
```

```js
<Button color="primary">primary Button</Button>
```

```js
<Button color="secondary" shape="square">
  secondary square Button
</Button>
```

```js
<Button color="tertiary">tertiary Button</Button>
```

```js
<Button color="quaternary">quaternary Button</Button>
```

```js
<Button status="info">info Button</Button>
```

```js
<Button status="info" spreading="hollow">
  hollow info Button
</Button>
```

```js
<Button status="info" spreading="soft">
  soft info Button
</Button>
```

```js
<div style={{ backgroundColor: 'darkblue', padding: '8px 0px' }}>
  <Button status="info" spreading="silent">
    silent info Button
  </Button>
</div>
```

```js
<Button status="info" spreading="soft" unboxed label="unboxed Button" />
```

```js
<Button
  status="success"
  shape="rounded"
  flexStyle={{ height: '3em', width: '3em' }}
  label="Yes"
/>
```

```js
<Button
  status="danger"
  shape="square"
  flexStyle={{ height: '3em', width: '3em' }}
  label="No"
/>
```

```js
<Button
  status="info"
  shape="curved"
  unboxed
  flexStyle={{ height: '3em', width: '5em' }}
  label="Maybe"
/>
```

```js
<Button status="warning" spreading="soft" label="Warning button" />
```

```js
<Button status="danger">Danger button</Button>
```

```js
<Button status="danger" spreading="soft">
  soft danger button
</Button>
```

```js
<div style={{ backgroundColor: 'black', padding: '8px 0px' }}>
  <Button status="danger" spreading="silent">
    silent danger button
  </Button>
</div>
```
