import styled from 'styled-components';

export const ColorBox = styled.div`
  display: block;
  min-width: 24px;
  min-height: 24px;
  background-color: ${props => props.color};
  border-radius: 2px;
`;
