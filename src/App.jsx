import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Outlet } from 'react-router-dom';
import Comment from './components/Comment';
import Login from './pages/Login';

function App() {

  return (
    <div className="">
      {/* app */}
      <Login />
    </div>

  )
}

export default App
