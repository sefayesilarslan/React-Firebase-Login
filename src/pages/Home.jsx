import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const getUserInfo = () => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        setUser(userCredential.email);
      } else {
        navigate("/auth");
      }
    });
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      Merhaba, Hoşgeldin {user}
    </div>
  );
}

export default Home;
