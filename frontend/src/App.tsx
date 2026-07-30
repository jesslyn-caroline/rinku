import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import MainLayout from "./layouts/MainLayout"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import SignupVerify from "./pages/SignupVerify"
import DashboardLayout from "./layouts/DashboardLayout"

function App() {
    return (
    <Routes>
        <Route path='/' element={<MainLayout />} >
            <Route index element={<Landing />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signup/verify' element={<SignupVerify />} />
            <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/' element={<DashboardLayout />}>
            <Route path='/overview' element={<h1>Overview</h1>} />
            <Route path='/my-links' element={<h1>My Links</h1>} />
            <Route path='/analytics' element={<h1>Analytics</h1>} />
            <Route path='/settings' element={<h1>Settings</h1>} />
        </Route>
    </Routes>
)}

export default App