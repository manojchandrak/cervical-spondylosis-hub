import { Link } from 'react-router-dom'
import ExercisePhoto from '../components/ExercisePhoto'
import './Home.css'

const features = [
  {
    to: '/diet',
    icon: '🥗',
    title: 'Anti-Inflammatory Diet',
    desc: 'Foods that may help ease joint and nerve inflammation, and what to cut back on.',
  },
  {
    to: '/routine',
    icon: '🗓️',
    title: 'Daily Routine',
    desc: 'Posture, sleep position, and workstation habits that protect your neck day to day.',
  },
  {
    to: '/symptom-checker',
    icon: '📝',
    title: 'Symptom Checker',
    desc: 'A quick self-check for common symptoms, plus red flags that need urgent care.',
  },
  {
    to: '/find-specialist',
    icon: '📍',
    title: 'Find a Specialist',
    desc: 'Locate spine specialists, physical therapists, and pain management clinics near you.',
  },
  {
    to: '/support-groups',
    icon: '💬',
    title: 'Support Groups',
    desc: 'Reddit communities where people share what has helped them manage chronic neck pain.',
  },
  {
    to: '/quotes',
    icon: '✨',
    title: 'Motivation',
    desc: 'A little encouragement for the days pain makes everything feel heavier.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="pill">Educational resource</span>
          <h1>Living well with cervical spondylosis</h1>
          <p className="hero-sub">
            Exercises, diet guidance, daily routines, symptom screening, and real support &mdash;
            everything to help you manage neck arthritis, in one place.
          </p>
          <div className="hero-actions">
            <Link to="/exercises" className="btn">
              Start exercising
            </Link>
            <Link to="/symptom-checker" className="btn secondary">
              Check your symptoms
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="disclaimer">
            <p>
              <strong>This site is educational, not medical advice.</strong> It does not diagnose
              or treat any condition. Always talk to a licensed physician, physiatrist, or
              physical therapist about your own symptoms, imaging, and treatment.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link to="/exercises" className="featured card">
            <div className="featured-anim">
              <ExercisePhoto id="chin-tuck" />
            </div>
            <div className="featured-copy">
              <span className="pill">Featured</span>
              <h2>Try today's neck routine</h2>
              <p>
                8 guided mobility and strengthening exercises with animated diagrams and a
                built-in timer &mdash; about 4 minutes a day, no equipment needed.
              </p>
              <span className="featured-cta">Start the routine →</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Explore</h2>
          <div className="grid cols-3">
            {features.map((f) => (
              <Link key={f.to} to={f.to} className="feature-card card">
                <span className="feature-icon" aria-hidden="true">
                  {f.icon}
                </span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
