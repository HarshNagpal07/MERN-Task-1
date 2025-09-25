import React from 'react';
import GroupCard from './GroupCard';

const GroupsList = ({ groups }) => {
  if (groups.length === 0) {
    return (
      <div className="text-center py-5">
        <h3 className="text-muted">No groups found</h3>
        <p className="text-muted">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="row g-3 g-md-4">
      {groups.map(group => (
        <div key={group.id} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <GroupCard group={group} />
        </div>
      ))}
    </div>
  );
};

export default GroupsList;
