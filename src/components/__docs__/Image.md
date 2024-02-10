```js static
import { Image } from '@speira/styled';

function DisplayImage() {
  return (
    <Image src="/image.png" flexStyle={{ widht: '30rem', height: '40rem' }}>
      children
    </Image>
  );
}
```

Simple Image examples:

```js
<Image
  alt="example"
  src="https://placehold.co/600x400"
  height="400"
  width="600"
/>
```

Rounded image:

```js
<Image
  shape="rounded"
  src="https://placehold.co/600x400"
  height="400"
  width="600"
/>
```

Lower size image:

```js
<Image blur src="https://placehold.co/600x400" height="300" width="400" />
```

Curved Image

```js
<Image shape="curved" unboxed src="https://placehold.co/600x400" />
```
