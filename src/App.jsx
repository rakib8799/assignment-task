import { Route, Routes } from "react-router-dom"
import SingleUser from "./components/SingleUser"
import ViewUsers from "./components/ViewUsers"
import UserContextProvider from "./context/UserContext"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ViewUsers />} />
          <Route path="/user/:id" element={<SingleUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </>
  )
}

export default App
