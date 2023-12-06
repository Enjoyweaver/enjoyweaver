const About = () => {
  return (
    <div className="pt-20 flex items-center">
      <div className="w-1/3 text-center pl-10">
        <img src="logo.png" alt="Profile" />
      </div>
      <div className="w-2/3 text-left pl-20" style={{ maxWidth: "800px" }}>
        <p
          className="text-left"
          style={{ color: "var(--header-color)", fontSize: "3rem" }}
        >
          About Me
        </p>
        <br></br>
        <p
          className="text-left"
          style={{ color: "var(--header-color)", fontSize: "2rem" }}
        >
          Do with this what you will
        </p>
        <br />
        <div className="text-left">
          <p style={{ color: "var(--description-color)" }}>
            Explore my journey. Uncover my milestones, accomplishments, and
            defining moments that shape my narrative.
          </p>
          <br />
          <p style={{ color: "var(--content-color)" }}>
            This canvas reveals my story through degrees achieved, hobbies
            cherished, cultural influences, and significant life accomplishments
            that have sculpted my identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
