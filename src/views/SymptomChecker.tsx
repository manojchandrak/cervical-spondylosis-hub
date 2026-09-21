import { useMemo, useState } from 'react'
import './SymptomChecker.css'

const commonSymptoms = [
  'Neck stiffness or reduced range of motion',
  'Neck pain that worsens with activity or by end of day',
  'Headaches starting at the back of the head',
  'Pain or stiffness that is worse in the morning',
  'Shoulder or upper back pain',
  'Grinding or popping sensation when moving your neck',
  'Muscle spasms in the neck or shoulders',
  'Pain that improves with rest',
]

const redFlags = [
  'Numbness or tingling radiating into your arms or hands',
  'Weakness or clumsiness in your hands (dropping things, trouble with buttons)',
  'Difficulty with balance or a change in how you walk',
  'New bladder or bowel control problems',
  'Sudden, severe neck pain after a fall or accident',
]

export default function SymptomChecker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [redChecked, setRedChecked] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  const symptomCount = useMemo(() => Object.values(checked).filter(Boolean).length, [checked])
  const hasRedFlag = useMemo(() => Object.values(redChecked).some(Boolean), [redChecked])

  function toggle(setter: typeof setChecked, key: string) {
    setter((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  let tier: { label: string; desc: string; className: string } | null = null
  if (submitted) {
    if (symptomCount <= 1) {
      tier = {
        label: 'Few common symptoms',
        desc: 'You checked few of the common cervical spondylosis symptoms. Keep an eye on things and maintain good posture and neck mobility.',
        className: 'tier-low',
      }
    } else if (symptomCount <= 4) {
      tier = {
        label: 'Several common symptoms',
        desc: 'You checked a handful of common symptoms. Gentle exercise, posture changes, and over-the-counter care often help — consider seeing a doctor if things don’t improve in a few weeks.',
        className: 'tier-mid',
      }
    } else {
      tier = {
        label: 'Many common symptoms',
        desc: 'You checked several common symptoms. It’s worth scheduling a visit with a doctor or spine specialist to get a proper evaluation and treatment plan.',
        className: 'tier-high',
      }
    }
  }

  return (
    <section className="section">
      <div className="container">
        <span className="pill">Symptom checker</span>
        <h1>How does your neck feel?</h1>
        <p>
          This is a quick, informal self-check &mdash; not a diagnosis. Check anything that applies
          to you, then submit to see general guidance and, importantly, whether any warning signs
          mean you should see a doctor soon.
        </p>

        <div className="card checker-card">
          <h2>Common symptoms</h2>
          <div className="checklist">
            {commonSymptoms.map((s) => (
              <label key={s} className="check-row">
                <input
                  type="checkbox"
                  checked={!!checked[s]}
                  onChange={() => toggle(setChecked, s)}
                />
                <span>{s}</span>
              </label>
            ))}
          </div>

          <h2 style={{ marginTop: 32 }}>Warning signs</h2>
          <p className="warning-lead">
            These can indicate pressure on the spinal cord or nerves and deserve prompt medical
            attention.
          </p>
          <div className="checklist">
            {redFlags.map((s) => (
              <label key={s} className="check-row red">
                <input
                  type="checkbox"
                  checked={!!redChecked[s]}
                  onChange={() => toggle(setRedChecked, s)}
                />
                <span>{s}</span>
              </label>
            ))}
          </div>

          <button type="button" className="btn" style={{ marginTop: 24 }} onClick={() => setSubmitted(true)}>
            See guidance
          </button>
        </div>

        {submitted && hasRedFlag && (
          <div className="alert" style={{ marginTop: 24 }}>
            <strong>Please see a doctor promptly.</strong> One or more of the symptoms you checked
            can be a sign of cervical myelopathy or nerve compression, which is more time-sensitive
            than routine neck pain. Contact your doctor or an urgent care/ER if symptoms are severe
            or getting worse quickly.
          </div>
        )}

        {submitted && tier && (
          <div className={`card tier-card ${tier.className}`} style={{ marginTop: 16 }}>
            <span className="pill">{tier.label}</span>
            <p>{tier.desc}</p>
          </div>
        )}
      </div>
    </section>
  )
}
