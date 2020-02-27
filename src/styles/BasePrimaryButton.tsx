import styled from 'styled-components';

export const BasePrimaryButton = styled('button')`
  transition-property: background, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;

  margin-bottom: 0;
  border-radius: 500px;
  border: 1px solid transparent;
  min-width: 160px;
  padding: 16px 14px 18px;

  background: ${props => props.theme.colors.primary};
  cursor: pointer;

  font-size: 14px;
  line-height: 1;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: normal;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  color: ${props => props.theme.colors.white};
  
  &:hover {
    background: ${props => props.theme.colors.primaryLight};
  }
`;
