import '../../scss/style.scss'
import { SignUp } from '../SignUp'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Page1 } from '../../pages/Page1'
import { Page2 } from '../../pages/Page2'
import { NotFound } from '../NotFound'

function App() {
  const token = sessionStorage.getItem('token')

  // console.log(token)
  // return <Page1 />;
  // return <Page2 />;
  // return <SignUp />;
  return (
    <Routes>
      <Route path="/" element={(token && <Navigate to="/users" replace />) || <SignUp />} />
      <Route path="/users" element={<Page1 />} />
      <Route path="users/:id" element={<Page2 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
