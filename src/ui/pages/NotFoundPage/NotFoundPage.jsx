import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundPageSection, NotFoundPageStyled } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFoundPageSection>
      <NotFoundPageStyled className="text404">
        <h3>Oops!</h3>
        <h2>404</h2>
        <h3>Page not found</h3>
        <Link to={'/home'} className="link404">
          Go Home
        </Link>
      </NotFoundPageStyled>
    </NotFoundPageSection>
  );
};

export default NotFoundPage;
