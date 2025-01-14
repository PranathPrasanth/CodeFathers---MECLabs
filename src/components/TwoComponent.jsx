import React from "react";
import { Link } from "react-router-dom";
import "./TwoComponent.css";
function TwoComponent() {
    return (
        <div className="vertical-tabs-container">
          <div className="tab top-tab">
            <Link to="/personalized-test" className="tab-link">
              Personalized Test
            </Link>
          </div>
          <div className="tab bottom-tab">
            <Link to="/other-feature" className="tab-link">
              Other Feature
            </Link>
          </div>
        </div>
      );
}

export default TwoComponent;