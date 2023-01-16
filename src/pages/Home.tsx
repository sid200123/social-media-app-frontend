import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div className="p-1 overflow-scroll h-100">
      <div>
        <Carousel fade>
          <Carousel.Item style={{ height: "92vh" }}>
            <img
              style={{ height: "100%", backgroundSize: "cover" }}
              className="d-block w-100 rounded"
              src={"imgs/first.jpg"}
              alt="first"
            />
            <Carousel.Caption>
              <h3>First Demo </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "92vh" }}>
            <img
              style={{ height: "100%", backgroundSize: "cover" }}
              className="d-block w-100 rounded"
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
              className="d-block w-100 rounded"
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
              className="d-block w-100 rounded"
              src={"imgs/fourth.jpg"}
              alt="fourth"
            />
            <Carousel.Caption>
              <h3>Fourth Demo</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <div
          className="card my-5 w-50 p-5 shadow"
          style={{ borderRadius: "20% 30%" }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/fourth.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/fourth.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/fourth.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/fourth.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <div
          className="card shadow my-2 w-50 shadow p-5"
          style={{ borderRadius: "30% 20%" }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/fourth.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/fourth.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/fourth.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div>
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/fourth.jpg"}
                    alt="fourth"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <div className="card my-5 w-100 p-5 bordered">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="h-100">
                  <img
                    style={{ height: "100%", backgroundSize: "cover" }}
                    className="d-block w-100 rounded"
                    src={"imgs/second.jpg"}
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
                          src={"imgs/fourth.jpg"}
                          alt="fourth"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div>
                        <img
                          style={{ height: "100%", backgroundSize: "cover" }}
                          className="d-block w-100 rounded"
                          src={"imgs/fourth.jpg"}
                          alt="fourth"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div>
                        <img
                          style={{ height: "100%", backgroundSize: "cover" }}
                          className="d-block w-100 rounded"
                          src={"imgs/fourth.jpg"}
                          alt="fourth"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div>
                        <img
                          style={{ height: "100%", backgroundSize: "cover" }}
                          className="d-block w-100 rounded"
                          src={"imgs/fourth.jpg"}
                          alt="fourth"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div>
                        <img
                          style={{ height: "100%", backgroundSize: "cover" }}
                          className="d-block w-100 rounded"
                          src={"imgs/fourth.jpg"}
                          alt="fourth"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div>
                        <img
                          style={{ height: "100%", backgroundSize: "cover" }}
                          className="d-block w-100 rounded"
                          src={"imgs/fourth.jpg"}
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
    </div>
  );
};

export default Home;
