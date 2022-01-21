import { useState } from "react"
import Header from "../Components/Header"

export default function Sobre() {
  return (
    <section className="h-full lg:h-screen">
      <Header/>
      <div className="relative h-full flex flex-col lg:flex-row items-center justify-center py-40 px-5 lg:px-20">
        <div className="order-2 lg:order-1 lg:w-2/3 lg:px-5">
          <h1 className="text-3xl lg:text-5xl 2xl:text-7xl text-fourth font-koho-bold lg:mb-20 max-w-5xl mt-5 lg:mt-0">
            O que é uma imersão? Para que serve? Do que se alimenta?
          </h1>
          <p className="text-lg xl:text-2xl 2xl:text-3xl font-krub leading-loose mt-5 lg:mt-0">
            É o encontro de todos da EJ para discutirmos assuntos que interessam para o futuro da estratégia da Pixel. As imersões ocorrem em inícios e 
            términos de ciclos e são também um momento de passagem de bastão das gestões. Neste fim de semana iremos revisar nosso planejamento estratégico, 
            a fim de entender quais ações fazem sentido e quais deixaram de fazer e o que podemos fazer para a EJ crescer ainda mais!
          </p>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-1/3 max-w-sm lg:max-w-none">
          <img src="/casaazul.png" className="w-full"/>
        </div>
      </div>
    </section>      
)}