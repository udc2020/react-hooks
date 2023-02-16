import { useMemo, useState } from 'react'
import { Button, Container } from 'react-bootstrap'

export default function MemoBtn() {
   const [counter, setCounter] = useState(0)
   const increament = () => setCounter(c => c + 1)


   const MemoBtnExtra = useMemo(() => <ExtraBtn onclick={increament
   } />, [])

   return (
      <Container className='mt-4'>
         <div className="d-grid">
            {MemoBtnExtra}
            <div className='border mx-4 text-center fs-2' >{counter}</div>
         </div>
      </Container>
   )
}



function ExtraBtn({ onclick }) {
   console.log("render")
   return (
      <Button className='h1 btn-xl' onClick={onclick} >Count</Button>
   )
}
