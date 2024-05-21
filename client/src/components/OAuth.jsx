import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const data = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.user.displayName,
          email: data.user.email,
          googlePhotoUrl: data.user.photoURL,
        }),
      });

      if (res.ok) {
        const resData = await res.json()
        dispatch(signInSuccess(resData));
        navigate("/");
      }

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button
        type="button"
        gradientDuoTone={"greenToBlue"}
        outline
        className="w-full"
        onClick={handleClick}
      >
        <AiFillGoogleCircle className="w-6 h-6 mr-2"></AiFillGoogleCircle>
        Sign in with Google
      </Button>
    </div>
  );
}
