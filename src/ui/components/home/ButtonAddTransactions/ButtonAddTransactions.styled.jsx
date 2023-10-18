import styled from 'styled-components';

export const StyledBtnWrap = styled.div`
  position: fixed;
  bottom: 10px;
  right: 5px;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 25px;
    right: 20px;
  }
  @media screen and (min-width: 1280px) {
    position: fixed;
  }
`;
