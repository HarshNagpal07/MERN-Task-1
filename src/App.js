import React, { useState } from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import StatsSection from './components/StatsSection';
import GroupsList from './components/GroupsList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample data for groups
  const groupsData = [
    {
      id: 1,
      title: "Tech Enthusiasts",
      description: "A community for technology lovers and innovators",
      members: 1250,
      avatar: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&crop=face",
      category: "technology"
    },
    {
      id: 2,
      title: "Design Community",
      description: "Creative minds sharing design inspiration and tips",
      members: 890,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      category: "design"
    },
    {
      id: 3,
      title: "Fitness Warriors",
      description: "Stay fit and healthy with our supportive community",
      members: 2100,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      category: "fitness"
    },
    {
      id: 4,
      title: "Photography Club",
      description: "Capture moments and share your best shots",
      members: 675,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      category: "photography"
    },
    {
      id: 5,
      title: "Book Lovers",
      description: "Discuss your favorite books and discover new ones",
      members: 1450,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      category: "books"
    },
    {
      id: 6,
      title: "Cooking Masters",
      description: "Share recipes and cooking techniques",
      members: 980,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      category: "cooking"
    }
  ];

  const filteredGroups = groupsData.filter(group => {
    const matchesSearch = group.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || group.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const totalGroups = groupsData.length;
  const totalMembers = groupsData.reduce((sum, group) => sum + group.members, 0);
  const activeGroups = groupsData.filter(group => group.members > 1000).length;

  return (
    <div className="groups-container">
      <Header />
      <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5">
        <div className="row g-3 g-md-4">
          <div className="col-12">
            <SearchSection 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>
        </div>
        
        <div className="row g-3 g-md-4">
          <div className="col-12">
            <StatsSection 
              totalGroups={totalGroups}
              totalMembers={totalMembers}
              activeGroups={activeGroups}
            />
          </div>
        </div>
        
        <div className="row g-3 g-md-4">
          <div className="col-12">
            <GroupsList groups={filteredGroups} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
