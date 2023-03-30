import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateGroups } from './components/CreateGroups'
import { Addmembers } from './components/Addmembers'
import { Expends } from './components/Expends'

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path = "/" element={<CreateGroups />} />
      <Route path = "/members" element={<Addmembers />} />
      <Route path = "/expends" element={<Expends />} />
    </Routes>
  </BrowserRouter>
}

export default App
