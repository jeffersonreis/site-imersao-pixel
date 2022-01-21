export default function DialogModal({ open, setOpen }){
  return(
    <section onClick={() => setOpen(false)} className={`fixed z-50 inset-0 w-full ${!open && "hidden"} flex justify-center items-center`}>
      <div className='relative flex flex-col w-full lg:w-1/2 justify-center items-center text-4xl lg:text-6xl 2xl:text-8xl bg-white rounded-3xl border border-black py-10'>
          <p className="uppercase bg-gradient-to-r from-primary to-third text-transparent bg-clip-text">Obrigado pela</p>
          <p className="uppercase bg-gradient-to-r from-primary to-third text-transparent bg-clip-text">sua presença!</p>
          <img src="/membros.png" className="w-10/12 lg:w-2/3"/>
      </div>
    </section>
  )
}