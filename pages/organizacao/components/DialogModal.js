export default function DialogModal({ open, setOpen }){
  return(
    <section onClick={() => setOpen(false)} className={`fixed z-50 inset-0 w-full ${!open && "hidden"}`}>
      <div className='relative flex w-full h-full justify-center items-center w-full'>
        <img src="mktcml.png" className="w-full lg:w-1/2"/>
      </div>
    </section>
  )
}