import { TiHome } from 'react-icons/ti';
import { FaDollarSign } from 'react-icons/fa';
import { BiStats } from 'react-icons/bi';
import { StyledLinkHome, StyledNav, StyledSpan } from './Navigation.styled';

export const Navigation = () => {
  return (
    <StyledNav>
      <ul className="list">
        <li>
          <StyledLinkHome to="/home">
            <div className="boxIcon">
              <TiHome className="icon" />
            </div>
            <StyledSpan>Home</StyledSpan>
          </StyledLinkHome>
        </li>
        <li>
          <StyledLinkHome to="/statistics">
            <div className="boxIcon">
              <BiStats className="icon iconRevers" />
            </div>

            <StyledSpan>Statistics</StyledSpan>
          </StyledLinkHome>
        </li>
        <li>
          <StyledLinkHome to="/currency">
            <div className="boxIconDollar">
              <FaDollarSign className="icon dollar" />
            </div>
          </StyledLinkHome>
        </li>
      </ul>
    </StyledNav>
  );
};
