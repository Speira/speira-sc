import { render, screen } from '../../utils/test.utils';
import { Flex } from '../Flex';

test('Flex', () => {
  render(
    <Flex className="test" testId="Test Flex">
      Test Flex
    </Flex>,
  );
  const flex = screen.getByTestId('Test Flex');

  expect(flex).toBeDefined();
  expect(flex.innerText).toEqual('Test Flex');
});
