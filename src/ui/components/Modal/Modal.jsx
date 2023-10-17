import { StyledButton, StyledContent, StyledOverlay } from './Modal.styled';
import { useMyContext } from 'context/useMyContext';
import { useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

export const Modal = ({ children }) => {
  const { close } = useMyContext();
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);
  const handleClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };
  const handleClickClose = e => {
    close();
  };
  return (
    <StyledOverlay onClick={handleClick}>
      <StyledContent>
        <StyledButton onClick={handleClickClose}>
          <IoCloseSharp
            style={{
              color: 'white',
              width: '28',
              height: '28',
            }}
          />
        </StyledButton>
        {children}
      </StyledContent>
    </StyledOverlay>
  );
};
