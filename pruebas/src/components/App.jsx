import '../components/App'
import NavBar from './NavBar.jsx'
import Hero from './Hero'
import CardPeople from './CardPeople'


function App() {

  return (
    <>
      <section className='container-md'>
        <NavBar/>
        <Hero/> 
        <CardPeople/>
          
      </section>
    </>
  )
}

export default App
