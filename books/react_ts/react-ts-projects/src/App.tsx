// import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
// import { authenticate, User } from "./api/authenticate";
// import { authorize } from "./api/authorize";
import { AppProvider } from "./components/AppContext";


export default function App() {
  // const [{user, permissions, loading}, dispatch] = useReducer(reducer, initialState)
  


  return (
    <>

    <AppProvider>
      <Header/>
      <Main/>
    </AppProvider>
      <Outlet/>
    </>
  )
}