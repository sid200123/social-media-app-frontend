import React from "react";
import { MdAdd } from "react-icons/md";

interface Props {
  name: string;
  userId: string;
}

const UserData = ({ name, userId }: Props) => {
  const currentUserId: string | null = localStorage.getItem("userId");
  const getUserId: string | null = userId;
  console.log("current", currentUserId, "getid", getUserId);
  return (
    <div className="bg-light mt-3 shadow rounded">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex p-3">
          <div>
            <img
              className="cover rounded-circle"
              style={{ width: "4vw", height: "4vw" }}
              src="imgs/third.jpg"
              alt="card-img"
            />
          </div>
          <div>
            <div className="ms-4">{name}</div>
            <div className="ms-4">NickName</div>
          </div>
        </div>
        <div>
          {getUserId !== currentUserId && (
            <button className="btn btn-transparent mr-3">
              <MdAdd />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserData;
