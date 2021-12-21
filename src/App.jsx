import React from 'react'
import './App.css'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import MenuBar from './components/MenuBar/MenuBar'

import Trending from './pages/Trending/Trending'
import UserDetails from './pages/UserDetails/UserDetails'

const App = function () {
  return (
    <MemoryRouter>
      <div className="App">
        <MenuBar />

        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/user">
            <Route path=":uniqueId" element={<UserDetails />} />
          </Route>
        </Routes>
      </div>
    </MemoryRouter>
  )
}

export default App
