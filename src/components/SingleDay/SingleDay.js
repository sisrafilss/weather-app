import React, { useState } from "react";
import Weather from "../Weather/Weather";

const SingleDay = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <Weather />
      <div className="mt-5 container" style={style.mainContainer}>
        <div className="row p-5" style={{ backgroundColor: "#ffffff" }}>
          <div className="col-md-4 col-12">
            <div className="mb-4">
              <p className="mb-0">CURRENT WEATHER</p>
              <p className="mb-0">5:26 PM</p>
            </div>
            <div className="mb-4">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2021/03/10/Sun-Icon-For-Your-Project-Graphics-9428718-1.jpg"
                alt=""
                className="img-fluid"
                style={{ width: "100px" }}
              />
              <span className="h2">
                42<sup>o</sup>C
              </span>
            </div>

            <p>Sunny</p>
          </div>
          <div className="col-md-8">
            <table className="table">
              <tbody>
                <tr>
                  <td>Real Feel Shade</td>
                  <td>
                    27 <sup>o</sup>C{" "}
                  </td>
                </tr>
                <tr>
                  <td>Air Quality</td>
                  <td>
                    <span className="text-danger">Unhealthy</span>
                  </td>
                </tr>
                <tr>
                  <td>Wind</td>
                  <td>NNW 10km/h</td>
                </tr>
                <tr>
                  <td>Wind Gusts</td>
                  <td>21 km/h</td>
                </tr>
              </tbody>
            </table>
            <div className="">
              {display ? (
                <button
                  className="btn btn-success"
                  onClick={() => setDisplay(false)}
                >
                  Hide Hourly Detail
                </button>
              ) : (
                <button
                  className="btn btn-success"
                  onClick={() => setDisplay(true)}
                >
                  See Hourly Detail
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hourly detail */}
      {display && (
        <div className="container" style={style.mainContainer}>
          <div
            className="row mt-4 p-5 pb-3"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="col-md-4 col-12">
              <div className="mb-4">
                <p className="h3">1 AM</p>
              </div>
              <div className="mb-4">
                <img
                  src="https://www.creativefabrica.com/wp-content/uploads/2021/03/10/Sun-Icon-For-Your-Project-Graphics-9428718-1.jpg"
                  alt=""
                  className="img-fluid"
                  style={{ width: "100px" }}
                />
                <span className="h2">
                  42<sup>o</sup>C
                </span>
              </div>

              <p>Sunny</p>
            </div>
            <div className="col-md-8">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Real Feel Shade</td>
                    <td>
                      27 <sup>o</sup>C{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Air Quality</td>
                    <td>
                      <span className="text-danger">Unhealthy</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Wind</td>
                    <td>NNW 10km/h</td>
                  </tr>
                  <tr>
                    <td>Wind Gusts</td>
                    <td>21 km/h</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleDay;

const style = {
  mainContainer: { paddingRight: "5%", paddingLeft: "5%" },
};
