
import {useState} from 'react'
import { Button, Collapse, Container } from 'react-bootstrap'

export default function CollapseElements() {
   //let collaps = false
   const [collaps , setCollaps] =  useState(false)
   const [count , setCount] =  useState(0)
   const [input , setInput] =  useState("")

   const changeState = ()=>{
      //collaps = true
      setCollaps(!collaps)
      if (!collaps){
         setCount(count+1)

      }
   }

   const changeText = (e)=>{
      setInput(e.target.value)
   }

   return (
      <Container className="mt-4">
         <Button
            id ='collaps'
            className='btn btn-secondary btn-lg'
            onClick={changeState}

         > {!collaps ? "Show" :"Hide"}  Collaps</Button>
          <input
            placeholder='what you wont'
            className='m-2 py-2 px-3 border-0'
            onChange={changeText}
            />
         <Collapse 
            className='mt-4 border border-3 p-4' 
            in={collaps}
            >
           
            <p className='fs-4'>
               <span className='badge bg-secondary '>{count}</span> <span className='badge bg-secondary mx-2 '>{input}</span>If you're noticing choppy animations, and the component that's being collapsed has non-zero margin or padding, try wrapping the contents of your  inside a node with no margin or padding, like the in the example below. This will allow the height to be computed properly, so the animation can proceed smoothly.
            </p>
         </Collapse>
      </Container>
   )
}

