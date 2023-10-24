import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundPageSection, NotFoundPageStyled } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Single Page Apps for GitHub Pages</title>
          <script type="text/javascript">
            var pathSegmentsToKeep = 1; var l = window.location; l.replace(
            l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
            l.pathname .split('/') .slice(0, 1 + pathSegmentsToKeep) .join('/')
            + '/?/' + l.pathname .slice(1) .split('/')
            .slice(pathSegmentsToKeep) .join('/') .replace(/&/g, '~and~') +
            (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
            l.hash
          </script>
        </head>
        <body>
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
        </body>
      </html>
    </>
  );
};

export default NotFoundPage;
