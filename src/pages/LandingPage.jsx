import { Link } from 'react-router-dom'
import { categories, workers } from '../data/mockData'
import WorkerCard from '../components/WorkerCard'
import { useBooking } from '../context/BookingContext'

export default function LandingPage() {
  const { bookWorker } = useBooking()
  return <div className='space-y-10'>
    <section className='grid md:grid-cols-2 gap-6 items-center card p-8 bg-gradient-to-r from-slate-900 to-slate-800'>
      <div><p className='text-emerald-400 font-semibold'>Find Trusted Nearby Workers</p><h1 className='text-4xl font-bold mt-2'>Book local services in minutes across urban and rural India.</h1><p className='text-slate-300 mt-3'>Smart AI matching, live tracking simulation, instant worker acceptance.</p><div className='flex gap-3 mt-5'><Link className='bg-emerald-500 px-4 py-2 rounded-xl' to='/booking'>Start Booking</Link><Link className='bg-slate-700 px-4 py-2 rounded-xl' to='/customer'>Explore Dashboard</Link></div></div>
      <div className='card p-4 h-64 relative overflow-hidden'><div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,.2),transparent_60%)]'/><p className='text-sm text-slate-300'>Nearby Worker Map Simulation</p><div className='absolute top-16 left-12 w-4 h-4 bg-emerald-400 rounded-full animate-ping'/><div className='absolute top-24 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce'/><div className='absolute bottom-16 left-1/2 w-3 h-3 bg-white rounded-full'/></div>
    </section>
    <section><h2 className='text-2xl font-semibold mb-4'>Service Categories</h2><div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>{categories.map(c=><div key={c} className='card p-3 text-center'>{c}</div>)}</div></section>
    <section><h2 className='text-2xl font-semibold mb-4'>Top Workers</h2><div className='grid md:grid-cols-3 gap-4'>{workers.map(w => <WorkerCard key={w.id} worker={w} onBook={bookWorker}/>)}</div></section>
    <section className='grid md:grid-cols-4 gap-4'>{['AI smart worker matching','AI price suggestions','AI analytics dashboard','AI chatbot UI mockup'].map(x=><div key={x} className='card p-4'>{x}</div>)}</section>
  </div>
}
