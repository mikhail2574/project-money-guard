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
  .Select__control {
    background-color: transparent;
    height: 50px;
    width: 100%;
    border: 0;
    box-shadow: none;
    cursor: pointer;
    color: rgba(251, 251, 251, 1);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    background: rgba(74, 86, 226, 0.1);
  }

  .Select__placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  .Select__single-value {
    color: rgba(251, 251, 251, 1);
  }

  .Select__control--is-focused {
    border: 0;
    outline: none;
    box-shadow: 5px 0px 50px 10px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.6);
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__indicator {
    color: rgba(255, 255, 255, 0.1);
    width: auto;
  }

  .Select__menu {
    background: linear-gradient(
      210deg,
      rgba(83, 61, 186, 1) 0%,
      rgba(80, 48, 154, 1) 43.14%,
      rgba(106, 70, 165, 1) 73.27%,
      rgba(133, 93, 175, 0.9) 120.03%
    );
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    color: rgba(251, 251, 251, 1);
    font-size: 16px;
    border-radius: 8px;
    max-height: 352px;
  }

  .Select__menu-list {
    height: 160px;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #bfb4dd;
      border-radius: 12px;
    }
  }

  .css-t3ipsp-control {
    border: 1px solid rgba(255, 255, 255, 0.6);
  }
  .Select__option--is-focused {
    color: rgba(255, 134, 141, 1);
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
  .Select__option--is-selected {
    color: rgba(255, 134, 141, 1);
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
  }

  .Select__dropdown-indicator {
    color: rgba(251, 251, 251, 1);
  }
`;
