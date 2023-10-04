import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shivang007-bond");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    // console.log('child component did update')
  }

  componentWillUnmount() {
    // console.log('child component will unmount')
  }

  render() {
    const { name, bio, location, blog, avatar_url, html_url } =
      this.state.userInfo;

    return (
      <div className="user-card">
        <img className="profile-img" src={avatar_url} />
        <div className="user-card-text">
          <p>Name: {name}</p>
          <p>Bio: {bio} </p>
          <p>Location: {location} </p>
          <p>Linkedin: {blog}</p>
          <p>Github: {html_url}</p>
        </div>
      </div>
    );
  }
}

export default UserClass;
