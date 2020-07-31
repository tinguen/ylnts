import React from 'react'
import './App.css'
import Header from './components/header'
import Users from './components/users'
import Footer from './components/footer'

function App() {
  return (
    <div className="container">
      <Header />
      <Users />
      <Footer />
    </div>
  )
}

export default App
