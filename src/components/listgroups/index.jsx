import { useState } from 'react'
import { Button, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'

export default function ListGroups() {
   const [items, setNewItem] = useState([])
   const [input, setInput] = useState("")

   const manageInput = (e) => {
      setInput(e.target.value)
   }

   const addNewItem = () => {
      const newItem = [...items, input]
      setNewItem(newItem)

   }
   const deleteItem = (currentItem) => {
      const newItems = items.filter(item=> item !== currentItem)
      setNewItem(newItems)

   
   }

   return (
      <Container className='mt-4'>
         <div className='btn-group btn-group-lg w-100' >
            <input type="text" className='px-1 w-75 fs-4' placeholder='new item' onChange={manageInput} />
            <Button onClick={addNewItem} >Add New item </Button>
         </div>
         <ListGroup className='mt-4'>
            {items.map((item, key) => <ListGroup.Item key={key} className='my-1 fs-4 d-flex justify-content-between' variant='secondary' >
               <div className='fw-bold'>{item}</div>
               <div>
                  <Button 
                  className='btn-danger'
                  onClick={() => deleteItem(item)}
                  >X</Button>
                  </div>
            </ListGroup.Item>)}

         </ListGroup>
      </Container>
   )
}

