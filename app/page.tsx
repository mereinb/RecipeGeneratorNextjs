import Link from 'next/link'
import Container from './components/Container/Container'
import Button from './components/Button/Button'

export default function Home () {
  return (
  <Container>
  <div>

  <h1>Recipe Generator</h1>

  <div className='container flex flex-column justify-center items-center'>  
  <p className='text-center pt-7 w-96'>Are you not sure what to cook today? Click on the button below, and generate a random recipe! </p>
  </div>

  <div className='flex flex-row'>
    
    <div className='basis-1/2 mx-2'>
  <Button> 
  <Link href="/recipe">What should I cook today?</Link>
  </Button>
  </div>

    <div className='basis-1/2 mx-2'>
  <Button>
  <Link href="/submitrecipe">Submit my own recipe</Link>
  </Button>
  </div>

  </div>

  </div>
  </Container>
)}
