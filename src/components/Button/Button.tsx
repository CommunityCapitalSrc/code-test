import styled from 'styled-components';
import { ButtonProps } from './types';

// See https://gist.github.com/richardx0/3fbe6f2186b4dbcab29afe665845bb69
// for styles of the buttons.
const StyledButton = styled.button``;

export const Button = ({ children }: ButtonProps) => (
  <StyledButton>{children}</StyledButton>
);

export default Button;
