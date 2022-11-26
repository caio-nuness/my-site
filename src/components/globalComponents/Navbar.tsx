import { NavLinks } from './NavLinks'

import Hamburger from 'hamburger-react'
import { useState } from 'react'

export const Navbar = () => {

  const [isOpen, setOpen] = useState(false)
  const [active, setActive] = useState<any>()

  return (
    <>
      <div className="hidden lg:flex w-5/12 h-full items-center justify-between nav-mobile">
        <NavLinks />
      </div>

      {active ? (
        <div className="hidden burguer-nav ">
          <NavLinks />
        </div>
      ) : ""}


      <button className="my-button-toggle hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="white"
          onToggle={(toggled) => toggled ? setActive(toggled) : setActive(toggled)}
        />
      </button>
    </>
  )
}
