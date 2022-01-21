
import { Menu } from '@headlessui/react'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header(){
  return(
    <section 
      style={{background: "linear-gradient(150.64deg, #FA8400 8.97%, #DF5E4C 41.26%, #82337E 85.78%)"}} 
      className="fixed z-10 w-full h-20 flex items-center justify-between font-koho px-5 text-xl"
    >
      <img src="/logo.png" alt="logoPixel" className="w-36"/>
      <nav className='hidden md:block'>
        <ul className="flex gap-5 text-white">
          <li className="hover:underline"><a href="/">Home</a></li>
          <li className="hover:underline"><a href="/organizacao">Organização</a></li>
          <li className="hover:underline"><a href="/sobre">Sobre</a></li>
          <li className="hover:underline"><a href="/conduta">Conduta</a></li>
          <li className="hover:underline"><a href="/cronograma">Cronograma</a></li>
       </ul>
      </nav>

      <div className='flex items-center md:hidden'>
        <Menu>
          <Menu.Button className={"absolute right-0 mr-8 text-white"}><AiOutlineMenu className='text-3xl'/></Menu.Button>
            <Menu.Items>
              <div className='absolute text-white gap-2 mt-10 right-0 flex flex-col px-2 py-4 font-koho bg-third border border-t border-white' >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && 'bg-blue-500'}`}
                      href="/"
                    >
                      Home
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && 'bg-blue-500'}`}
                      href="/organizacao"
                    >
                      Organização
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && 'bg-blue-500'}`}
                      href="/sobre"
                    >
                      Sobre
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && 'bg-blue-500'}`}
                      href="/conduta"
                    >
                      Conduta
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${active && 'bg-blue-500'}`}
                      href="/cronograma"
                    >
                      Cronograma
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
        </Menu>
      </div>
    </section>
  )
}