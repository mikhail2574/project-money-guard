import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const ColorBox = styled.div`
  display: block;
  min-width: 24px;
  min-height: 24px;
  background-color: ${props => props.color};
  border-radius: 2px;
`;
