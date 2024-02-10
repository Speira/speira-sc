```tsx static
import { Breadcrumb } from '@speira/styled';

function ExampleBreadcrumb() {
  return (
    <Breadcrumb
      path={[
        { label: 'home', url: '#' },
        { label: 'user', url: '#' },
        { label: 'details', url: '#' },
      ]}
    />
  );
}
```

```tsx
<Breadcrumb
  path={[
    { label: 'home', url: '#' },
    { label: 'user', url: '' },
    { label: 'details', url: '' },
  ]}
/>
```

```tsx
<Breadcrumb
  color="primary"
  path={[
    { label: 'home', url: '#' },
    { label: 'user', url: '' },
    { label: 'details', url: '' },
  ]}
/>
```

```tsx
<Breadcrumb
  status="success"
  path={[
    { label: 'home', url: '#' },
    { label: 'user', url: '' },
    { label: 'details', url: '' },
  ]}
/>
```
