import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice"
import { changeLanguage } from "../utils/configSlice"
import { MAIN_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  // console.log(user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      dispatch(removeUser);
      console.log("Log out success..")})
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  } 

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44"
      src={MAIN_LOGO} alt="Logo" />
      {user && (
      <div className='flex text-white p-4 text-center gap-3'>
        {showGptSearch && (<select className='text-white m-2 p-2 bg-gray-800' onChange={handleLanguageChange}>
          {
            SUPPORTED_LANGUAGES.map(lang =><option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)
          }
        </select>)}
        
        <button onClick={handleGptSearchClick} className='py-2 px-4 m-2 bg-green-600'>
          {showGptSearch ? "HomePage" : "GPT Search"}
        </button>
        <img src={user?.photoURL} className='w-10' alt="user"/>
        <button>User</button>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      )}
    </div>
  )
}

export default Header;