import { motion } from 'framer-motion'

export default function WorkerCard({ worker, onBook }) {
  return <motion.div whileHover={{ y: -4 }} className='card p-4'>
    <div className='flex gap-4'>
      <img src={worker.image} className='w-16 h-16 rounded-xl object-cover'/>
      <div className='flex-1'>
        <h3 className='font-semibold'>{worker.name}</h3>
        <p className='text-sm text-slate-300'>{worker.service} • ⭐ {worker.rating}</p>
        <p className='text-xs text-slate-400'>{worker.experience} yrs • {worker.distance} • ETA {worker.eta}</p>
      </div>
      <div className='text-right'>
        <p className='text-emerald-400 font-bold'>${worker.price}</p>
        <p className={`text-xs ${worker.available?'text-green-400':'text-red-400'}`}>{worker.available?'Available':'Busy'}</p>
      </div>
    </div>
    <button disabled={!worker.available} onClick={() => onBook(worker)} className='mt-3 w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-700 rounded-xl py-2 font-medium'>Book Now</button>
  </motion.div>
}
