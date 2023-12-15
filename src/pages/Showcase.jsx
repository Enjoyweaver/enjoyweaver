import "../App.css";
import videoFile from "/3Dlogo.mp4";

const Showcase = () => {
  return (
    <div className="section-fluid-main">
      <div className="section-row">
        <div className="section-col">
          <div className="section">
            <div>
              <div className="video-container">
                <video autoPlay loop muted width="690" height="580">
                  <source src={videoFile} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>Crypto Policy DAO</h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="video-container">
              <img src="inDemniFi.png" alt="" />
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>inDemniFi Crypto</h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img src="DAOveloped.png" alt="" />
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>DAoveloped</h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img src="DAoveloped.png" alt="" />
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>DAOsigner Apparel</h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img src="DA.png" alt="" />
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>Mirror Reflection</h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img src="https://assets.codepen.io/1462889/sl6.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>Funny Bunny</h2>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
