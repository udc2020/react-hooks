import { useReducer } from 'react'
import { Container, Form, ListGroup } from 'react-bootstrap'
import { posts as originalposts } from '../../utils/posts'

const actionType = Object.freeze({ Done:"Done", Undone:"Undone" })

const reducer = (state, action) => {
  
   switch (action.type) {

      case actionType.Done:
         return state.map(post => {
            return post.id === action.id ? { ...post, isActive: !post.isActive } : post
         })
      
      default:return state
   }
}


export default function ReducerChecker() {
   const [posts, dispatch] = useReducer(reducer, originalposts)

   const handler = (id) => 
     dispatch({type:actionType.Done , id:id})
  

   return (
      <Container className='mt-4'>
         <ListGroup>
            {posts.map(({ id, title, isActive }, key) =>
               <ListGroup.Item key={key} className='my-2' variant={isActive ? "info" : "warning"}>

                  <h4>{title}  {isActive || "Not active"} </h4>

                  <Form.Check
                     checked={isActive}
                     type='switch'
                     id={`switch-${key}`}
                     label={isActive ? "ON" : "OFF"}
                     onChange={() => handler(id)}
                  />
               </ListGroup.Item>)}

         </ListGroup>
      </Container>
   )
}
