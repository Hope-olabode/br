import { useContext } from "react";
import  google  from "../assets/Images/Google.svg";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../context/authContext";


export default function Gauth({ message }) {
  const navigate = useNavigate()
  const auth = getAuth(app)

  const { setIsLogin } = useContext(AuthContext);
console.log(`${import.meta.env.VITE_BACKEND_URL}/auth/isLogin`)
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultFromGoogle = await signInWithPopup(auth, provider)
      console.log(resultFromGoogle);
      const user = {Name: resultFromGoogle.user.displayName, Email: resultFromGoogle.user.email, Profile_Image: resultFromGoogle.user.photoURL};
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/google`, user, {
        withCredentials: true,
      });
      
      if (response.status === 200) {
        const res2 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/isLogin`)
        if (res2.status === 200) {
          setIsLogin(true)
          console.log(1)
          alert("signInSuccess")
          navigate("/Next");
        }
        
      } else {
        throw new Error('Authentication failed');
      }
      
      
    } catch (error) {
      console.log(error);
    }
    
  } 



  return(
    <div className="h-[72px] cursor-pointer w-full flex justify-between items-center lg:pr-6 lg:pl-10 pr-2 pl-4" onClick={handleGoogleClick}>
      <p className="font-nexa-bold font-[14px] leading-[22px] lg:font-[16px] lg:leading-[26px]">{message}</p>
      <img src={google} alt="" />
    </div>
  )
}