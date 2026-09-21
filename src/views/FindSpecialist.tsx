import { useState } from 'react'
import './FindSpecialist.css'

const categories = [
  { term: 'spine specialist orthopedist', label: 'Spine Specialist / Orthopedist', icon: '🦴' },
  { term: 'physiatrist physical medicine rehabilitation', label: 'Physiatrist (PM&R)', icon: '🩺' },
  { term: 'physical therapist', label: 'Physical Therapist', icon: '🤸' },
  { term: 'pain management clinic', label: 'Pain Management Clinic', icon: '💊' },
  { term: 'neurologist', label: 'Neurologist', icon: '🧠' },
  { term: 'chiropractor', label: 'Chiropractor', icon: '🖐️' },
]

export default function FindSpecialist() {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null)
  const [manualLocation, setManualLocation] = useState('')
  const [locating, setLocating] = useState(false)
  const [locateError, setLocateError] = useState('')

  function locate() {
    if (!navigator.geolocation) {
      setLocateError('Geolocation is not available in this browser.')
      return
    }
    setLocating(true)
    setLocateError('')
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude })
        setLocating(false)
      },
      () => {
        setLocateError('Could not get your location. You can enter a city or zip code instead.')
        setLocating(false)
      },
      { timeout: 8000 },
    )
  }

  function mapsUrlFor(term: string) {
    const query = encodeURIComponent(term)
    if (coords) {
      return `https://www.google.com/maps/search/${query}/@${coords.lat},${coords.lng},12z`
    }
    if (manualLocation.trim()) {
      return `https://www.google.com/maps/search/${query}+near+${encodeURIComponent(manualLocation.trim())}`
    }
    return `https://www.google.com/maps/search/${query}`
  }

  const hasLocation = !!coords || !!manualLocation.trim()

  return (
    <section className="section">
      <div className="container">
        <span className="pill">Find care</span>
        <h1>Find a specialist or pain management near you</h1>
        <p>
          Set your location once, then open any specialty below in Google Maps to see nearby
          options, ratings, and contact details.
        </p>

        <div className="card locate-card">
          <div className="locate-row">
            <button type="button" className="btn" onClick={locate} disabled={locating}>
              {locating ? 'Locating…' : '📍 Use my location'}
            </button>
            <span className="or-text">or</span>
            <input
              type="text"
              className="location-input"
              placeholder="Enter a city or zip code"
              value={manualLocation}
              onChange={(e) => {
                setManualLocation(e.target.value)
                setCoords(null)
              }}
            />
          </div>
          {locateError && <p className="locate-error">{locateError}</p>}
          {coords && <p className="locate-ok">Using your current location.</p>}
        </div>

        <div className="grid cols-3" style={{ marginTop: 24 }}>
          {categories.map((c) => (
            <a
              key={c.term}
              className="card category-card"
              href={mapsUrlFor(c.term)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="category-icon" aria-hidden="true">
                {c.icon}
              </span>
              <h3>{c.label}</h3>
              <span className="category-cta">
                {hasLocation ? 'Search nearby →' : 'Search on map →'}
              </span>
            </a>
          ))}
        </div>

        <div className="disclaimer" style={{ marginTop: 32 }}>
          <p>
            Always verify a provider accepts your insurance and check their credentials before
            booking. In an emergency, or if you have new numbness, weakness, or loss of bladder or
            bowel control, seek immediate medical care instead of scheduling a routine visit.
          </p>
        </div>
      </div>
    </section>
  )
}
