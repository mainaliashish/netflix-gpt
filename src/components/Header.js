import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { MAIN_LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth)
    .then(() => console.log("Log out success.."))
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse")
      } else {
        dispatch(removeUser);
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, [])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44"
      src={MAIN_LOGO} alt="Logo" />
      {user && (
      <div className='flex text-white p-4 text-center gap-3'>
        <img src={user?.photoURL} className='w-10' alt="user"/>
        <button>User</button>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      )}
    </div>
  )
}

export default Header;