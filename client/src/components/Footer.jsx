import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

export default function FooterCom() {
  return <Footer container className='border border-t-8 border-green-500'>
    <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
            <div className='mt-5'>
                <Link 
                    to="/" 
                    className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                    <span className = 'px-2 py-1 bg-gradient-to-r from-teal-300 via-lime-300 to-gray-500 rounded-lg text-black'>D&D</span>
                    Forge
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                    <Footer.Title title='Additional Content' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                            href='https://www.nerdolopedia.com/articles/dnd-resource-guide'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            Beginners Resource Guide
                            </Footer.Link>
                            <Footer.Link
                            href='https://fastcharacter.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            Fast Character Creator
                            </Footer.Link>
                        </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title='Follow me' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                            href='https://github.com/ivanadj3'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            GitHub
                            </Footer.Link>
                        </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title='Legal' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                            href='#'
                            >
                            Privacy Policy
                            </Footer.Link>
                            <Footer.Link
                            href='#'
                            >
                            Terms & Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                </div>
            </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href='#' by='Ivana' year={new Date().getFullYear()}/>
            <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                <Footer.Icon href='#' icon={BsFacebook}/>
                <Footer.Icon href='#' icon={BsInstagram}/>
                <Footer.Icon href='https://github.com/ivanadj3' icon={BsGithub}/>
            </div>
        </div>
    </div>
  </Footer>
}
