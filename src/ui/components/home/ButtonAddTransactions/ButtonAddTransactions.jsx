import plus from 'ui/icons/plus.svg';
import { useMyContext } from 'context/useMyContext';
import Button from 'ui/components/shared/Button';
import { StyledBtnWrap } from './ButtonAddTransactions.styled';

export const ButtonAddTransactions = () => {
  const { open, setTypeModal } = useMyContext();

  const handleOpen = () => {
    open();
    setTypeModal('add');
  };
  return (
    <StyledBtnWrap>
      <Button onClick={handleOpen} type="submit" variant="add">
        <img src={plus} alt="add" />
      </Button>
    </StyledBtnWrap>
  );
};
