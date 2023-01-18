import React, { useState } from "react";

const Memories = () => {
  const [title, setTitle] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [fileData, setFileData] = useState<File | null>();
  const [fileName, setFileName] = useState<string>("");
  console.log(fileData);
  console.log(fileName);
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
                  <p className="card-title fw-bold fs-5">Title</p>
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
          style={{ backgroundColor: "lightseagreen" }}
        >
          <form className="form shadow p-4">
            <div className="text-center mb-4">
              <span className="fw-bold fs-3 my-4">Add Memories</span>
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTitle(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (!e.target.files) return;
                  setFileData(e.target.files[0]);
                  setFileName(e.target.files[0].name);
                }}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Detail</label>
              <input
                type="text"
                value={detail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setDetail(e.target.value);
                }}
                className="form-control"
              />
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
