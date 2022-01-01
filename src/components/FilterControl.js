import React from "react";

const FilterControl = ({ filterStatus, setFilterStatus }) => {
  const handleStatus = (status) => {
    setFilterStatus(status);
  };
  return (
    <div className="item-statuses">
      <span
        className={filterStatus === "all" ? "active" : ""}
        onClick={() => handleStatus("all")}
      >
        All
      </span>
      <span
        onClick={() => handleStatus("active")}
        className={filterStatus === "active" ? "active" : ""}
      >
        Active
      </span>
      <span
        onClick={() => handleStatus("completed")}
        className={filterStatus === "completed" ? "active" : ""}
      >
        Completed
      </span>
    </div>
  );
};

export default FilterControl;
