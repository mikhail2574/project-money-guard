import { Blocks } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

export const LoaderSpinner = () => {
  return (
    <LoaderStyle>
      <Blocks
        visible={true}
        height="60"
        width="60"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </LoaderStyle>
  );
};
