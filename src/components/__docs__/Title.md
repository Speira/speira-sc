```tsx static
import { Title } from '@speira/styled';

function DisplayTitle() {
  return <Title as="h2">My title</Title>;
}
```

Simple Title examples:

```tsx
<Title> H1 Title</Title>
```

H2 Primary Title:

```tsx
<Title as="h2" color="primary">
  H2 Title
</Title>
```

H3 Secondary Title:

```tsx
<Title as="h3" color="secondary">
  H3 Title
</Title>
```

H4 status info Title:

```tsx
<Title as="h4" status="info">
  H4 Title
</Title>
```

Strong status danger Title:

```tsx
<Title as="strong" status="danger">
  Strong danger Title
</Title>
```

Bold status warning Title:

```tsx
<Title as="b" status="warning">
  Bold warning Title
</Title>
```
