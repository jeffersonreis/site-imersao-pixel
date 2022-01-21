import { useState } from "react"
import Header from "../Components/Header"
import DialogModal from "./Components/DialogModal"

export default function Organizacao() {
  const [open, setOpen] = useState(false)
  return (
    <section className="h-full lg:h-screen w-screen">
      <Header/>
      <div className="w-full h-full pt-32 lg:pt-0">
        <DialogModal open={open} setOpen={setOpen}/>
        <div className="relative h-full flex flex-col items-center justify-center px-5 lg:px-20">
          <div className="flex flex-col justify-center items-center max-w-screen-2xl">
            <h1 className="text-5xl 2xl:text-7xl text-fourth font-koho-semibold mb-20">Diretorias Executivas 21.2 e 22.1</h1>
            <img src="/direx.png" alt="direx" className="w-full"/>
            <button onClick={() => setOpen(true)} className="transform hover:translate-y-1 mt-5 text-white text-xl lg:text-3xl 2xl:text-4xl bg-primary px-8 py-4 rounded-3xl">
              Aperte para agradeçer
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}