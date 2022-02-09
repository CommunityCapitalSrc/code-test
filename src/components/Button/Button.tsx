import styled from 'styled-components';
import { ButtonProps } from './types';

const StyledButton = styled.button``;

export const Button = ({ children }: ButtonProps) => (
  <StyledButton>{children}</StyledButton>
);

export default Button;
