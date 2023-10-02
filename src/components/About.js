const About = () => {
  return (
    <div className="about-cntnr">
      <div className="data-cntnr">
        <p className="data">
          Created on September 30 , 2023. All the famous listed restaurant in
          the city, using Swiggy's live API.
          <br /> Created using React.js, used custom hooks like useState and
          useEffect , parcel as a bundler also implemented Shimmer UI to improve
          better overall experience
          <br /> This website is created by myself under guidance of 'Namaste
          React' but a different overall overview , styling and UX.It also
          include search feature and Top restaurant features with ratings above
          4.0 stars. <br/> To know more visit -
          <a href="https://www.linkedin.com/in/shivang-tripathi-">
            {" "}
            Linkedin/Shivang Tripathi
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
