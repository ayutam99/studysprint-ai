import { useBooking } from '../context/BookingContext'
import WorkerCard from '../components/WorkerCard'

export default function BookingPage(){
  const { workers, bookWorker } = useBooking()
  return <div><h2 className='text-2xl font-semibold mb-4'>Step 1-3: Select Service & Book Worker</h2><div className='grid md:grid-cols-3 gap-4'>{workers.map(w=><WorkerCard key={w.id} worker={w} onBook={bookWorker}/>)}</div></div>
}
