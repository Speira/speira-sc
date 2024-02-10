```js static
import { Fieldset } from '@speira/styled';

function DisplayFieldset() {
  return (
    <Fieldset
      flexStyle={{ widht: '30rem' }}
      legend="Fieldset"
      position="left"
      direction="column">
      children
    </Fieldset>
  );
}
```

Simple Fieldset examples:

```js
<Fieldset legend="legend">Defualt Fieldset with legend</Fieldset>
```

```js
<Fieldset legend="legend" align="start" direction="row">
  <div>start Fieldset</div>
  <div>start Fieldset</div>
</Fieldset>
```

```js
<Fieldset color="secondary" spreading="soft" align="center" direction="row">
  <div>Secondary center soft Fieldset</div>
</Fieldset>
```

```js
<Fieldset
  color="primary"
  spreading="hollow"
  legend="legend"
  align="end"
  direction="column">
  <div>Primary hollow column end Fieldset </div>
  <div>Primary hollow column end Fieldset </div>
  <div>Primary hollow column end Fieldset </div>
</Fieldset>
```
