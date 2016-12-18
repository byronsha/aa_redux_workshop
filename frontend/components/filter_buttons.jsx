import React from 'react';

const FilterButtons = ({filter, toggleFilter = function(){} }) => {

  const _getClassName = _filter => (
    _filter === filter ? "active" : ""
  );

  const _generateButtons = () => (
    <div>
      <button className={_getClassName("ALL")}
              onClick={() => toggleFilter("ALL")}>ALL</button>
      <button className={_getClassName("COMPLETE")}
              onClick={() => toggleFilter("COMPLETE")}>COMPLETE</button>
      <button className={_getClassName("INCOMPLETE")}
              onClick={() => toggleFilter("INCOMPLETE")}>INCOMPLETE</button>
    </div>
  );

  return (
    <div>
      {_generateButtons()}
    </div>
  )
};

export default FilterButtons;
