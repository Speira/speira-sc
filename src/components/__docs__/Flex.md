```js static
import { Flex } from "@speira/styled";

function DisplayFlex() {
  return (
    <Flex flexStyle={{ widht: "30rem", md: { width: "20rem" } }}>children</Flex>
  );
}
```

Simple Flex examples:

```js
<Flex>Flex</Flex>
```

```js
<Flex
  className="sp-dark"
  flexStyle={{
    padding: "1rem",
    height: "5rem",
    placeContent: "center",
    width: "100%",
    lg: { width: "20rem" },
  }}
>
  Flex
</Flex>
```
