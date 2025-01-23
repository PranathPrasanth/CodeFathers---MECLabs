import React from "react";
import { Link } from "react-router-dom";
import "./TwoComponent.css";

function TwoComponent() {
    return (
        <div className="vertical-tabs-container">
          <div className="tab1 top-tab">
            <Link to="/personalized-test" className="tab-link">
              Personalized Test
            </Link>
          </div>
          <div className="tab1 bottom-tab">
            <Link to="/other-feature" className="tab-link">
              Chat with AI
            </Link>
          </div>
        </div>
      );
}

export default TwoComponent;