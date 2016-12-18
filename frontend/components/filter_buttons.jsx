import React from 'react';

const FilterButtons = ({filter, toggleFilter = function(){} }) => {

  const _getClassName = _filter => (
    _filter === filter ? "active" : ""
  );

  const _generateButtons = () => (
    ["ALL", "COMPLETE", "INCOMPLETE"].map( filter => (
      <button key={filter}
              className={_getClassName(filter)}
              onClick={() => toggleFilter(filter)}>
              {filter}
      </button>
    ))
  );

  return (
    <div>
      {_generateButtons()}
    </div>
  )
};

export default FilterButtons;
