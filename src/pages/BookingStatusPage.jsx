import { useBooking } from '../context/BookingContext'

export default function BookingStatusPage(){
  const { status, selectedWorker, setStatus } = useBooking()
  return <div className='card p-6 space-y-4'>
    <h2 className='text-2xl font-semibold'>Booking Status Timeline</h2>
    <p>Worker: {selectedWorker?.name || 'Not selected'}</p>
    <div className='flex flex-wrap gap-2'>{['Accepted','Worker On The Way','Service Completed'].map(s=><button key={s} onClick={()=>setStatus(s)} className='bg-slate-800 px-3 py-2 rounded-lg'>{s}</button>)}</div>
    <p className='text-emerald-400 text-xl'>{status}</p>
    <div><label className='text-sm'>Rate completed service</label><input type='range' min='1' max='5' className='w-full'/></div>
  </div>
}
