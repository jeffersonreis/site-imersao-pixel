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
      <div className="fixed flex justify-center items-center inset-0 w-full text-third">
        <div className="relative w-full md:w-8/12">
          <div className="absolute right-0 z-50 text-red-600 text-5xl">
            <AiFillCloseCircle onClick={() => setOpen(false)} className="cursor-pointer text-white md:m-5"/>
          </div>
          <img src="/mktcml.png" className="w-full"/>
        </div>
      </div>
    </Dialog>
  </Transition.Child>
  </div>
  </Transition>
  </>
)}