import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: grid;
  place-content: center;
  & div {
    background-color: white;
    width: 350px;
    border: 2px solid grey;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
  }
`;

export const StyledButton = styled.span`
  position: absolute;
  cursor: pointer;
  top: 5px;
  right: 5px;
`;
