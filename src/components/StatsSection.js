import React from 'react';

const StatsSection = ({ totalGroups, totalMembers, activeGroups }) => {
  return (
    <div className="stats-section">
      <div className="row g-3 g-md-4">
        <div className="col-12 col-sm-6 col-md-4">
          <div className="stat-item">
            <div className="stat-number">{totalGroups}</div>
            <div className="stat-label">Total Groups</div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="stat-item">
            <div className="stat-number">{totalMembers.toLocaleString()}</div>
            <div className="stat-label">Total Members</div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="stat-item">
            <div className="stat-number">{activeGroups}</div>
            <div className="stat-label">Active Groups</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
