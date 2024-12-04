import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsTelegram} from "react-icons/bs"

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-t-amber-500">
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-green-500 via-amber-500 to-indigo-500 text-white'>
                 Korrect
                 </span>Gist
                 </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title="About"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">About Us</Footer.Link>
                        <Footer.Link href="#">Press</Footer.Link>
                        <Footer.Link href="#">Careers</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Follow Us"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="#" target="_blank" rel="noopener noreferrer">Facebook</Footer.Link>
                        <Footer.Link href="#">Twitter</Footer.Link>
                        <Footer.Link href="#">Instagram</Footer.Link>
                        <Footer.Link href="#">Telegram</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="legal"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Terms &amp; Condition</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="Korrect Gist" year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook}/>
                    <Footer.Icon href="#" icon={BsInstagram}/>
                    <Footer.Icon href="#" icon={BsTwitter}/>
                    <Footer.Icon href="#" icon={BsGithub}/>
                    <Footer.Icon href="#" icon={BsTelegram}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}
