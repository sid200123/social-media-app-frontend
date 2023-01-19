import React, { useState } from "react";

const ImgToUrl = () => {
  const [imgFile, setImgFile] = useState<string>();
  const onSaveImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target.files) return;
    const file: File = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImgFile(reader.result?.toString());
    };

    reader.readAsDataURL(file);
  };
  console.log(imgFile);
  return (
    <div className="container overflow-scroll" style={{ height: "92vh" }}>
      <div>
        <div className="text-center mt-5">
          <span className="fs-3 fw-bold text-uppercase">Image To Base64</span>
        </div>
        <div className="mt-2 form-group">
          <label className="my-2">Select Image</label>
          <input
            type="file"
            name="file"
            className="form-control"
            onChange={onSaveImg}
            accept="image/png, image/jpeg"
          />
        </div>
        <div className="mt-5">
          <h1>Img</h1>
          <img src={imgFile} className="img-fluid mt-1" alt="img" />
        </div>
        <div className="mt-3">
          <h1>Img Url</h1>
            <a href={imgFile}>Img Url</a>
        </div>
      </div>
    </div>
  );
};

export default ImgToUrl;
