import React, { useState } from "react";

function CategoryFilter({ categories, onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
