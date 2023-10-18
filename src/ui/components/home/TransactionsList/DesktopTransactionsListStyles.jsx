import styled from 'styled-components';

export const DesktopTransactionList = styled.ul`
  width: 704px;

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-top: 20px;
  }

  @media (min-width: 1279px) {
    margin-top: 46px;
    margin-left: 69px;
  }
`;
export const PropertyHeaderList = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding-left: 20px;
  padding-right: 10px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
`;

export const PropertyHeader = styled.li`
  flex: 1;
  width: ${props => props.$width};
  color: #fbfbfb;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: ${props => props.$align || 'start'};
`;

export const ItemProperty = styled.li`
  flex: 1;
  display: -webkit-box;
  max-width: 112px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${props =>
    props.$sum ? (props.$plus ? '#FFB627' : '#FF868D') : '#fbfbfb'};
  width: ${props => props.$width};
  padding-left: ${props => props.$pl || '0px'};
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: ${props => (props.$sum ? 600 : 400)};
  line-height: normal;
  text-align: ${props => props.$align || 'start'};
`;

export const ButtonContainer = styled.li`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DesktopTransactionsItem = styled.ul`
  display: flex;
  align-items: center;
  height: 56px;
  padding-left: 20px;
  padding-right: 10px;
  border-bottom: 1px solid var(--transp-40);
`;

export const HiddenSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
