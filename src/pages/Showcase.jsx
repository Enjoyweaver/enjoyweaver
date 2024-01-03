import "../App.css";
import cpDAO from "/3Dlogo.mp4";
import DA from "/DA.mp4";
import sm from "/safememe.mp4";

const Showcase = () => {
  return (
    <div className="section-fluid-main">
      <div className="section-row">
        <div className="section-col">
          <div className="section">
            <a
              href="https://twitter.com/CryptoPolicyDAO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="video-container">
                <video autoPlay loop muted width="690" height="580">
                  <source src={cpDAO} type="video/mp4" />
                </video>
              </div>
            </a>
          </div>
        </div>
        <div className="hover-text">
          <h2>Crypto Policy DAO</h2>
        </div>

        <div className="section-col">
          <div className="section">
            <a
              href="https://twitter.com/inDemniFi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="video-container">
                <img src="inDemniFi.png" alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="hover-text">
          <h2>inDemniFi Crypto</h2>
        </div>
        <div className="section-col">
          <div className="section">
            <a
              href="https://twitter.com/DAOveloped"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="video-container">
                <img src="DAOveloped.png" alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="hover-text">
          <h2>DAOveloped</h2>
        </div>
        <div className="section-col">
          <div className="section">
            <a
              href="https://twitter.com/_Collaborating "
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="video-container">
                <img src="Collaborating.png" alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="hover-text">
          <h2>Collaborating</h2>
        </div>
        <div className="section-col">
          <div className="section">
            <a
              href="https://twitter.com/FantomFluid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="video-container">
                <img src="FantomFluid.png" alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="hover-text">
          <h2>Fantom Fluid</h2>
        </div>
        <div className="section-col">
          <div className="section">
            <a
              href="https://twitter.com/DAOsignrApparel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="video-container">
                <video autoPlay loop muted width="690" height="580">
                  <source src={DA} type="video/mp4" />
                </video>
              </div>
            </a>
          </div>
        </div>
        <div className="hover-text">
          <h2>DAOsigner Apparel</h2>
        </div>
        <div className="section-col">
          <div className="section">
            <a
              href="https://twitter.com/SafeMemeX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="video-container">
                <video autoPlay loop muted width="690" height="580">
                  <source src={sm} type="video/mp4" />
                </video>
              </div>
            </a>
          </div>
        </div>
        <div className="hover-text">
          <h2>SafeMeme</h2>
        </div>
        <div className="section-col">
          <div className="section">
            <a
              href="https://twitter.com/Motivate__Labs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="video-container">
                <img src="motivatelogo.png" alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="hover-text">
          <h2>Motivate Labs</h2>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
