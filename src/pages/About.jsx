export default function About() {
  return (
    <div className="pt-20 flex justify-center items-center flex-col">
      <div className="flex flex-col items-center">
        <p
          className="text-center"
          style={{
            color: "var(--header-color)",
            fontSize: "2rem",
            marginBottom: "10px",
          }}
        >
          Michael Weaver
        </p>
        <img
          src="me.png"
          alt="Logo"
          className="w-full sm:w-1/2"
          style={{ maxWidth: "200px" }}
        />

        <br />
        <p
          className="text-center"
          style={{
            color: "var(--header-color)",
            fontSize: "1.3rem",
            marginBottom: "10px",
          }}
        >
          Web3 Wanderer{" "}
          <span
            style={{
              color: "var(--nav3)",
            }}
          >
            ||
          </span>{" "}
          Insurance Underwriter{" "}
          <span
            style={{
              color: "var(--nav3)",
            }}
          >
            ||
          </span>{" "}
          Enterprise Risk Manager
        </p>
      </div>

      <div className="text-center mobilefont max-w-screen-md mb-20">
        <p
          style={{
            color: "var(--description-color)",
            maxWidth: "800px",
          }}
        >
          Academically, my background is a bit diverse. I received a
          Bachelor&apos;s degree in Political Science from the University of
          South Carolina (USC) and then quickly got an MBA in Data Analytics
          from USC as well. While working as a Captive Insurance producer since
          2014, I also began transitioning into Enterprise Risk Management in
          2015. I earned the professional certifications of ARM, CRM, CPCU, and
          CIC.
        </p>
        <br />
        <p style={{ color: "var(--description-color)" }}>
          As far as crypto, I first heard about Bitcoin from my brother in 2010
          when he was building computers as a career at the time. I couldnt
          understand or comprehend it but he started mining in 2011 and was
          earning about 2 BTC a month when it was around $4 and would trade them
          for coffee. Kinda unreal to think someone was already accepting
          bitcoin payment for coffee in 2011, but regrettably my brother never
          kept any bitcoin. So, long story short here, I missed out on Bitcoin
          in 2011 but I wont let myself miss out on crypto anymore.
        </p>
        <br />
        <p style={{ color: "var(--content-color)" }}>
          On the showcase tab are several of the projects that I am building and
          will add more as they evolve. There you will be able to see that I am
          learning Blender, which is a free and open-source 3D modeling software
          that I cant get enough of, even though Im not that good at it.
        </p>
      </div>
    </div>
  );
}
