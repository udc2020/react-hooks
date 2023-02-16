import { useEffect, useRef } from 'react'
import { Button, Container } from 'react-bootstrap'

export default function ButtonRef() {
  
   const input = useRef()

   const inputfocus = ()=>{
      // input.current.focus()
      input.current.classList.add('border-danger')
      input.current.placeholder = "Empty Field"

      console.log(input.current.value )

   }

   return (

      <Container className="mt-4">
         <div className="btn-group gap-1 w-100">
           <input ref={input}  type="text" className='input-group px-2' />
           <Button onClick={inputfocus}  className='btn-lg' >Submit</Button>

         </div>
      </Container>
   )
}

