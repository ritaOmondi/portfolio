import React, { useState } from 'react'; // Import React and useState hook

export const SearchBar = () => 
    {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  return (
    <div className="search-bar">
      <i class="fas fa-search" onClick={toggleDropdown}></i> {/* Search icon with onClick handler */}
      <input type="text" placeholder="Search by Places or Location" />
      {isDropdownVisible && ( 
        <div className="search-dropdown">
          <input type="text" placeholder="Search by Places or Location" />
        </div>
      )}
    </div>
  );
};
