```js static
import { useTable } from '@speira/styled';

function DisplayTable() {
  const T = useTable();
  const myItems = ['Blue', 'Yellow', 'Green', 'Purple'];
  return (
    <T.Container>
      <T.Head>
        <T.Cell>Index</T.Cell>
        <T.Cell>Label</T.Cell>
      </T.Head>
      {myItems.map((item, index) => (
        <T.Row key={index}>
          <T.Cell>{index}</T.Cell>
          <T.Cell>{label}</T.Cell>
        </T.Row>
      ))}
    </T.Container>
  );
}
```

Simple Table examples:

```js
import useTable from '../../hooks/useTable';
const T = useTable();
<T.Container maxHeight="30em">
  <T.Head>
    <T.Cell head>Title</T.Cell>
    <T.Cell head>Title</T.Cell>
    <T.Cell head>Title</T.Cell>
    <T.Cell head>Title</T.Cell>
  </T.Head>
  {Array(20)
    .fill()
    .map(() => (
      <T.Row>
        <T.Cell>Item</T.Cell>
        <T.Cell>Item</T.Cell>
        <T.Cell>Item</T.Cell>
        <T.Cell>Item</T.Cell>
      </T.Row>
    ))}
</T.Container>;
```

Primary Table:

```js
import useTable from '../../hooks/useTable';
const T = useTable();
<T.Container color="primary" maxHeight="30em">
  <T.Head>
    {Array(12)
      .fill()
      .map((_, i) => (
        <T.Cell head key={i}>
          Title-{i}
        </T.Cell>
      ))}
  </T.Head>
  {Array(20)
    .fill()
    .map(() => (
      <T.Row>
        {Array(12)
          .fill()
          .map((_, i) => (
            <T.Cell key={i}>Item{i}</T.Cell>
          ))}
      </T.Row>
    ))}
</T.Container>;
```

Primary hollow Table:

```js
import useTable from '../../hooks/useTable';
const T = useTable();
<T.Container color="primary" spreading="hollow" maxHeight="30em">
  <T.Head>
    {Array(12)
      .fill()
      .map((_, i) => (
        <T.Cell head key={i}>
          Title-{i}
        </T.Cell>
      ))}
  </T.Head>
  {Array(20)
    .fill()
    .map(() => (
      <T.Row>
        {Array(12)
          .fill()
          .map((_, i) => (
            <T.Cell key={i}>Item{i}</T.Cell>
          ))}
      </T.Row>
    ))}
</T.Container>;
```

Primary soft Table:

```js
import useTable from '../../hooks/useTable';
const T = useTable();
<T.Container color="primary" spreading="soft" maxHeight="30em">
  <T.Head>
    {Array(12)
      .fill()
      .map((_, i) => (
        <T.Cell head key={i}>
          Title-{i}
        </T.Cell>
      ))}
  </T.Head>
  {Array(20)
    .fill()
    .map(() => (
      <T.Row>
        {Array(12)
          .fill()
          .map((_, i) => (
            <T.Cell key={i}>Item{i}</T.Cell>
          ))}
      </T.Row>
    ))}
</T.Container>;
```

Primary silent Table:

```js
import useTable from '../../hooks/useTable';
const T = useTable();
<T.Container color="primary" spreading="silent" maxHeight="30em">
  <T.Head>
    {Array(12)
      .fill()
      .map((_, i) => (
        <T.Cell head key={i}>
          Title-{i}
        </T.Cell>
      ))}
  </T.Head>
  {Array(20)
    .fill()
    .map(() => (
      <T.Row>
        {Array(12)
          .fill()
          .map((_, i) => (
            <T.Cell key={i}>Item{i}</T.Cell>
          ))}
      </T.Row>
    ))}
</T.Container>;
```

Secondary Table

```js
import useTable from '../../hooks/useTable';
const T = useTable();
<T.Container color="secondary" maxHeight="30em">
  <T.Head>
    {Array(12)
      .fill()
      .map((_, i) => (
        <T.Cell head key={i}>
          Title-{i}
        </T.Cell>
      ))}
  </T.Head>
  {Array(20)
    .fill()
    .map(() => (
      <T.Row>
        {Array(12)
          .fill()
          .map((_, i) => (
            <T.Cell key={i}>Item{i}</T.Cell>
          ))}
      </T.Row>
    ))}
</T.Container>;
```

Secondary soft Table:

```js
import useTable from '../../hooks/useTable';
const T = useTable();
<T.Container color="secondary" spreading="soft" maxHeight="30em">
  <T.Head>
    {Array(12)
      .fill()
      .map((_, i) => (
        <T.Cell head key={i}>
          Title-{i}
        </T.Cell>
      ))}
  </T.Head>
  {Array(20)
    .fill()
    .map(() => (
      <T.Row>
        {Array(12)
          .fill()
          .map((_, i) => (
            <T.Cell key={i}>Item{i}</T.Cell>
          ))}
      </T.Row>
    ))}
</T.Container>;
```

Secondary hollow Table:

```js
import useTable from '../../hooks/useTable';
const T = useTable();
<T.Container color="secondary" spreading="hollow" maxHeight="30em">
  <T.Head>
    {Array(12)
      .fill()
      .map((_, i) => (
        <T.Cell head key={i}>
          Title-{i}
        </T.Cell>
      ))}
  </T.Head>
  {Array(20)
    .fill()
    .map(() => (
      <T.Row>
        {Array(12)
          .fill()
          .map((_, i) => (
            <T.Cell key={i}>Item{i}</T.Cell>
          ))}
      </T.Row>
    ))}
</T.Container>;
```

Secondary silent Table:

```js
import useTable from '../../hooks/useTable';
const T = useTable();
<T.Container color="secondary" spreading="silent" maxHeight="30em">
  <T.Head>
    {Array(12)
      .fill()
      .map((_, i) => (
        <T.Cell head key={i}>
          Title-{i}
        </T.Cell>
      ))}
  </T.Head>
  {Array(20)
    .fill()
    .map(() => (
      <T.Row>
        {Array(12)
          .fill()
          .map((_, i) => (
            <T.Cell key={i}>Item{i}</T.Cell>
          ))}
      </T.Row>
    ))}
</T.Container>;
```
