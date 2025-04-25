
import Nav from './Nav'
import { NavProvider } from './NavContext'
import Body from './pages/Body'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Footer from './pages/Footer'
import LineLeft from './pages/LineLeft'
import LineRight from './pages/LineRight'
import Projects from './pages/Projects'




function App() {

  return (
    <>
    <NavProvider>
    <Nav/>
    <LineLeft/>
    <LineRight/>
    <Body/>
    <Projects/>
    <Experience/>  
    <Contact/>
    <Footer/>
    </NavProvider>
    </>
  )
}

export default App
