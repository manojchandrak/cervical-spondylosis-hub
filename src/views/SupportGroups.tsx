import './SupportGroups.css'

const groups = [
  {
    sub: 'ChronicPain',
    desc: 'A large community for anyone living with ongoing pain, including neck and spine conditions — coping strategies, treatment experiences, and everyday support.',
  },
  {
    sub: 'backpain',
    desc: 'Focused on back and spine issues broadly, with a lot of overlap in exercises, ergonomics, and treatment discussions relevant to the neck too.',
  },
  {
    sub: 'ChronicIllness',
    desc: 'A broader space for people managing long-term health conditions, useful for the emotional and lifestyle side of living with a chronic issue.',
  },
  {
    sub: 'Posture',
    desc: 'Tips and discussion on posture correction, which plays a big role in managing and preventing cervical spondylosis symptoms.',
  },
  {
    sub: 'physicaltherapy',
    desc: 'A mix of patients and physical therapists discussing exercises, recovery timelines, and what to expect from PT.',
  },
]

export default function SupportGroups() {
  return (
    <section className="section">
      <div className="container">
        <span className="pill">Support groups</span>
        <h1>You’re not managing this alone</h1>
        <p>
          These Reddit communities are run by everyday people, not medical professionals.
          They’re a good place for encouragement and shared experience &mdash; not for diagnosis
          or treatment decisions.
        </p>

        <div className="disclaimer" style={{ margin: '16px 0 32px' }}>
          <p>
            Content on Reddit is user-generated and unmoderated by clinicians. Treat what you read
            there as anecdotal, not medical advice, and always check anything significant with
            your own doctor.
          </p>
        </div>

        <div className="grid cols-2">
          {groups.map((g) => (
            <a
              key={g.sub}
              className="card group-card"
              href={`https://www.reddit.com/r/${g.sub}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>r/{g.sub}</h3>
              <p>{g.desc}</p>
              <span className="group-cta">Visit community →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
