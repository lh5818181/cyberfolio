import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
// import { About } from './sections/About'
// import { Projects } from './sections/Projects'
// import { Services } from './sections/Services'
// import { Contact } from './sections/Contact'
// import { Footer } from './sections/Footer'
import { GlobalStyle } from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main >
        <Hero />
        {/* <About />
        <Projects />
        <Services />
        <Contact />
        <Footer /> */}
      </main>
    </>
  )
}

export default App
