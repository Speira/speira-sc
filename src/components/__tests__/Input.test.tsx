import { fireEvent, render, screen } from '../../utils/test.utils';
import { Input } from '../Input';

test('render Input', () => {
  const onChange = jest.fn();
  render(<Input placeholder="input" onChange={onChange} value="Test Input" />);
  const input = screen.getByPlaceholderText('input');
  expect(input).toBeDefined();
  expect(onChange).not.toHaveBeenCalled();
  fireEvent.change(input, { target: { value: 'new value' } });
  expect(onChange).toHaveBeenCalledWith('new value');
});
