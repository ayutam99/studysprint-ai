import { analytics, categories } from '../data/mockData'

export default function AdminPage(){
  return <div className='space-y-6'>
    <h2 className='text-2xl font-bold'>Admin Analytics Demo</h2>
    <div className='grid md:grid-cols-4 gap-4'>
      <div className='card p-4'>Total Bookings<br/><span className='text-2xl text-emerald-400'>{analytics.totalBookings}</span></div>
      <div className='card p-4'>Active Workers<br/><span className='text-2xl text-emerald-400'>{analytics.activeWorkers}</span></div>
      <div className='card p-4'>Peak Booking Time<br/><span className='text-lg'>{analytics.peakTime}</span></div>
      <div className='card p-4'>Avg Ratings<br/><span className='text-2xl'>{analytics.avgRating}</span></div>
    </div>
    <div className='card p-4'><h3 className='font-semibold mb-2'>Growth Trend</h3><div className='flex items-end gap-2 h-36'>{analytics.growth.map((v,i)=><div key={i} className='bg-gradient-to-t from-emerald-500 to-blue-500 rounded-t w-10' style={{height:`${v*2}px`}}/>)}</div></div>
    <div className='card p-4'>Top Services: {categories.slice(0,5).join(', ')}</div>
  </div>
}
