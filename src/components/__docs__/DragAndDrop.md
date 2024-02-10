```js static
import { DragAndDrop } from "@speira/styled";

function DisplayDragAndDrop() {
  return <DragAndDrop label="DragAndDrop">Dragable children</DragAndDrop>;
}
```

Simple DragAndDrop example:

```js
<DragAndDrop onDrop={(fileList) => {}}>DragAndDrop elements</DragAndDrop>
```

Simple clickable DragAndDrop example:

```js
<DragAndDrop
  className="sp-soft-primary"
  clickable
  placeholder="Click Me"
  onDrop={(fileList) => {}}
/>
```
