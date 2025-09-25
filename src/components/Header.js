import React from 'react';

const Header = () => {
  return (
    <div className="header-section">
      <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 text-center">
            <h1 className="display-4 display-sm-3 display-md-2 fw-bold mb-3 mb-sm-4">Groups</h1>
            <p className="lead mb-0 fs-5 fs-sm-4">
              Discover and join amazing communities that match your interests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
