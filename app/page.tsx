import Link from 'next/link'
import Container from './components/Container/Container'

export default function Home () {
  return (
  <Container>
  <div>
  <h1>Recipe Generator</h1>
  <p>Are you not sure what to cook today? Click on the button below, and generate a random recipe! </p>
  <Link href="/recipe">What should I cook today?</Link>
  <Link href="/submitrecipe">Submit my own recipe</Link>
  </div>
  </Container>
)}
