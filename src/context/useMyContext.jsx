import { useContext } from 'react';
import { MyContext } from '../context/ContextProvider';

export const useMyContext = () => useContext(MyContext);
