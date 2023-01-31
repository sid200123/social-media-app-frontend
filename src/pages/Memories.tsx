import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AiFillSave,
  AiOutlineComment,
  AiOutlineLike,
  AiOutlineMore,
  AiOutlineShareAlt,
} from "react-icons/ai";

const Memories = () => {
  const [postData, setPostData] = useState<[]>([]); 
  useEffect(() => {
    axios
      .get("http://localhost:5000/post/getPost")
      .then((res) => setPostData(res.data.result));
  }, []);
  console.log(postData);
  return (
    <div>
      <div className="row px-3">
        <div className="col-lg-12 overflow-scroll" style={{ height: "91vh" }}>
          <div className="row">
            <div className="col-lg-12 my-2 p-0">
              {postData.map((val) => (
                <div
                  className="card rounded shadow bg-light border-1 my-2"
                  key={val["id"]}
                >
                  <div className="card-header">
                    <div className="d-flex justify-content-start align-items-center">
                      <div>
                        <img
                          className="cover rounded-circle"
                          style={{
                            width: "3vw",
                            height: "3vw",
                          }}
                          src="imgs/third.jpg"
                          alt="card-img"
                        />
                      </div>
                      <div>
                        <span className="ms-4">Title</span>
                      </div>
                      <div className="d-flex justify-content-end w-100">
                        <AiOutlineMore className="fs-2" />
                      </div>
                    </div>
                  </div>
                  <div className="card-img">
                    <img
                      className="cover w-100"
                      src={`${val["user_img"]}`}
                      alt="card-img"
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex">
                      <AiOutlineLike className="mx-3 my-1 fs-2" />
                      <AiOutlineComment className="mx-3 my-1 fs-2" />
                      <AiOutlineShareAlt className="mx-3 my-1 fs-2" />
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <p className="d-flex justify-content-start h-100 align-items-center">
                          {val["caption"]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memories;
