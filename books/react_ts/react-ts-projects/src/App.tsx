// import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/Store";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

// import { authenticate, User } from "./api/authenticate";
// import { authorize } from "./api/authorize";
// import { AppProvider } from "./components/AppContext";


export default function App() {
  // const [{user, permissions, loading}, dispatch] = useReducer(reducer, initialState)
  


  return (
    <>
      <Provider store={store}>
        <Header/>
        <Main/>
      </Provider>
      <Outlet/>
    </>
  )
}