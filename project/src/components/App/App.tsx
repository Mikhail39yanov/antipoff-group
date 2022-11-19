import '../../scss/style.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NotFound } from '../../pages/NotFound'
import { SignUp } from '../../pages/SignUp'
import { CardPartner } from '../../pages/CardPartner'
import { Main } from '../../pages/Main/Main'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" replace />} />
      <Route path="/antipoff-group" element={<Navigate to="/users" replace />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/users" element={<Main />} />
      <Route path="/users/user:id" element={<CardPartner />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
