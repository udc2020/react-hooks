import { useContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import DataContext from './DataContext'

export default function MainComponent() {
   const [data, setData] = useState('hello from main')

   return (
      <DataContext.Provider value={{ data, setData }}>
         <Container className='mt-4' >
            <div className="d-flex gap-3">

               <h1>MainComponent</h1>
               <Button
                  onClick={() => setData('Good Morening')}
               >Say good morinig
               </Button>
            </div>
            <Component1 />
         </Container>
      </DataContext.Provider>

   )
}

// maincomponent -> Component1 -> Component2 ->Component3

function Component1() {
   const { data, setData } = useContext(DataContext)

   return (
      <>
         <h1>Component1 : <span className='text-primary'>{data}</span>  </h1>
         <Component2 />
      </>
   )
}
function Component2() {
   return (
      <>
         <h1>Component2 : say nothing </h1>
         <Component3 />
      </>
   )
}
function Component3() {
   const { data, setData } = useContext(DataContext)
   return (
      <div className="d-flex gap-3">

         <h1>Component3 :<span className='text-primary'>{data}</span>  </h1>
         <Button
            onClick={() => setData('Good night')}
            variant="danger"
         >Say good night
         </Button>
      </div>
   )
}


