import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import SignUp from "../auth/signup";
import Signin from "../auth/signin";

export default function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
}
