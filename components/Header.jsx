import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
 const menuslink = [
  {
    anchor:'Work',
  },
  {
    anchor:'About',
  },
  {
    anchor:'Contact',
  },
]


  return (
    <header className='header'>
      <Image
        width={42}
        height={39}
        objectFit="cover"
        src={'/Logo.svg'}
        alt=""
      />
      
      <ul className="header-menu">
          <li className="header-menu__item">
            <Link href="/works"><a>Works</a></Link>
          </li>
          <li className="header-menu__item">
            <Link href="/about"><a>About</a></Link>
          </li>
          <li className="header-menu__item">
            <Link href="/contact"><a>Contact</a></Link>
          </li>

      </ul>
        
    </header>
  )
}
