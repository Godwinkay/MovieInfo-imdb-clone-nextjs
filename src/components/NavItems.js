'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const NavItems = ({title, param}) => {
    const searchParam = useSearchParams()
    const genre = searchParam.get('genre')

  return (
    <div>
      <Link 
      className={`hover:text-primary ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-primary' : ''}`}
      href={`/?genre=${param}`}>
        {title}
      </Link>
    </div>
  )
}

export default NavItems
