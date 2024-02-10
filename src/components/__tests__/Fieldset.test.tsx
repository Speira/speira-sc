import { render, screen } from '../../utils/test.utils';
import { Fieldset } from '../Fieldset';

test('Fieldset', () => {
  const { rerender } = render(<Fieldset>Test fieldset</Fieldset>);
  const fieldset = screen.getByText('Test fieldset');

  expect(fieldset.innerText).toEqual(expect.stringContaining('Test Fieldset'));

  expect(fieldset.className).toEqual(
    expect.stringContaining('fieldset-content'),
  );
  expect(fieldset.parentElement?.className).toEqual(
    expect.stringContaining('left'),
  );
  expect(fieldset.parentElement?.className).toEqual(
    expect.stringContaining('column'),
  );
  expect(fieldset.parentElement?.firstElementChild?.className).toEqual(
    expect.stringContaining('fieldset-content'),
  );

  rerender(<Fieldset legend="legend">Test fieldset</Fieldset>);
  expect(fieldset.parentElement?.firstElementChild?.className).toEqual(
    expect.stringContaining('legend'),
  );

  rerender(
    <Fieldset legend="TestLegend" align="end">
      Test fieldset
    </Fieldset>,
  );
  expect(fieldset.innerText).toEqual(expect.stringContaining('TestLegend'));
  expect(fieldset.parentElement?.className).toEqual(
    expect.stringContaining('right'),
  );
  expect(fieldset.parentElement?.className).toEqual(
    expect.stringContaining('column'),
  );
});
