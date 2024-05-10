import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'

const NavBar = () => {
  return ( 
    <div>
      <nav>
        <Image 
          src={Logo}
          alt='helpdesk logo'
          width={70}
          quality={5}
          placeholder='blur'
        />
        <h1>Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
   );
}
 
export default NavBar;