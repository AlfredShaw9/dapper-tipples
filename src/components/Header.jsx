import { Link } from 'react-router-dom'
import { useState } from 'react'
import { IoMenuOutline as MenuIcon} from 'react-icons/io5'
import Sidebar from './Sidebar'


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const openSidebar = () => {
    setIsOpen(true)
  }
    const closeSidebar = () => {
      setIsOpen(false)
  }

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <h3><img src="../assets/PngItem_801298.png" height="25" />Dapper Tipples</h3>
        </div>
        <div className="links">
          <Link to ='/'>Home</Link>
          <Link to ='/cocktails'>Cocktail List</Link>
          {/* <Link to ='/'>Home</Link> RAMDOM COCKTAIL!!!!!!! */}
          {/* <Link to ='/'>Home</Link> SECRET COCKTAIL!!!!!!! */}
        </div>
        <div className="menuBtn" onClick={openSidebar}>
          <MenuIcon size={30}/>
        </div>
      </div>
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
    </header>
  )
}