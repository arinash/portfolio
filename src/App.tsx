import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  const [currentTab, setCurrentTab] = useState('education')

  const renderTab = () => {
    switch (currentTab) {
      case 'education':
        return <Education />
      case 'experience':
        return <Experience />
      case 'projects':
        return <Projects />
      default:
        return <Education />
    }
  }

  return (
    <>
      <Header />
      <Nav onTabChange={setCurrentTab} currentTab={currentTab} />
      {renderTab()}
      <Footer />
    </>
  )
}

export default App
