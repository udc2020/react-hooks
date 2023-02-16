import {memo , useCallback, useState } from 'react'
import { ButtonGroup, Container, Button } from 'react-bootstrap'

export default function CallBacker() {

   const [hp ,setHp] = useState(10)
   const [mp ,setMp] = useState(10)

   const inchp = useCallback(()=>setHp(hp + 10),[hp]) 
   const dechp = useCallback(()=>setHp(hp - 10),[hp]) 

   const incmp = useCallback(()=>setMp(mp + 10),[mp]) 
   const decmp = useCallback(()=>setMp(mp - 10),[mp]) 

   return (
      <Container className='mt-4'>
         <MemoTitle />

         <MemoHp counter={hp} inc={inchp} dec={dechp}/>

         <br /><br />
         <MemoMp counter={mp} inc={incmp} dec={decmp} />




      </Container>
   )
}




const MemoTitle = memo(function Title() {
   console.log("Title render")
   return (
      <h1 className='text-center' >Game State</h1>
   )
})

const MemoHp = memo(function Hp({counter ,inc , dec}) {
   console.log("HP rander")
   return (
      <>
         <h2>HP</h2>
         <ButtonGroup className='gap-4' aria-label="Basic example">
            <Button variant='danger btn-lg' onClick={dec}>-</Button>
            <h1>{counter}</h1>
            <Button variant='primary btn-lg' onClick={inc}>+</Button>
         </ButtonGroup>
      </>
   )
})




const MemoMp = memo(function Mp({counter,inc,dec}) {
   console.log("MP rander")
   return (
      <>
         <h2>MP</h2>
         <ButtonGroup className='gap-4' aria-label="Basic example">
            <Button variant='danger btn-lg' onClick={dec}>-</Button>
            <h1>{counter}</h1>
            <Button variant='primary btn-lg' onClick={inc}>+</Button>
         </ButtonGroup>

      </>
   )
})
