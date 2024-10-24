import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";


const Body = () => {
  // const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // useEffect(()=>{
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const {uid, email, displayName, photoURL } = user;
  //       dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
  //     } else {
  //       dispatch(removeUser);
  //     }
  //   });
  // }, [])
  
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
