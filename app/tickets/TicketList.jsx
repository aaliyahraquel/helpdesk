import Link from 'next/link';
import React from 'react'

async function getTickets() {
  // imitate a delay - the promise will be resolved after 3 seconds
  await new Promise(resolve => setTimeout(resolve, 3000));
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0
    }
  }) // next13 caches fetch requests - quick response times 

  return res.json()
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
    <Link href="/tickets/create">
      <button className="btn-primary">Create new ticket</button>
    </Link>
      {tickets.map((ticket) => (
        <div 
        key={tickets.id} 
        className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0,200)}...</p>
            <div 
            className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center"> There are no open tikckets, yay!</p>
      )}
    </>
  )
}
