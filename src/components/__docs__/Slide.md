```js static
import { Slide } from '@speira/styled';

function DisplaySlide() {
  return (
    <Slide>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
    </Slide>
  );
}
```

Simple Slide examples:

```js
import Card from '@speira/sc/Card';
<Slide gap={120} range={2} duration={12} hideAfter="xl">
  <Card>Slide 1</Card>
  <Card>Slide 2</Card>
  <Card>Slide 3</Card>
  <Card>Slide 4</Card>
</Slide>;
```

Primary Slide:

```js
import Card from '@speira/sc/Card';
<Slide gap={120} color="primary" range={2} duration={12} hideAfter="xl">
  <Card>Slide 1</Card>
  <Card>Slide 2</Card>
  <Card>Slide 3</Card>
  <Card>Slide 4</Card>
</Slide>;
```

Primary hollow Slide:

```js
import Card from '@speira/sc/Card';
<Slide
  gap={120}
  color="primary"
  spreading="hollow"
  range={2}
  duration={12}
  hideAfter="xl">
  <Card>Slide 1</Card>
  <Card>Slide 2</Card>
  <Card>Slide 3</Card>
  <Card>Slide 4</Card>
</Slide>;
```

Primary soft Slide

```js
import Card from '@speira/sc/Card';
<Slide
  gap={120}
  color="primary"
  spreading="soft"
  range={2}
  duration={12}
  hideAfter="xl">
  <Card>Slide 1</Card>
  <Card>Slide 2</Card>
  <Card>Slide 3</Card>
  <Card>Slide 4</Card>
</Slide>;
```

Primary silent Slide

```js
import Card from '@speira/sc/Card';
<Slide
  gap={120}
  color="primary"
  spreading="silent"
  range={2}
  duration={12}
  hideAfter="xl">
  <Card>Slide 1</Card>
  <Card>Slide 2</Card>
  <Card>Slide 3</Card>
  <Card>Slide 4</Card>
</Slide>;
```

Infinite Secondary Slide:

```js
import Card from '@speira/sc/Card';
<Slide
  color="secondary"
  gap={120}
  range={2}
  duration={12}
  hideAfter="xl"
  infinite>
  <Card>Slide 1</Card>
  <Card>Slide 2</Card>
  <Card>Slide 3</Card>
  <Card>Slide 4</Card>
</Slide>;
```

Infinite Secondary hollow Slide:

```js
import Card from '@speira/sc/Card';
<Slide
  color="secondary"
  spreading="hollow"
  gap={120}
  range={2}
  duration={12}
  hideAfter="xl"
  infinite>
  <Card>Slide 1</Card>
  <Card>Slide 2</Card>
  <Card>Slide 3</Card>
  <Card>Slide 4</Card>
</Slide>;
```

Infinite Secondary soft Slide:

```js
import Card from '@speira/sc/Card';
<Slide
  color="secondary"
  spreading="soft"
  gap={120}
  range={2}
  duration={12}
  hideAfter="xl"
  infinite>
  <Card>Slide 1</Card>
  <Card>Slide 2</Card>
  <Card>Slide 3</Card>
  <Card>Slide 4</Card>
</Slide>;
```

Infinite primary with Images:

```js
import Image from '@speira/sc/Image';
<Slide range={3} color="primary" spreading="soft" duration={12} infinite>
  {Array(7)
    .fill(0)
    .map((_, i) => (
      <Image
        key={i}
        shape="rounded"
        alt="example"
        src="https://placehold.co/150x150"
        height="150"
        width="150"
      />
    ))}
</Slide>;
```
