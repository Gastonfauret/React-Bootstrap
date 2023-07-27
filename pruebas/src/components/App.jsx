import '../components/App'
import NavBar from './NavBar.jsx'
import Hero from './Hero'
import CardPeople from './CardPeople'
import TitlesSquare from '../components/TitlesSquare'
import Carousel from '../components/Carousel'

function App() {
  return (
    <>
      <section className='container-md'>
        <NavBar />
        <Hero />
        <CardPeople />
        <TitlesSquare />
        <Carousel/>
      </section>
    </>
  )
}

export default App
