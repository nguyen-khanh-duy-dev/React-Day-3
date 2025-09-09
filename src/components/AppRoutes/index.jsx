import {
    BrowserRouter as Router,
    Route,
    Routes,
    HashRouter,
} from "react-router"

import DefaultLayout from "../../layouts/DefaultLayout"
import AuthLayout from "../../layouts/AuthLayout"
import AdminLayout from "../../layouts/AdminLayout"

import Home from "../../pages/Home"
import About from "../../pages/About"
import Posts from "../../pages/Posts"
import Contact from "../../pages/Contact"
import PostDetail from "../../pages/PostDetail"
import Privacy from "../../pages/Privacy"
import Login from "../../pages/Login"
import Register from "../../pages/Register"
import Dashboard from "../../pages/Dashboard"
import Users from "../../pages/Users"
import Settings from "../../pages/Settings"
import NotFound from "../../pages/NotFound"
import ScrollToTop from "../ScrollTopTop"

function AppRoutes() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                {/* Đây là Default layout. Nó chứa trang home nên ở đầu ko cần path */}
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="posts/:id" element={<PostDetail />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="privacy" element={<Privacy />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route element={<AdminLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/setting" element={<Settings />} />
                </Route>

                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes
