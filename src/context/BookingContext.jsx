import { createContext, useContext, useMemo, useState } from 'react'
import { workers } from '../data/mockData'

const BookingContext = createContext(null)
export const useBooking = () => useContext(BookingContext)

export function BookingProvider({ children }) {
  const [selectedWorker, setSelectedWorker] = useState(null)
  const [status, setStatus] = useState('Idle')
  const [incomingRequest, setIncomingRequest] = useState(null)
  const [history, setHistory] = useState([])

  const bookWorker = (worker) => {
    setSelectedWorker(worker)
    setStatus('Request Sent')
    setIncomingRequest(worker)
  }

  const acceptBooking = () => {
    if (!incomingRequest) return
    setStatus('Accepted')
    setTimeout(() => setStatus('Worker On The Way'), 1500)
    setTimeout(() => {
      setStatus('Service Completed')
      setHistory((h) => [{ worker: incomingRequest.name, service: incomingRequest.service, status: 'Completed' }, ...h])
      setIncomingRequest(null)
    }, 3500)
  }

  const rejectBooking = () => {
    setStatus('Rejected')
    setIncomingRequest(null)
  }

  const value = useMemo(() => ({ workers, selectedWorker, status, incomingRequest, history, bookWorker, acceptBooking, rejectBooking, setStatus }), [selectedWorker, status, incomingRequest, history])
  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}
