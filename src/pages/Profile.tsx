import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProfileDetail {
  address: string;
  email: string;
  id: number;
  name: string;
  password: string;
  profile: string;
}

const Profile = () => {
  const [profileDetail, setProfileDetail] = useState<ProfileDetail[]>([]);
  const [update, setUpdate] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [img, setImg] = useState<string>();
  const [file, setFile] = useState<File>();
  const navigate = useNavigate();
  useEffect(() => {
    const userID = localStorage.getItem("userId");
    axios.get(`http://localhost:5000/profileDetail/${userID}`).then((res) => {
      setProfileDetail(res.data);
    });
  }, []);
  const onSave = () => {
    const userID = localStorage.getItem("userId");
    const data = {
      id: userID,
      name: name,
      address: address,
      profile: img,
    };
    axios.put("http://localhost:5000/updateProfile", data).then((res) => {
      console.log(res.data);
    });
  };
  const onSaveImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target.files) return;
    const file: File = e.target.files[0];
    setFile(file);
    const reader = new FileReader();

    reader.onload = () => {
      setImg(reader.result?.toString());
    };

    reader.readAsDataURL(file);
  };
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 w-100">
      {profileDetail.map((val: ProfileDetail, index: number) => {
        return (
          <div key={index} className="w-50">
            <div className="d-flex-column justify-content-center">
              <div className="text-center">
                {val.profile === "" ? (
                  <img
                    className="cover rounded img-fluid w-25"
                    src={`data:image/png;base64,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`}
                    alt="card-img"
                  />
                ) : (
                  <img
                    className="cover rounded img-fluid w-25"
                    src={`${val.profile}`}
                    alt="card-img"
                  />
                )}
              </div>
              {update ? (
                <div>
                  <input
                    type="file"
                    id="my_file"
                    className="invisible"
                    onChange={onSaveImg}
                  />
                  <button
                    className="btn btn-transparent border border-dark rounded-circle"
                    style={{
                      margin: "-10% -0% 0% 3%",
                    }}
                    onClick={() => {
                      document.getElementById("my_file")?.click();
                    }}
                  >
                    +
                  </button>
                </div>
              ) : (
                val.profile === "" && (
                  <div className="text-center mt-2">
                    <span className="text-muted w-100">
                      * Please Add Your Profile Photo
                    </span>
                  </div>
                )
              )}
            </div>

            <div className="container mt-5">
              <div className="text-group row">
                <label className="fw-bold w-25 fs-5">Name: </label>
                {update ? (
                  <input
                    type="text"
                    name="name"
                    className="form-control w-75"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setName(e.target.value)
                    }
                  />
                ) : (
                  <span className="fs-6 w-75">{val.name}</span>
                )}
              </div>
              <div className="text-group">
                <label className="fw-bold w-25 fs-5">Email: </label>
                <span className="fs-6 w-75">{val.email}</span>
              </div>
              <div className="text-group row">
                <label className="fw-bold fs-5 w-25">Address: </label>
                {update ? (
                  <input
                    type="text"
                    name="address"
                    value={address}
                    className="form-control w-75"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setAddress(e.target.value)
                    }
                  />
                ) : val.address === "" ? (
                  <span className="fs-6 w-75 text-muted">
                    Please Update Your Profile(Address Is Empty)
                  </span>
                ) : (
                  <span className="fs-6 w-75">{val.address}</span>
                )}
              </div>
              <div className="text-start">
                {update ? (
                  <button
                    className="btn btn-secondary btn-sm my-4"
                    onClick={() => {
                      onSave();
                      setUpdate(!update);
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-secondary btn-sm my-4"
                    onClick={() => {
                      setName(val.name);
                      setAddress(val.address);
                      setImg(val.profile);
                      setUpdate(!update);
                    }}
                  >
                    Update
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
