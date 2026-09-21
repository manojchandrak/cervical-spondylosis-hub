import './Routine.css'

const timeline = [
  {
    time: 'Morning',
    icon: '🌅',
    tips: [
      'Do a short chin-tuck and shoulder-roll warm-up before getting out of bed.',
      'Take a warm shower or apply a warm towel to loosen overnight stiffness.',
      'Avoid checking your phone in bed with your neck bent forward.',
    ],
  },
  {
    time: 'At your desk',
    icon: '💻',
    tips: [
      'Raise your screen to eye level so you aren’t looking down for long periods.',
      'Keep your ears roughly aligned over your shoulders, not jutting forward.',
      'Set a reminder to stand, stretch, and do chin tucks every 30–45 minutes.',
      'Use a headset instead of cradling your phone between ear and shoulder.',
    ],
  },
  {
    time: 'Midday',
    icon: '🚶',
    tips: [
      'Take a short walk — movement helps circulation and reduces stiffness.',
      'Do a round of shoulder blade squeezes and lateral neck stretches.',
      'Stay hydrated; disc tissue relies on water for cushioning.',
    ],
  },
  {
    time: 'Evening',
    icon: '🌙',
    tips: [
      'Do your full guided exercise routine while muscles are warmed up from the day.',
      'Apply heat or a cold pack, whichever eases your symptoms best.',
      'Wind down screens 30–60 minutes before bed to reduce prolonged forward neck posture.',
    ],
  },
  {
    time: 'Sleep',
    icon: '🛏️',
    tips: [
      'Use a supportive pillow that keeps your neck aligned with your spine — not too high, not too flat.',
      'Side or back sleeping is generally easier on the neck than sleeping face-down.',
      'If you wake with stiffness, a slightly firmer or contoured cervical pillow may help.',
    ],
  },
]

const ergonomics = [
  { label: 'Monitor height', value: 'Top of screen at or just below eye level, about an arm’s length away' },
  { label: 'Chair', value: 'Feet flat on the floor, lower back supported, elbows near 90°' },
  { label: 'Phone & tablet use', value: 'Bring the device up to eye level instead of bending your neck down' },
  { label: 'Bag & posture', value: 'Use a backpack with both straps rather than a heavy one-shoulder bag' },
]

export default function Routine() {
  return (
    <section className="section">
      <div className="container">
        <span className="pill">Daily routine</span>
        <h1>A day that’s kinder to your neck</h1>
        <p>
          Small, consistent habits throughout the day matter more than any single fix. Building
          neck-friendly posture and movement into your existing routine is one of the most
          effective things you can do alongside exercise and treatment.
        </p>

        <div className="timeline">
          {timeline.map((block) => (
            <div key={block.time} className="card timeline-card">
              <div className="timeline-head">
                <span className="timeline-icon" aria-hidden="true">
                  {block.icon}
                </span>
                <h3>{block.time}</h3>
              </div>
              <ul>
                {block.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: 40 }}>Ergonomics checklist</h2>
        <div className="card table-card">
          <table className="ergo-table">
            <tbody>
              {ergonomics.map((e) => (
                <tr key={e.label}>
                  <td className="ergo-label">{e.label}</td>
                  <td>{e.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
