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
      <div className="flex bg-slate-200 w-auto rounded-md m-8 text-center shadow-xl">
        <img className="rounded-full w-48 p-4 mx-48" src={avatar_url} />
        <div className="text-center py-8 font-bold">
          <p>Name: {name}</p>
          <p>Bio: " {bio}... " </p>
          <p>Location: {location} </p>
          <p>Linkedin: {blog}</p>
          <p>Github: {html_url}</p>
        </div>
      </div>
    );
  }
}

export default UserClass;
