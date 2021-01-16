import axios from "axios";
import React, { useEffect, useState } from "react";
const Profile = () => {
const [userData, setUserData] = useState({})
  useEffect(() => {
 axios.get('/user/profile/'+localStorage.getItem('userId')).then(res=>setUserData(res.data))
    
  },[])

  return (
    <div style={{ height: "700px" }}>
      <h1 style={{ marginTop: "300px" }}> WELCOME {userData.name}  </h1>
      <h2 >email : {userData.email} </h2>
      <h2>phoneNumber : {userData.phoneNumber} </h2>
    </div>
  );
};

export default Profile;
