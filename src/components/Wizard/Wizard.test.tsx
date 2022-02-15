import { render } from '../../test-utils';
import { Wizard } from './Wizard';

test('Wizard', () => {
  const { getByText } = render(<Wizard />);
  expect(getByText('Page 1')).toBeInTheDocument();
});
