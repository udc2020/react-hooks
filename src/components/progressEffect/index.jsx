import { useEffect, useState } from 'react'
import { Container, ProgressBar } from 'react-bootstrap'

export default function ProgressEffect() {
  const [progress, setProgress] = useState(0)



  const makeProgress = () => {
    console.log("resize")
    const percent = Math.round((window.innerWidth) / (window.screen.availWidth / 100))

    setProgress(percent)
  }

  useEffect(() => {
    addEventListener('resize', makeProgress)
    //getEventListener(window)

    return () => removeEventListener('resize', makeProgress)
  })

  return (
    <Container className='mt-4 bg-dark text-white p-4 '>
      <h4>width : <span className='text-primary'>{progress}</span>%</h4>
      <ProgressBar className='mt-5' animated now={progress} />
    </Container>
  )
}

