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
        </Routes>
        <Footer/>
      
    </Provider>
  )
}

export default App
