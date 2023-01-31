import axios from "axios";
import React, { useState } from "react";

const AddPost = () => {
  const [detail, setDetail] = useState<string>("");
  const [fileData, setFileData] = useState<File | null>();
  const [fileName, setFileName] = useState<string>("");

  const AddPostData = async (e: React.FormEvent) => {
    e.preventDefault();

    const userID: string = localStorage.getItem("userId")!;

    const data = {
      user_id: userID,
      user_img: fileName,
      caption: detail,
      status: true,
    };

    console.log(data);
    axios.post("http://localhost:5000/post/addPost", data).then((result) => {
      console.log(result);
    });
  };
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-4 d-flex justify-content-center align-items-center">
        <form
          className="form shadow p-4 border-1 bg-light"
          onSubmit={AddPostData}
        >
          <div className="text-center mb-4">
            <span className="fw-bold fs-3 my-4">Add Post</span>
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (!e.target.files) return;
                const file = e.target.files[0];
                setFileData(file);
                const reader = new FileReader();

                reader.onload = (event: any) => {
                  setFileName(event.target.result);
                };
                reader.readAsDataURL(file);
              }}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Caption</label>
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
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
