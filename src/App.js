import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './componets/pages/Home'
import Company from './componets/pages/Company'
import Contact from './componets/pages/Contact'
import NewProject from './componets/pages/NewProject'
import Projects from './componets/pages/Projects'

import Container from './componets/layout/Container'
import Navbar from './componets/layout/Navbar'
import Footer from './componets/layout/Footer'



function App() {
  return (
    <Router >
      <Navbar />
      <Container customClass="min-height" >
       <Routes >
          <Route path="/" element={<Home />} >
          </Route>
          <Route path="/company" element={<Company />} >
          </Route>
          <Route path="/projects" element={<Projects />} >
          </Route>
          <Route path="/contact" element={<Contact />} >
          </Route>
          <Route path="/newproject" element={<NewProject />} >
          </Route>
        </Routes >
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
