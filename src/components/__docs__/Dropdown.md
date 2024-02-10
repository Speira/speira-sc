```js static
import { Dropdown } from '@speira/styled';

function DisplayDropdown() {
  return (
    <Dropdown label="Label">
      {(Item) => (
        <>
          <Item href="#">Item</Item>
        </>
      )}
    </Dropdown>
  );
}
```

Dropdown examples:

```js
<Dropdown label="primary Dropdown" color="primary">
  {(Item) => (
    <>
      <Item href="#">Link Item 1</Item>
      <Item href="#">Link Item 2</Item>
      <Item href="#">Link Item 3</Item>
      <Item href="#">Link Item 4</Item>
      <Item href="#">Link Item 5</Item>
    </>
  )}
</Dropdown>
```

```js
<Dropdown label="unboxed light Dropdown" color="light" unboxed>
  {(Item) => (
    <>
      <Item onClick={() => {}}>Clickable Item 1</Item>
      <Item onClick={() => {}}>Clickable Item 2</Item>
      <Item onClick={() => {}}>Clickable Item 3</Item>
      <Item onClick={() => {}}>Clickable Item 4</Item>
      <Item onClick={() => {}}>Clickable Item 5</Item>
      <Item onClick={() => {}}>Clickable Item 6</Item>
    </>
  )}
</Dropdown>
```

With Two levels dropdown

```js
<Dropdown
  label="clickable soft secondary DD"
  clickable
  color="secondary"
  spreading="soft">
  {(Item) => (
    <>
      <Item href="#">Item 1</Item>
      <Item href="#">Item 2</Item>
      <Item href="#">Item 3</Item>
      <Dropdown label="Sub Dropdown">
        {(SubItem) => (
          <>
            <SubItem href="#">SubItem 1</SubItem>
            <SubItem href="#">SubItem 2</SubItem>
            <SubItem href="#">SubItem 3</SubItem>
          </>
        )}
      </Dropdown>
      <Item href="#">Item 4</Item>
      <Item href="#">Item 5</Item>
    </>
  )}
</Dropdown>
```

```js
<Dropdown label="soft info Dropdown" status="info" spreading="soft">
  {(Item) => (
    <>
      <Item href="#">Item 1</Item>
      <Item href="#">Item 2</Item>
      <Item href="#">Item 3</Item>
      <Dropdown label="Sub Dropdown">
        {(SubItem) => (
          <>
            <SubItem href="#">SubItem 1</SubItem>
            <Dropdown label="Sub Sub Dropdown" color="primary">
              {(Sub2Item) => (
                <>
                  <Sub2Item href="#">Sub2Item 1</Sub2Item>
                  <Sub2Item href="#">Sub2Item 2</Sub2Item>
                  <Sub2Item href="#">Sub2Item 3</Sub2Item>
                </>
              )}
            </Dropdown>
            <SubItem href="#">SubItem 3</SubItem>
          </>
        )}
      </Dropdown>
      <Item href="#">Item 4</Item>
      <Item href="#">Item 5</Item>
    </>
  )}
</Dropdown>
```

```js
<Dropdown label="danger Dropdown" status="danger">
  {(Item) => (
    <>
      <Item href="#">Link Item 1</Item>
      <Item href="#">Link Item 2</Item>
      <Item href="#">Link Item 3</Item>
      <Item href="#">Link Item 4</Item>
      <Item href="#">Link Item 5</Item>
    </>
  )}
</Dropdown>
```
