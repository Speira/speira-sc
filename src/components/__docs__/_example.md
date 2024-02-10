```tsx
import Flex from '@speira/sc/Flex';
import Card from '@speira/sc/Card';
import Alert from '@speira/sc/Alert';
import Breadcrumb from '@speira/sc/Breadcrumb';
import Button from '@speira/sc/Button';
import Dropdown from '@speira/sc/Dropdown';
import Image from '@speira/sc/Image';
import Menu from '@speira/sc/Menu';
import Link from '@speira/sc/Link';
import Title from '@speira/sc/Title';
<Flex
  id="example-dashboard"
  flexStyle={{
    display: 'grid',
    position: 'relative',
    gridTemplateColumns: '200px 1fr',
    height: '800px',
    width: '100%',
  }}>
  <Flex
    as="section"
    color="primary"
    direction="column"
    flexStyle={{ padding: '16px 0px' }}>
    <Title align="center">Brand</Title>
    <Link to="#">Link 1</Link>
    <Link to="#">Link 2</Link>
    <Dropdown unboxed label="Dropdown 1">
      {(Item) => (
        <>
          <Item href="#">Link Item 1</Item>
          <Item href="#">Link Item 2</Item>
        </>
      )}
    </Dropdown>
    <Link to="#">Link 3</Link>
  </Flex>
  <Flex direction="column">
    <Flex color="secondary" align="end" flexStyle={{ height: '80px' }}>
      <Menu brand="My Brand" color="light" parentId="example-dashboard">
        <Link to="#">Link 1</Link>
        <Link to="#">Link 2</Link>
        <Link to="#">Link 3</Link>
      </Menu>
    </Flex>
    <Flex direction="column" rowGap="1rem" padding="16px 16px">
      <Title as="h2" label="Title" />
      <Flex align="start">
        <Breadcrumb
          color="primary"
          path={[
            { label: 'home', url: '#' },
            { label: 'example', url: '#' },
            { label: 'default', url: '#' },
          ]}
        />
      </Flex>
      <Alert spreading="soft" status="info" message="Informations" />
      <Flex align="start" columnGap="16px">
        <Button color="primary" label="Button 1" />
        <Button color="primary" spreading="hollow" label="Button 2" />
        <Button color="primary" spreading="soft" label="Button 3" />
      </Flex>
      <Flex align="start">
        <Card color="primary" spreading="soft">
          <Title as="b" label="Card" />
          <Image
            alt="example"
            src="https://placehold.co/600x400"
            width="200px"
          />
        </Card>
      </Flex>
    </Flex>
  </Flex>
</Flex>;
```
