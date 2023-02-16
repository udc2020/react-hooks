import { useEffect, useState } from 'react'
import { Container, Button, Card } from 'react-bootstrap'



export default function FetchDataEffect() {

   const [data, setData] = useState({})
   const [counter, setCounter] = useState(0)

   useEffect(() => {
      console.log("mount");
      fetchData()

   }, [counter])

   const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products')
      const data = await response.json()

      const { title, price, thumbnail, description } = data.products[counter]
      setData({ title, price, thumbnail, description })
   }

   return (
      <Container className='mt-4'>

         <Button className='mb-4' onClick={() => setCounter(counter + 1)} >Next</Button>

         <Card style={{ width: '18rem' }}>

            <Card.Img variant='top' src={data.thumbnail} />

            <Card.Body >

               <Card.Title >{data.title}</Card.Title>
               <Card.Text >{data.description}</Card.Text>
               <Card.Footer >
                  <p className='fw-bold'>{data.price}$</p>
               </Card.Footer>

            </Card.Body>
         </Card>

      </Container>
   )
}

