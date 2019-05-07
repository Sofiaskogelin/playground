function About() {
  return (
    <div className="about-section">
      <h2 className="about-text">About me</h2>
      <div className="test"> </div>
      <div className="test-1"> </div>
      <div className="test"> </div>

      <style jsx>
        {`
          .about-section {
            height: 100vh;
          }
          .about-text {
            position: relative;
            left: 50px;
            font-family: "Montserrat", sans-serif;
            font-size: 3em;
          }
        `}
      </style>
    </div>
  );
}

export default About;
