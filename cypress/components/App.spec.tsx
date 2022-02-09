import { mount } from '@cypress/react';
import Button from '@/components/Button/Button';

it('renders the button', () => {
  mount(<Button>Hello</Button>);
  cy.contains('Hello');
});
