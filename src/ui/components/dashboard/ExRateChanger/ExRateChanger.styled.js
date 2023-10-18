import Select from 'react-select';
import styled from 'styled-components';

export const CustomValSelect = styled(Select)`
  .my-cosum-select__container {
    cursor: pointer;
  }
  .my-cusom-select__control {
    border-radius: 0;
    padding-right: 5px;
    font-size: 18px;
    box-shadow: none;
    border: none;
    cursor: pointer;
    background-color: transparent;

    @media screen and (max-width: 767px) {
      margin-right: 10px;
    }

    @media screen and (min-width: 768px) {
      margin-right: 40px;
    }
  }

  .my-cusom-select__control:hover {
    border-color: --transp-40;
    cursor: pointer;
  }

  .my-cusom-select__single-value {
    color: rgba(255, 134, 141, 1);
  }

  .my-cusom-select-control--is-focused {
    border: 0;
    outline: none;
  }

  .my-cusom-select__indicator {
    position: absolute;
    bottom: 7px;
    right: -2px;
    padding: 0;
    color: var(--white);
  }

  .my-cusom-select__indicator-separator {
    display: none;
  }

  .my-cusom-select__menu {
    background: linear-gradient(
      210deg,
      rgba(83, 61, 186, 1) 0%,
      rgba(80, 48, 154, 1) 43.14%,
      rgba(106, 70, 165, 1) 73.27%,
      rgba(133, 93, 175, 0.9) 120.03%
    );
    color: var(--transp-10);
  }

  .my-cusom-select__menu-list {
    color: var(--white);
    font-size: 16px;

    &::-webkit-scrollbar {
      width: 0;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--dashboard-text);
    }
  }

  .my-cusom-select__option--is-focused {
    color: rgba(255, 134, 141, 1);
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
  .my-cusom-select__option--is-selected {
    color: rgba(255, 134, 141, 1);
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
  }
`;
