import { render } from '../../test-utils';
import { Button } from './Button';

test('Button', () => {
  const { getByText } = render(<Button>Submit</Button>);
  expect(getByText('Submit')).toBeInTheDocument();
});
