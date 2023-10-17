import styled from 'styled-components';

export const Wrap = styled.div`
  background: rgba(74, 86, 226, 0.1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  width: 320px;
  margin: auto;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 4px;
    right: 32px;
    width: 336px;
    height: 214px;
  }

  @media screen and (min-width: 1280px) {
    width: 480px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    background: rgba(74, 86, 226, 0.1);

    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
  }
`;

export const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  color: var(--white);

  @media screen and (min-width: 1280px) {
    width: 480px;
  }

  th,
  td {
    text-align: center;
    line-height: 1.5;
    @media screen and (min-width: 1280px) {
      font-size: 16px;
    }
  }

  th {
    font-weight: 600;
    line-height: 1.5;
    padding: 19px;

    @media screen and (min-width: 1280px) {
      padding: 17px;
    }
  }

  thead th:nth-child(1) {
    width: 33%;
    padding-left: 20px;
    text-align: left;

    @media screen and (min-width: 1280px) {
      padding-left: 62px;
    }
  }

  thead th:nth-child(2) {
    width: 34%;
  }

  thead th:nth-child(3) {
    width: 33%;
    padding-right: 20px;
    text-align: right;

    @media screen and (min-width: 1280px) {
      padding-right: 130px;
    }
  }

  td {
    padding: 8px 8px 4px;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
    }

    @media screen and (min-width: 1280px) {
      padding: 24px 8px 0px;
    }
  }

  tbody td:nth-child(1) {
    padding-left: 20px;
    text-align: left;

    @media screen and (min-width: 1280px) {
      padding-left: 84px;
    }
  }

  tbody td:nth-child(3) {
    padding-right: 20px;
    text-align: right;

    @media screen and (min-width: 1280px) {
      padding-right: 130px;
    }
  }
  tbody tr:nth-child(2) {
    td {
      padding-bottom: 0px;
    }
  }

  thead {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Graph = styled.div`
  position: relative;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  img {
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
  }
`;

export const Ball = styled.span`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline;
    position: absolute;
    top: 13px;
    left: 46px;
    color: rgba(255, 134, 141, 1);
    font-size: 12px;
  }
`;

export const BallEur = styled.span`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline;
    position: absolute;
    top: -20px;
    right: 94px;
    color: rgba(255, 134, 141, 1);
    font-size: 12px;
  }
`;
