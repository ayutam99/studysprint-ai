import { useState } from 'react'
import WorkerCard from '../components/WorkerCard'
import { categories } from '../data/mockData'
import { useBooking } from '../context/BookingContext'

export default function CustomerDashboard(){
  const { workers, history, bookWorker } = useBooking()
  const [filter, setFilter] = useState('All')
  const list = filter==='All'?workers:workers.filter(w=>w.service===filter)
  return <div className='space-y-6'>
    <div className='card p-4 flex flex-col md:flex-row gap-3'><input placeholder='Search nearby services...' className='bg-slate-800 rounded-xl p-2 flex-1'/><select className='bg-slate-800 rounded-xl p-2' value={filter} onChange={e=>setFilter(e.target.value)}><option>All</option>{categories.map(c=><option key={c}>{c}</option>)}</select></div>
    <div className='grid md:grid-cols-3 gap-4'>{list.map(w=><WorkerCard key={w.id} worker={w} onBook={bookWorker}/>)}</div>
    <div className='card p-4'><h3 className='font-semibold mb-2'>Booking History</h3>{history.length?history.map((h,i)=><p key={i} className='text-slate-300 text-sm'>{h.service} with {h.worker} - {h.status}</p>):<p className='text-slate-400'>No bookings yet.</p>}</div>
  </div>
}
