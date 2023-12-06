import "../App.css";

export default function Home() {
  const pillarStyles = {
    marginTop: "150px", // Adjust the value as needed
  };
  return (
    <div className="pillar" style={pillarStyles}>
      <div className="row">
        <div className="wrap">
          <div className="left">get an actual job</div>
          <div className="right">doing what you love</div>
        </div>
      </div>

      <div className="row">
        <div className="wrap">
          <div className="left">and make a living</div>
          <div className="right">by being yourself</div>
        </div>
      </div>

      <div className="row">
        <div className="wrap">
          <div className="left">you can&apos;t just let</div>
          <div className="right">other people define</div>
        </div>
      </div>

      <div className="row">
        <div className="wrap">
          <div className="left">the rest of your life</div>
          <div className="right">and say you will</div>
        </div>
      </div>

      <div className="row">
        <div className="wrap">
          <div className="left">be a joke, a failure.</div>
          <div className="right">follow your heart.</div>
        </div>
      </div>

      <div className="row">
        <div className="wrap">
          <div className="left">you will end up</div>
          <div className="right">happy and free, not</div>
        </div>
      </div>

      <div className="row">
        <div className="wrap">
          <div className="left">a starving artist.</div>
          <div className="right">love you art and</div>
        </div>
      </div>

      <div className="row">
        <div className="wrap">
          <div className="left">contribute to society</div>
          <div className="right">by inspiring people</div>
        </div>
      </div>
    </div>
  );
}
