import { Navbar } from '../components/Navbar'
import { Hero } from '../containers/Hero'
export default function Home({ title = 'React com GraphQL' }) {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}
