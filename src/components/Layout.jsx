import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return <div className='min-h-screen bg-gradient-to-b from-slate-950 to-slate-900'>
    <nav className='sticky top-0 z-20 backdrop-blur bg-slate-950/70 border-b border-slate-800'>
      <div className='max-w-6xl mx-auto p-4 flex justify-between items-center'>
        <Link to='/' className='font-bold text-xl text-emerald-400'>ServiceGrid</Link>
        <div className='flex gap-4 text-sm'>
          <Link to='/customer'>Customer</Link><Link to='/worker'>Worker</Link><Link to='/admin'>Admin</Link>
        </div>
      </div>
    </nav>
    <main className='max-w-6xl mx-auto p-4'>{children}</main>
    <footer className='text-center text-slate-400 py-8'>ServiceGrid MVP Demo • Urban + Rural Coverage</footer>
  </div>
}
