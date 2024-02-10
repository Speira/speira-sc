```js static
import { Card } from "@speira/styled";

function DisplayCard() {
  return <Card className="sp-primary">Dragable children</Card>;
}
```

Simple Card example:

```js
<Card className="sp-primary">Card element</Card>
```

With title Card example:

```js
<Card className="sp-soft-primary" width="10rem" height="10rem">
  Card element
</Card>
```

```js
<Card className="sp-secondary" width="10rem" height="10rem">
  <div>Card element 1</div>
  <div>Card element 2</div>
</Card>
```

With link and title Card example:

```js
<Card className="sp-soft-success" href="#" width="15rem" height="10rem">
  Card element
</Card>
```

```js
<Card className="sp-stroke-success" href="#" width="15rem" height="10rem">
  Card element
</Card>
```
