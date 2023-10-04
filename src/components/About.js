// import User from "./User";
import UserClass from "./UserClass";

import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="about-cntnr">
        {/* <User name='shivang' location='gkp' /> */}
        <UserClass />
      </div>
    );
  }
}

export default About;
