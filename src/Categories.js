import React from 'react';

const Categories = ({categories, filterItmes }) => {
  return (
  <div className="btn-container">
  {categories.map((category, index)=>{
    return <button type="button" className="filter-btn" key={index} onClick={()=> filterItmes(category)}>
    {category}
    </button>
  })}
  </div>);
};

export default Categories;
