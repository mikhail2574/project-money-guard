import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelector = styled(Select)`
  font-size: 16px;
  width: 280px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 160px;
  }
  @media screen and (min-width: 1280px) {
    width: 180px;
  }
`;
