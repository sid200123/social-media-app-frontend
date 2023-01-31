import React from "react";
import { Carousel } from "react-bootstrap";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="overflow-scroll h-100">
      <div>
        <Carousel fade>
          <Carousel.Item style={{ height: "92vh" }}>
            <img
              style={{ height: "100%", backgroundSize: "cover" }}
              className="d-block w-100"
              src={"imgs/third.jpg"}
              alt="first"
            />
            <Carousel.Caption>
              <h3>First Demo </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "92vh" }}>
            <img
              style={{ height: "100%", backgroundSize: "cover" }}
              className="d-block w-100"
              src={"imgs/second.jpg"}
              alt="second"
            />
            <Carousel.Caption>
              <h3>Second Demo</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "92vh" }}>
            <img
              style={{ height: "100%", backgroundSize: "cover" }}
              className="d-block w-100"
              src={"imgs/third.jpg"}
              alt="Third"
            />
            <Carousel.Caption>
              <h3>Third Demo</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "92vh" }}>
            <img
              style={{ height: "100%", backgroundSize: "cover" }}
              className="d-block w-100"
              src={"imgs/fourth.jpg"}
              alt="fourth"
            />
            <Carousel.Caption>
              <h3>Fourth Demo</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        <div
          className="card my-5 w-50 p-5 shadow border-primary"
          style={{ borderRadius: "20% 30%" }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/first.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/third.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/second.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/first.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex container justify-content-end">
        <div
          className="card shadow border-success my-2 w-50 shadow p-5"
          style={{ borderRadius: "30% 20%" }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/third.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/second.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/first.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/third.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex container justify-content-end">
        <div className="card border-primary my-4 w-100 p-4 bordered">
          <div className="card-header text-center text-warning fw-bold fs-2 border-0">
            Photos
          </div>
          <div className="card-body">
            <div className="row border border-warning rounded p-4">
              <div className="col-lg-6 border-right border-warning">
                <div className="h-100">
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/fourth.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
              <div className="col-lg-6 h-100">
                <div className="h-100">
                  <div className="row h-100">
                    <div className="col-lg-6 my-2">
                      <div>
                        <img
                          style={{ height: "100%", backgroundSize: "cover" }}
                          className="d-block w-100 rounded"
                          src={"imgs/first.jpg"}
                          alt="fourth"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div>
                        <img
                          style={{ height: "100%", backgroundSize: "cover" }}
                          className="d-block w-100 rounded"
                          src={"imgs/second.jpg"}
                          alt="fourth"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div>
                        <img
                          style={{ height: "100%", backgroundSize: "cover" }}
                          className="d-block w-100 rounded"
                          src={"imgs/third.jpg"}
                          alt="fourth"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div>
                        <img
                          style={{ height: "100%", backgroundSize: "cover" }}
                          className="d-block w-100 rounded"
                          src={"imgs/first.jpg"}
                          alt="fourth"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div>
                        <img
                          style={{ height: "100%", backgroundSize: "cover" }}
                          className="d-block w-100 rounded"
                          src={"imgs/second.jpg"}
                          alt="fourth"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div>
                        <img
                          style={{ height: "100%", backgroundSize: "cover" }}
                          className="d-block w-100 rounded"
                          src={"imgs/third.jpg"}
                          alt="fourth"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
