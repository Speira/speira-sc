import { fireEvent, render, screen } from '../../utils/test.utils';
import { Button } from '../Button';

test('render Button', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick} label="Test Button" />);
  const button = screen.getByText('Test Button');
  expect(button.innerHTML).toEqual('Test Button');
  expect(onClick).not.toHaveBeenCalled();
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});
