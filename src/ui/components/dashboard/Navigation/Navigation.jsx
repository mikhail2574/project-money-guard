import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
    </nav>
  );
};
