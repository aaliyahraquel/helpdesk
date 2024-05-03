import Link from 'next/link'

const NavBar = () => {
  return ( 
    <div>
      <nav>
        <h1>Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
   );
}
 
export default NavBar;