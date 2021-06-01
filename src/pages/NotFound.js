import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div className="not-found">
      <div title="404 Not Found">
        <meta name="description" content="The content you are looking for cannot be found." />
      </div>
      <h1 data-testid="heading">Page Not Found</h1>
      <p>Return <Link to="/">home</Link>.</p>
    </div>
);

export default PageNotFound;