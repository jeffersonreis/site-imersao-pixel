import { useState, useEffect } from "react"
import Header from "../Components/Header"

export default function Conduta() {
  const [selected, setSelected] = useState(0)
  const imageList = ['/crono-sexta.svg', '/crono-sabado.svg', '/crono-domingo.svg']

  useEffect(() => {
    imageList.forEach((image) => {
      new Image().src = image
    });
  });

  return (
    <section className="h-full">
      <Header/>
      <div className="relative h-full flex flex-col items-center justify-center py-32 lg:py-40 lg:px-20">
        <div className="flex gap-5 lg:gap-10 lg:text-2xl font-koho-semibold">
          <button onClick={() => setSelected(0)} className={`py-2 px-6 rounded-3xl ${selected === 0? "bg-primary text-white" : "bg-gray-200"}`}>Sexta</button>
          <button onClick={() => setSelected(1)} className={`py-2 px-6 rounded-3xl ${selected === 1? "bg-primary text-white" : "bg-gray-200"}`}>Sábado</button>
          <button onClick={() => setSelected(2)} className={`py-2 px-6 rounded-3xl ${selected === 2? "bg-primary text-white" : "bg-gray-200"}`}>Domingo</button>
        </div>

        <div className="flex justify-center w-full mt-10 lg:mt-20 px-5 lg:px-0">
          {
            selected === 0?
            <img src={imageList[0]} className="w-full md:w-2/3"/>
          
            : selected === 1?
            <img src={imageList[1]} className="w-full md:w-2/3"/>
          
            : selected === 2?
            <img src={imageList[2]} className="w-full md:w-2/3"/>
          
            :''
        }
        </div>
      </div>
    </section>      
)}