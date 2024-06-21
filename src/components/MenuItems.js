import Link from 'next/link'


const MenuItems = ({title, address, Icon}) => {
  return (
    <div>
      <Link href={address} className='hover:text-primary'>
        <Icon className="sm:hidden text-xl" />
        <h4 className='hidden sm:inline uppercase text-lg font-bold'>{title}</h4>
      </Link>
    </div>
  )
}

export default MenuItems
