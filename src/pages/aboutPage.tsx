import React from "react";
import {useHistory} from "react-router-dom";

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Info</h1>
      <button className="btn" onClick={() => history.push('/')}>Back to todo list</button>
    </div>
  );
};

export default AboutPage;
