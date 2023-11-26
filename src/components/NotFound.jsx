// Bootstrap imports
import Button from 'react-bootstrap/Button'

import notFound from '../assets/1_9rsNRWlvk6VfBVBby0bQPA.gif'


import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="notFound">
      <h1>What are you doing here? Go away!</h1>
      <img src={notFound} />
      <Button as={Link} to='/' className="returnBtn">Take me back</Button>
    </div>
  )
}