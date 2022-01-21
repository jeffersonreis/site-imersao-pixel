import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import Head from "next/head";

export default function Header(){
  
  return(
    <>
      <Head>
          <title>Imersão | Pixel</title>
          <meta
            property="og:description"
            content="A melhor imersão já vista no Mundo!"
          />
        </Head>
      <section 
        style={{background: "linear-gradient(150.64deg, #FA8400 8.97%, #DF5E4C 41.26%, #82337E 85.78%)"}} 
        className="fixed z-10 w-full h-20 flex items-center justify-between font-koho px-5 text-xl"
      >
        <img src="/logo.png" alt="logoPixel" className="w-36"/>
        <nav className='hidden md:block'>
          <ul className="flex gap-5 text-white">
            <Link href="/">
              <a>
                <li className="hover:underline">Home</li>
              </a>
            </Link>
            <Link href="/organizacao">
              <a>
                <li className="hover:underline">Organização</li>
              </a>
            </Link>
            <Link href="/sobre">
              <a>
                <li className="hover:underline">Sobre</li>
              </a>
            </Link>
            <Link href="/conduta">
              <a>
                <li className="hover:underline">Conduta</li>
              </a>
            </Link>
            <Link href="/cronograma">
              <a>
                <li className="hover:underline">Cronograma</li>
              </a>
            </Link>
        </ul>
        </nav>

        <div className='flex items-center md:hidden'>
          <Menu>
            <Menu.Button className={"absolute right-0 mr-8 text-white"}><AiOutlineMenu className='text-3xl'/></Menu.Button>
              <Menu.Items>
                <div className='absolute text-white gap-2 mt-10 right-0 flex flex-col px-2 py-4 font-koho bg-third border border-t border-white' >
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/">
                        <a className={`${active && 'bg-blue-500'}`}>
                          Home
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/organizacao">
                        <a className={`${active && 'bg-blue-500'}`}>
                        Organização
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/sobre">
                        <a className={`${active && 'bg-blue-500'}`}>
                          Sobre
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/conduta">
                        <a className={`${active && 'bg-blue-500'}`}>
                        Conduta
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/cronograma">
                        <a className={`${active && 'bg-blue-500'}`}>
                        Cronograma
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
          </Menu>
        </div>
      </section>
    </>
  )
}