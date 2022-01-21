import { useState } from "react"
import Header from "./Components/Header"
import DialogModal from "./Components/Home/DialogModal"

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <section className="h-full lg:h-screen w-screen">
      <Header/>
      <div className="h-full w-full pt-32 lg:pt-0">
        <DialogModal open={open} setOpen={setOpen}/>
        <div className="relative h-full flex flex-col lg:flex-row items-center justify-center px-5 lg:px-20">
          <div className="lg:w-1/2">
            <p className='text-5xl xl:text-6xl 2xl:text-7xl font-koho-semibold text-sunrise font-koho text-third'>
              <strong className="font-koho-semibold text-primary">Imersões</strong> que fazem a diferença na vida dos Bits e Bytes
            </p>
            <button onClick={() => setOpen(true)} className="transform hover:translate-y-1 mt-10 lg:mt-5 text-white text-2xl xl:text-3xl 2xl:text-4xl bg-primary px-8 py-3 rounded-3xl">
              Começar imersão
            </button>
          </div>
          <div className="w-full lg:pt-0 lg:w-1/2 mt-10 lg:mt-0">
            <img src="/corsadancando.gif" alt="corsaRoxo" className="w-full"/>
          </div>
        </div>
      </div>
    </section>
  )
}