'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Projects from './Projects'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '/Resume_RavinderHundal.pdf', target: '_blank' }, // Correct path
  { name: 'About', href: '#about-me' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMobileMenuOpen(false) // Close the mobile menu when a link is clicked
  }

  return (
    <div className="bg-gradient-to-r from-neutral-100 to-stone-200">
      <header className="sticky top-0 z-50 bg-transparent inset-x-0">
        <nav aria-label="Global" className="sticky top-0 z-50 flex items-center justify-center p-6 lg:px-8">
          <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
            {/* Brand Name */}
            <a href="#" className="text-lg font-medium">
            Ravinder Hundal
            </a>
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}              
                  href={item.href}
                  target={item.target}
                  className="text-sm font-semibold text-gray-900 hover:text-gray-700"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="">Ravinder Hundal</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root justify-center">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={handleLinkClick}  // Close menu on link click
                      target={item.target}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative  isolate px-6 pt-14 lg:px-8">
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div> */}
        
        <div className=" mx-auto max-w-2xl py-32 sm:py-48 lg:py-8 lg:mx-auto ">
          
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl ">Hello, I&apos;m Ravinder Kaur
            </h1>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative mt-6 rounded-full font-medium px-3 py-4 text-lg/6 text-gray-700 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              A Full Stack Developer from India based in Chandigarh, India.{' '}
            </div>
          </div>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-700 sm:text-xl/8">
            Developing dynamic and resilient web applications with full stack proficiency. Let&apos;s build something amazing together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#projects"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                My Projects
              </a>
              <a href="/public/Resume_RavinderHundal.pdf"
               target="_blank" 
               rel="noopener noreferrer"
               className="text-sm/6 font-semibold text-gray-900">
                Resume <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <section id="projects" className="mx-auto max-w-5xl py-12 sm:py-48 lg:py-10">
            <Projects/>

      
        </section>

        <section id="about-me" className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-8 ">
            <AboutMe/>
        </section>
        <section id="about-me" className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-2 ">
            <Contact/>
        </section>
        <footer className="bg-white rounded-lg shadow mx-0 ">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-500">
      © 2024 <a href="https://flowbite.com/" className="hover:underline">Ravinder&apos;s Portfolio</a>.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-500 sm:mt-0 ">
      <li>
        <a href="https://www.linkedin.com/in/ravinder-kaur001/" className="hover:underline me-4 md:me-6"   target="_blank" >Linkedin</a>
      </li>
      <li>
        <a href="https://github.com/ravinderh17" className="hover:underline me-4 md:me-6"   target="_blank" >Github</a>
      </li>
    </ul>
  </div>
</footer>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] bg-slate-500"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div> */}
      </div>
   
    </div>
  )
}

