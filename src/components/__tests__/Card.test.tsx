import { render, screen } from '../../utils/test.utils';
import { Card } from '../Card';

test('Card', () => {
  render(<Card>Test Card</Card>);
  const card = screen.getByText('Test Card');
  expect(card.innerText).toEqual('Test Card');
});
