import React from 'react';

const GroupCard = ({ group }) => {
  const handleJoin = () => {
    alert(`Joining ${group.title}...`);
  };

  const handleView = () => {
    alert(`Viewing details for ${group.title}...`);
  };

  return (
    <div className="group-card p-3 p-md-4 h-100 d-flex flex-column">
      <div className="d-flex align-items-start mb-3 flex-grow-1">
        <img
          src={group.avatar}
          alt={`${group.title} avatar`}
          className="group-avatar me-3 flex-shrink-0"
        />
        <div className="flex-grow-1 min-w-0">
          <h5 className="group-title text-truncate">{group.title}</h5>
          <p className="group-description mb-2">{group.description}</p>
          <div className="group-members">
            <i className="fas fa-users me-1"></i>
            {group.members.toLocaleString()} members
          </div>
        </div>
      </div>
      
      <div className="group-actions mt-auto">
        <div className="d-flex flex-column flex-sm-row gap-2">
          <button 
            className="btn btn-group-action btn-join flex-fill flex-sm-grow-0"
            onClick={handleJoin}
          >
            <i className="fas fa-plus me-1"></i>
            <span className="d-none d-sm-inline">Join Group</span>
            <span className="d-sm-none">Join</span>
          </button>
          <button 
            className="btn btn-group-action btn-view flex-fill flex-sm-grow-0"
            onClick={handleView}
          >
            <i className="fas fa-eye me-1"></i>
            <span className="d-none d-sm-inline">View Details</span>
            <span className="d-sm-none">View</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
