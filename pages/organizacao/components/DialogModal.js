import { Fragment, useEffect, useState } from "react"
import { Dialog, Transition } from "@headlessui/react";
import { AiFillCloseCircle } from 'react-icons/ai';

export default function DialogModal({ open, setOpen }){
  return(
    <>
    <Transition appear show={open} as={Fragment}>
    <div>
      <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      leave="ease-in duration-200"
    >
    <Dialog open={open} onClose={() => setOpen(false)}>
      <div className="fixed flex justify-center items-center inset-0 w-full text-third font-koho-bold text-4xl xl:text-6xl 2xl:text-8xl px-2 lg:px-0">
        <div className="relative flex flex-col justify-center items-center w-full lg:w-1/2 bg-white max-w-screen-2xl rounded-3xl border py-5 border-black">
          <div className="absolute right-0 top-0 z-50 text-red-600 2xl:text-5xl">
            <AiFillCloseCircle onClick={() => setOpen(false)} className="cursor-pointer text-black m-0.5 lg:m-5"/>
          </div>
          <p className="uppercase bg-gradient-to-r from-primary to-third text-transparent bg-clip-text">Obrigado pela</p>
          <p className="uppercase bg-gradient-to-r from-primary to-third text-transparent bg-clip-text">sua presença!</p>
          <img src="/membros.png" className="w-10/12 lg:w-2/3"/>
        </div>
      </div>
    </Dialog>
  </Transition.Child>
  </div>
  </Transition>
  </>
)}