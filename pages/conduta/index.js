import { useState } from "react"
import Header from "../Components/Header"

export default function Conduta() {
  return (
    <section className="h-full">
      <Header/>
      <div className="relative h-full flex items-center justify-center py-32 lg:py-40 px-5 lg:px-20">
        <img src="/regras.svg" className="w-full md:w-2/3"/>
      </div>
    </section>      
)}