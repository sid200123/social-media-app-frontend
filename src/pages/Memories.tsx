import React from "react";

const Memories = () => {
  return (
    <div>
      <div className="row px-3">
        <div className="col-lg-8 overflow-scroll" style={{ height: "91vh" }}>
          <div className="row">
            <div className="col-lg-4 my-2">
              <div className="card rounded">
                <div className="card-img">
                  <img
                    className="cover rounded w-100"
                    src="imgs/third.jpg"
                    alt="card-img"
                  />
                </div>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam illum explicabo ipsa, necessitatibus ducimus
                    corrupti!
                  </p>
                  <button className="btn btn-dark">View</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-2">
              <div className="card rounded">
                <div className="card-img">
                  <img
                    className="cover rounded w-100"
                    src="imgs/third.jpg"
                    alt="card-img"
                  />
                </div>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam illum explicabo ipsa, necessitatibus ducimus
                    corrupti!
                  </p>
                  <button className="btn btn-dark">View</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-2">
              <div className="card rounded">
                <div className="card-img">
                  <img
                    className="cover rounded w-100"
                    src="imgs/third.jpg"
                    alt="card-img"
                  />
                </div>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam illum explicabo ipsa, necessitatibus ducimus
                    corrupti!
                  </p>
                  <button className="btn btn-dark">View</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-2">
              <div className="card rounded">
                <div className="card-img">
                  <img
                    className="cover rounded w-100"
                    src="imgs/third.jpg"
                    alt="card-img"
                  />
                </div>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam illum explicabo ipsa, necessitatibus ducimus
                    corrupti!
                  </p>
                  <button className="btn btn-dark">View</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-2">
              <div className="card rounded">
                <div className="card-img">
                  <img
                    className="cover rounded w-100"
                    src="imgs/third.jpg"
                    alt="card-img"
                  />
                </div>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam illum explicabo ipsa, necessitatibus ducimus
                    corrupti!
                  </p>
                  <button className="btn btn-dark">View</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-2">
              <div className="card rounded">
                <div className="card-img">
                  <img
                    className="cover rounded w-100"
                    src="imgs/third.jpg"
                    alt="card-img"
                  />
                </div>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam illum explicabo ipsa, necessitatibus ducimus
                    corrupti!
                  </p>
                  <button className="btn btn-dark">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 d-flex justify-content-center align-items-center"
          style={{ backgroundColor:"lightseagreen" }}
        >
          <form className="form shadow p-4">
            <div className="text-center mb-4">
              <span className="fw-bold fs-3 my-4">Add Memories</span>
            </div>
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Image</label>
              <input type="file" className="form-control" />
            </div>
            <div className="form-group">
              <label>Detail</label>
              <textarea className="form-control" />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Memories;
