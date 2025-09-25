import React from 'react';

const SearchSection = ({ searchTerm, setSearchTerm, activeFilter, setActiveFilter }) => {
  const filterOptions = [
    { value: 'all', label: 'All Groups' },
    { value: 'technology', label: 'Technology' },
    { value: 'design', label: 'Design' },
    { value: 'fitness', label: 'Fitness' },
    { value: 'photography', label: 'Photography' },
    { value: 'books', label: 'Books' },
    { value: 'cooking', label: 'Cooking' }
  ];

  return (
    <div className="search-section">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8">
          <div className="mb-3 mb-md-4">
            <div className="position-relative">
              <input
                type="text"
                className="form-control search-input w-100"
                placeholder="Search groups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
            </div>
          </div>
          
          <div className="filter-buttons d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
            {filterOptions.map(option => (
              <button
                key={option.value}
                className={`filter-btn ${activeFilter === option.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
