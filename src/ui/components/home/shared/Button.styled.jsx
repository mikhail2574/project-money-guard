import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: 280px;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  background-color: blue;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  box-shadow: 1px 6px 6px 0px rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
    width: 300px;
  }

  &.registration {
    height: 50px;
    background: linear-gradient(
      135deg,
      rgb(249, 177, 4) 12%,
      rgb(172, 43, 169) 70%,
      rgb(153, 50, 225)
    );
    color: white;
    &:hover {
      height: 50px;
      background-color: #ffffff;
      color: #623f8b;
      box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.2);
      transform: scale(1.01);
    }
  }
  &.login {
    height: 50px;
    margin-top: 40px;
    background: linear-gradient(
      135deg,
      rgb(249, 177, 4) 12%,
      rgb(172, 43, 169) 70%,
      rgb(153, 50, 225)
    );
    color: white;
    &:hover {
      height: 50px;
      background-color: #ffffff;
      color: #623f8b;
      box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.2);
      transform: scale(1.01);
    }
  }
  &.cancel {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 20px;
    padding: 5px 10px;
    margin: 10px 15px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    background-color: #ffffff;
    color: #623f8b;

    &:hover {
      height: 50px;
      background-color: #f5f4fa;
      color: #623f8b;
      box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.2);
      transform: scale(1.01);
    }
  }
`;
// ========== Біла кнопка для посилання NavLink
// export const StyledLink = styled(NavLink)`
//   width: 280px;
//   height: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: none;
//   border-radius: 20px;
//   padding: 5px 10px;
//   margin: 10px 15px;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 27px;
//   text-transform: uppercase;
//   text-decoration: none;
//   cursor: pointer;
//   background-color: #ffffff;
//   color: #623f8b;
// box-shadow: 1px 6px 6px 0px rgba(0, 0, 0, 0.2);
//   &:hover {
// transform: scale(1.01);
//     font-weight: 600;
// box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.2);
//   }
//   @media screen and (min-width: 768px) {
//     width: 300px;
//   }
// `;
