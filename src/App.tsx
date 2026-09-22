import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import CharacterDefs from './components/CharacterDefs'
import Home from './views/Home'
import Exercises from './views/Exercises'
import Diet from './views/Diet'
import Routine from './views/Routine'
import SymptomChecker from './views/SymptomChecker'
import FindSpecialist from './views/FindSpecialist'
import SupportGroups from './views/SupportGroups'
import Quotes from './views/Quotes'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/exercises', label: 'Exercises' },
  { to: '/diet', label: 'Diet' },
  { to: '/routine', label: 'Daily Routine' },
  { to: '/symptom-checker', label: 'Symptom Checker' },
  { to: '/find-specialist', label: 'Find Care' },
  { to: '/support-groups', label: 'Support Groups' },
  { to: '/quotes', label: 'Motivation' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <>
      <CharacterDefs />
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              🦴
            </span>
            Cervical Spondylosis Hub
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`site-nav${menuOpen ? ' open' : ''}`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/routine" element={<Routine />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />
          <Route path="/find-specialist" element={<FindSpecialist />} />
          <Route path="/support-groups" element={<SupportGroups />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            Cervical Spondylosis Hub is an educational resource, not a medical device or
            diagnostic service. Always consult a licensed physician, physiatrist, or physical
            therapist about your own symptoms, imaging results, and treatment plan.
          </p>
          <p className="footer-meta">
            Built by{' '}
            <a href="https://manojchandrak.github.io/portfolio" target="_blank" rel="noopener">
              Manoj Kompalli
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
