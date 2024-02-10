```tsx static
import { Alert } from '@speira/styled';

function SingleAlert() {
  return <Alert message="Single Alert" />;
}
```

Simple Alert example:

```tsx
<Alert message="Default Alert" />
```

```tsx
<Alert
  message="curved and soft Default Alert"
  shape="curved"
  spreading="soft"
/>
```

```tsx
<Alert
  message="Square and hollow Default Alert"
  shape="square"
  spreading="hollow"
/>
```

```tsx
<Alert
  status="warning"
  title="Warning Alert with array of messages"
  message={['first warning', 'second warning', 'third warning']}
/>
```

```tsx
<Alert
  spreading="soft"
  status="warning"
  title="Warning soft Alert with array of messages"
  message={['first warning', 'second warning', 'third warning']}
/>
```

```tsx
<Alert
  spreading="hollow"
  status="warning"
  title="Warning hollow alert with array of messages"
  message={['first warning', 'second warning', 'third warning']}
/>
```

```tsx
<Alert status="info" message="Info Alert" />
```

```tsx
<Alert spreading="soft" status="info" message="Info soft Alert" />
```

```tsx
<Alert spreading="hollow" status="info" message="Info hollow Alert" />
```

```tsx
<Alert
  status="success"
  title="Congratulation !"
  message="Your are now a member of our community"
/>
```

```tsx
<Alert
  spreading="soft"
  status="success"
  title="Congratulation !"
  message="Your are now a member of our community"
/>
```

```tsx
<Alert
  spreading="hollow"
  status="success"
  title="Congratulation !"
  message="Your are now a member of our community"
/>
```
