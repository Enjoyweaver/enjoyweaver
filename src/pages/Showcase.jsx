export default function Home() {
  return (
    <div className="pt-20 flex items-center">
      <div className="w-1/3 text-center pl-10">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="w-2/3 text-left pl-20" style={{ maxWidth: "800px" }}>
        <p
          className="text-left"
          style={{ color: "var(--header-color)", fontSize: "3rem" }}
        >
          Showcase You
        </p>
        <br></br>
        <p
          className="text-left"
          style={{ color: "var(--header-color)", fontSize: "2rem" }}
        >
          Let us know who you are
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
  );
}
