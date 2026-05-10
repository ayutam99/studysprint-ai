import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import CustomerDashboard from './pages/CustomerDashboard'
import WorkerDashboard from './pages/WorkerDashboard'
import BookingPage from './pages/BookingPage'
import BookingStatusPage from './pages/BookingStatusPage'
import WorkerProfilePage from './pages/WorkerProfilePage'
import AdminPage from './pages/AdminPage'

export default function App(){
  return <Layout><Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/customer' element={<CustomerDashboard/>}/>
    <Route path='/worker' element={<WorkerDashboard/>}/>
    <Route path='/booking' element={<BookingPage/>}/>
    <Route path='/booking-status' element={<BookingStatusPage/>}/>
    <Route path='/worker-profile' element={<WorkerProfilePage/>}/>
    <Route path='/admin' element={<AdminPage/>}/>
  </Routes></Layout>
}
