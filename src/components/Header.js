import MenuItems from './MenuItems'
import { HiHome } from "react-icons/hi2";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex justify-between items-center px-8 md:px-16 py-4'>
    <Link href="/">
        <h1 className='md:text-3xl font-bold bg-primary py-2 px-4 text-white rounded-lg'>MovieInfo</h1>
    </Link>


      <div className='flex gap-6'>
        <MenuItems title='home' address='/' Icon={HiHome} />
        <MenuItems title='about' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
    </div>
  )
}

export default Header
