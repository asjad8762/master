import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Pages/Footer/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { AuthProvider } from "./context/AuthContext";
import Company from "./company/Company";
import UpdateProfile from "./components/UpdateProfile";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ForgotPassword from "./components/ForgotPassword";
import CompanyFormList from "./CompanyFormList";
import AboutPage from "./About";
import WriteReview from "./WriteReview";
import CompanyForm from "./CompanyForm/CompanyForm";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="container-app">
          <Navbar />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/company/:companyName" element={<Company />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/form" element={<CompanyFormList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/review" element={<WriteReview />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
