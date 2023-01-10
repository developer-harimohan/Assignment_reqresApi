
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import GetExp from './pages/GetExp/GetExp'
import Home from './pages/Home/Home'
import PostExp from './pages/PostExp/PostExp'
import DeleteExp from './pages/Delete/DeleteExp'
import PutExp from './pages/Put/PutExp'
import Login from './auth/Login'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute Component={Home} />} />
          <Route path='/getexppage' element={<ProtectedRoute Component={GetExp} />} />
          <Route path='/postexppage' element={<ProtectedRoute Component={PostExp} />} />
          <Route path='/putexppage' element={<ProtectedRoute Component={PutExp} />} />
          <Route path='/deleteexppage' element={<ProtectedRoute Component={DeleteExp} />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
