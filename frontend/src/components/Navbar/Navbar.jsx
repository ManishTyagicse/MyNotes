import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBox from "../SearchBox/SearchBox";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate(); // Call useNavigate as a function

  const [searchQuery, setSeachQuery] = useState("");

  const handleLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {
    // fetch data and search data api
  }

  const onclearSearch = () => {
    setSeachQuery("");
  }

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>
      <SearchBox value={searchQuery} onChange={({target}) => {
        setSeachQuery(target.value)
      }}
      handleSearch={handleSearch}
      onclearSearch={onclearSearch}
      />
      <ProfileInfo handleLogout={handleLogout} />
    </div>
  );
};

export default Navbar;
