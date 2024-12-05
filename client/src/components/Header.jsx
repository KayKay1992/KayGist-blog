import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Header() {
    const path = useLocation().pathname;
    const {currentUser} = useSelector(state => state.user)
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-green-500 via-amber-500 to-indigo-500 text-white'>
         Korrect
        </span>Gist
        </Link>
        <form>
          <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline'/>
          
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 sm:inline' color='gray' pill>
                <FaMoon/>
            </Button>
            { currentUser ? (
              <Dropdown arrowIcon={false} inline label={<Avatar alt='User' img={currentUser.profilePicture} rounded />}
              >
                <Dropdown.Header className='bg-amber-200'>
                  <spaan className='block text-sm'>@{currentUser.username}</spaan>
                  <spaan className='block text-sm font-medium truncate'>{currentUser.email}</spaan>
                </Dropdown.Header>
                <Link to={'/dashboard?tab=profile'}>
                 <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider/>
                <Dropdown.Item>Sign Out</Dropdown.Item>

              </Dropdown>
            ) : (
                <Link to='/signin'>
                <Button gradientDuoTone='greenToBlue' outline>
                 Sign In
                </Button>
             </Link>
            )}
          
            <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
               <Navbar.Link  active={path === "/"} as={'div'}>
                <Link to='/'>
                  Home
                </Link>
               </Navbar.Link>
               <Navbar.Link active={path === "/about"} as={'div'}>
                <Link to='/about'>
                  About
                </Link>
               </Navbar.Link>
               <Navbar.Link active={path === "/projects"} as={'div'}>
                <Link to='/projects'>
                  Projects
                </Link>
               </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  )
}
