import React, { useState } from "react";
import CompletedRequests from "../components/layout/CompletedRequests";
import DoctorMenu from "../components/layout/DoctorMenu";
import InQueueReuests from "../components/layout/InQueueReuests";

const RecentEvaluation2 = () => {
  const [activeTab, setActiveTab] = useState("InQueue");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <DoctorMenu>
      <div className="eval-cont">
        {" "}
        <div className=" evaluation-buttons-cont">
          <div
            className="d-flex buttons-cont m-auto  "
            style={{ width: "90%" }}
          >
            <button
              className={`bt-2  ${
                activeTab === "Completed" ? "active bt-3" : ""
              }`}
              onClick={() => handleTabChange("Completed")}
            >
              Completed Requests
            </button>
            <button
              className={`bt-2 ${activeTab === "InQueue" ? "active bt-3" : ""}`}
              onClick={() => handleTabChange("InQueue")}
            >
              In-Queue Requests
            </button>
          </div>

          {activeTab === "InQueue" ? <InQueueReuests /> : <CompletedRequests />}
        </div>
      </div>
    </DoctorMenu>
  );
};

export default RecentEvaluation2;
