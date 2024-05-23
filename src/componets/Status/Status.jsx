import React from "react";

const Status = ({ todoData, doneLength }) => {
  return (
    <div className="status">
      <div className="status__inner">
        <div className="status__wrapper">
          <span className="status__cal">{todoData}</span>
          <span>more to do,</span>
        </div>
        <div className="status__wrapper">
          <span className="status__calresult">{doneLength}</span>
          <span>done</span>
        </div>
      </div>
    </div>
  );
};

export default Status;
