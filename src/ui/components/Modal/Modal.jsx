import { useModal } from 'ui/hooks/useModal';
import { StyledButton, StyledOverlay } from './Modal.styled';
import closeIcon from 'ui/icons/close.svg';

export const Modal = () => {
  const { close } = useModal();
  const handleClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };
  return (
    <StyledOverlay onClick={handleClick}>
      <div>
        <StyledButton onClick={() => close()}>
          <img src={closeIcon} alt="" />
        </StyledButton>
      </div>
    </StyledOverlay>
  );
};
