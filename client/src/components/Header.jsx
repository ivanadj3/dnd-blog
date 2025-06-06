import { Button, TextInput, Navbar, Dropdown, Avatar} from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'; 
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';

export default function Header() {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user);
    const {theme} = useSelector((state) => state.theme);
  return (
    <Navbar className='border-b-2'>
        {/* logo */}
        <Link 
            to="/" 
            className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className = 'px-2 py-1 bg-gradient-to-r from-teal-300 via-lime-300 to-gray-500 rounded-lg text-black'>D&D</span>
            Forge
        </Link>
        <form>
            <TextInput
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className = 'w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill 
            onClick={()=> dispatch(toggleTheme())}>
                {theme === 'light' ? <FaSun /> : <FaMoon />}
            </Button>
            {currentUser ? ( // IF THE CURRENT USER EXISTS
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                                alt='user'
                                img={currentUser.profilePicture}
                                rounded
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className='block text-sm'>@{currentUser.username}</span>
                            <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                        </Dropdown.Header>
                        <Link to={'/dashboard?tab=profile'}>
                            <Dropdown.Item>Profile</Dropdown.Item>
                        </Link>
                        <Dropdown.Divider/>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                ):
                (
                    <Link to='/sign-in'>
                    <Button gradientDuoTone='tealToLime' outline >Sign In</Button>
                    </Link>
                )
            }
            
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link as={Link} to='/' active={path === "/"}>
                Home
            </Navbar.Link>
            <Navbar.Link as={Link} to='/about' active={path === "/about"}>
                About
            </Navbar.Link>
            <Navbar.Link as={Link} to='/articles' active={path === "/articles"}>
                Articles
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  );
}
