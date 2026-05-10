import { motion, AnimatePresence } from 'framer-motion'
import { useBooking } from '../context/BookingContext'
import { useState } from 'react'

export default function WorkerDashboard(){
  const { incomingRequest, acceptBooking, rejectBooking, status } = useBooking()
  const [online, setOnline] = useState(true)
  return <div className='space-y-6'>
    <div className='grid md:grid-cols-4 gap-4'>{['Today Earnings $126','Completed Jobs 14','Rating 4.8','Service: Multi-skilled'].map(x=><div key={x} className='card p-4'>{x}</div>)}</div>
    <div className='card p-4 flex items-center justify-between'><span>Worker Status</span><button onClick={()=>setOnline(!online)} className='px-4 py-2 rounded-xl bg-slate-800'>{online?'Online':'Offline'}</button></div>
    <AnimatePresence>{incomingRequest && <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} exit={{opacity:0}} className='card p-5 border-emerald-500'><h3 className='font-bold'>Incoming Booking Request</h3><p className='text-slate-300'>{incomingRequest.service} request from nearby customer.</p><div className='flex gap-3 mt-3'><button onClick={acceptBooking} className='bg-emerald-500 px-4 py-2 rounded-lg'>Accept Booking</button><button onClick={rejectBooking} className='bg-red-500 px-4 py-2 rounded-lg'>Reject</button></div></motion.div>}</AnimatePresence>
    <p className='text-slate-300'>Current Booking Status: <span className='text-emerald-400 font-semibold'>{status}</span></p>
  </div>
}
