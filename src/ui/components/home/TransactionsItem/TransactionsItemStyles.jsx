import styled from 'styled-components';

export const TransactionCard = styled.ul`
  height: 293px;
  width: 280px;
  margin-bottom: 8px;
  border-left: 5px solid transparent;
  border-left-color: ${props =>
    props.$sum ? (props.$plus ? '#FFB627' : '#FF868D') : '#fbfbfb'};
  border-radius: 10px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
`;
export const CardItem = styled.li`
  display: flex;
  height: 48px;
  padding-right: 20px;
  padding-left: 15px;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  }
`;
export const ItemPropertyHeader = styled.p`
  color: #fbfbfb;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const ItemProperty = styled.p`
  margin-left: auto;
  color: ${props =>
    props.$sum ? (props.$plus ? '#FFB627' : '#FF868D') : '#fbfbfb'};
  text-align: right;
  font-family: 'Poppins';
  font-size: 16px;
  font-style: normal;
  font-weight: ${props => (props.$sum ? 600 : 400)};
  line-height: normal;
`;
export const DeleteButton = styled.button`
  display: inline-flex;
  height: 29px;
  width: 69px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border: none;
  border-radius: 18px;
  color: white;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );
  // box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  padding: 0;
  height: 24px;
  width: min-content;
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  border: none;
  background: none;
  cursor: pointer;
`;
export const EditText = styled.span``;
