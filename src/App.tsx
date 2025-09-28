import './App.css'
import RegisterForm from './pages/Forms/RegisterForm'
import LoginForm from './pages/Forms/LoginForm'
import HeroSection from './pages/Hero/Hero'
import Home from './pages/Home/Home.tsx'
import Footer from './components/footer'
import ForgotPassword from './pages/Forms/ForgetPassword'
import ResetPassword from './pages/Forms/VerfyOpt'
import { store } from './state/store'
import { Provider } from 'react-redux'
import {  Routes, Route,  } from "react-router-dom";
import Courses from './allcouses/Couses.tsx'
import AuthPage from './pages/AuthPage.tsx'
import SettingsPage from './pages/SettingsPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import AboutPage from './pages/AboutPage.tsx'

function App() {
  return (
    <Provider store={store}>
      
        <HeroSection /> 
        <Routes>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path="/login" element={<LoginForm />} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/forgetpassword' element={<ForgotPassword/>} />
          <Route path='/reset-password' element={<ResetPassword/>} />
          <Route path='/COURSE' element={<Courses/>} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
        <Footer/>
      
    </Provider>
  )
}

export default App
