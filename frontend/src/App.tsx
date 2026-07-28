import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import MainLayout from "./layouts/MainLayout"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import SignupVerify from "./pages/SignupVerify"

function App() {
    return (
    <Routes>
        <Route path="/" element={<MainLayout />} >
            <Route index element={<Landing />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signup/verify' element={<SignupVerify />} />
            <Route path='/login' element={<Login />} />
        </Route>
    </Routes>
)}

export default App