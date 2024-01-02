export default function About() {
  return (
    <div>
      <div className="pt-40 flex items-center">
        <div className="w-1/3 pl-20 grid place-items-center">
          <img
            src="me.png"
            alt="Logo"
            style={{ maxWidth: "100%", height: "auto", display: "block" }}
          />
        </div>
        <div className="w-2/3 text-left" style={{ maxWidth: "1000px" }}>
          <p
            className="text-left"
            style={{ color: "var(--header-color)", fontSize: "3rem" }}
          >
            Michael Weaver
          </p>
          <br></br>
          <p
            className="text-left"
            style={{ color: "var(--header-color)", fontSize: "1.5rem" }}
          >
            Web3 Wanderer || Fantom Maxi || Enterprise Risk Manager
          </p>

          <br></br>
          <div className="text-left">
            <p style={{ color: "var(--description-color)" }}>
              I first heard about Bitcoin from my brother in 2010 when he was
              building computers as a career at the time. I couldnt understand
              or comprehend it but he started minin g in 2011 and was earning
              about 2 BTC a month when it was around $4 and would trade them for
              coffee. Kinda unreal to think someone was already accepting
              bitcoin payment for coffee in 2011, but regrettably my brother
              never kept any bitcoin. So, long story short here, I missed out on
              Bitcoin in 2011 but I wont let myself miss out on crypto anymore.
            </p>
            <br />
            <p style={{ color: "var(--description-color)" }}>
              But anyways, I later went to undergrad at the University of South
              Carolina and received a bachelors in Political Science. Then I
              quickly went on to get an MBA in Data Analytics from the
              University of South Carolina as well. I then became a Captive
              Insurance producer in 2014 and started my expanding into
              Enterprise Risk Management in 2015. I went on to earn the
              following professional designations:
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
