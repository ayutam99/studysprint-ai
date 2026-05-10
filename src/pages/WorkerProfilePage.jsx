import { useBooking } from '../context/BookingContext'

export default function WorkerProfilePage(){
  const { selectedWorker } = useBooking()
  const w = selectedWorker
  if(!w) return <div className='card p-6'>No worker selected yet. Book one first.</div>
  return <div className='card p-6 md:flex gap-6'>
    <img src={w.image} className='w-32 h-32 rounded-2xl object-cover'/>
    <div><h2 className='text-2xl font-bold'>{w.name}</h2><p className='text-slate-300'>{w.service} specialist</p><p>⭐ {w.rating} • {w.experience} years experience • {w.distance}</p><p className='mt-2 text-emerald-400'>Trusted verified worker profile</p></div>
  </div>
}
