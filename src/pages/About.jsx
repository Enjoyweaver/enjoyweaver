export default function About() {
  return (
    <div>
      <div className="pt-40 flex items-center">
        <div className="w-1/2 pl-10 grid place-items-center">
          <img
            src="logo.jpg"
            alt="Logo"
            style={{ maxWidth: "100%", height: "auto", display: "block" }}
          />
        </div>
        <div className="w-1/2 text-left pl-10" style={{ maxWidth: "800px" }}>
          <p
            className="text-left"
            style={{ color: "var(--header-color)", fontSize: "3rem" }}
          >
            Michael Weaver
          </p>
          <br></br>
          <p
            className="text-left"
            style={{ color: "var(--header-color)", fontSize: "2rem" }}
          >
            Web3 Wanderer
          </p>

          <br></br>
          <div className="text-left">
            <p style={{ color: "var(--description-color)" }}>
              Showcase you. Showcase your capabilities, showcase your skills,
              showcase your flexibility, showcase your creativity, showcase your
              production, and showcase your passion.
            </p>
            <br />
            <p style={{ color: "var(--content-color)" }}>
              This is your template to springboard what you will showcase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
