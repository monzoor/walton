import React from 'react';

const SectionHeader = ({ title, icon, border }) => (
  <div className={`row ${border} mx-0`}>
    <div className="col-12 px-0">
      <div className="row justify-content-between align-items-end">
        <div className="col-5">
          <div className="btn btn-primary text-white py-3">
            <i className={icon}></i>
            {title}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SectionHeader;
