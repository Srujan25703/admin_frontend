import React from "react";

function Home() {
  const containerStyle = {
    backgroundColor: "black",
    color: "white",
    height: "92.2vh",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "black",
    color: "white",
    border: "1px solid white",
    marginBottom: "20px",
  };

  const headingStyle = {
    color: "#cda45e",
  };

  const specialHeadingStyle = {
    color: "#cda45e",
  };

  const dividerStyle = {
    borderColor: "white",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <header>
        <h1>Welcome to Plates and Pleasure</h1>
        <h1 style={headingStyle}>Admin Page</h1>
      </header>
      <main>
        <h1 style={headingStyle}>Staff Details</h1>

        <div className="row">
          {/* Chefs Box */}
          <div className="col-md-4">
            <div className="card" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title" style={specialHeadingStyle}>
                  Chefs
                </h5>
                <hr style={dividerStyle} />
                <ul>
                  <li>Sanjay Tumma</li>
                  <li>Arun Vijaya</li>
                  <li>Hari Nayak</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Managers Box */}
          <div className="col-md-4">
            <div className="card" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title" style={specialHeadingStyle}>
                  Managers
                </h5>
                <hr style={dividerStyle} />
                <ul>
                  <li>Krishnan</li>
                  <li>Aradhya</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Other Staff Box */}
          <div className="col-md-4">
            <div className="card" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title" style={specialHeadingStyle}>
                  Other Staff
                </h5>
                <hr style={dividerStyle} />
                <ul>
                  <li>Meghana</li>
                  <li>Srihan</li>
                  <li>Roshan</li>
                  <li>Dakshayani</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
