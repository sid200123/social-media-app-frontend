import axios from "axios";
import React, { useEffect, useState } from "react";
import UserData from "../component/UserData";

const SearchUser = () => {
  const [search, setSearch] = useState<string>("");
  const [searchData, setSearchData] = useState<[]>([]);
  useEffect(() => {
    if (search.length > 0) {
      axios.get(`http://localhost:5000/searchData/${search}`).then((res) => {
        console.log(res.data);
        setSearchData(res.data);
      });
    } else {
      setSearchData([]);
    }
  }, [search]);
  return (
    <div className="container">
      <div className="mt-4">
        <input
          type="search"
          placeholder="Search User"
          className="form-control"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="mt-3">
        {searchData.map((user: any) => (
          <UserData name={user.name} key={user.id} userId={user.email} />
        ))}
      </div>
    </div>
  );
};

export default SearchUser;
