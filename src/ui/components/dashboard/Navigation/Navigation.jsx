import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import styled from 'styled-components';
import { BsHouseDoorFill } from 'react-icons/bs';
import { PiChartLineFill } from 'react-icons/pi';

const StyledLink = styled(NavLink)`
  padding-left: 16px;
  color: #fbfbfb;
  font-size: 18px;
  display: flex;
  align-items: center;

  &.active {
    font-weight: 700;
  }
  &.active .icon {
    color: pink;
  }
  & .icon {
    color: gray;
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledLink to="/home">
            <BsHouseDoorFill className="icon" />
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/statistics">
            <PiChartLineFill className="icon" />
            Statistics
          </StyledLink>
        </li>
      </ul>
    </nav>
  );
};
