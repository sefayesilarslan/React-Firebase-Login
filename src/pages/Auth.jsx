import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      if (user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Giriş Yapılamadı " + error.message);
    }
  };

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      setEmail("");
      setPassword("");
      if (user) {
        toast.success("Kullanıcı Oluşturuldu");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="auth">
      <h3>Giriş Yap / Kayıt Ol</h3>

      <div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email Adres"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Şifre"
        />
      </div>

      <div>
        <button onClick={login}>Giriş Yap</button>
        <button onClick={register}>Kayıt Ol</button>
      </div>
    </div>
  );
}

export default Auth;
