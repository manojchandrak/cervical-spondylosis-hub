import { useState } from 'react'
import './Quotes.css'

const quotes = [
  { text: 'The greatest wealth is health.', author: 'Virgil' },
  { text: "Take care of your body. It's the only place you have to live.", author: 'Jim Rohn' },
  { text: 'He who has health has hope, and he who has hope has everything.', author: 'Arabian Proverb' },
  { text: 'It is health that is real wealth and not pieces of gold and silver.', author: 'Mahatma Gandhi' },
  { text: "You don't have to be great to start, but you have to start to be great.", author: 'Zig Ziglar' },
  { text: "Nothing is impossible, the word itself says 'I'm possible'!", author: 'Audrey Hepburn' },
  { text: 'Healing is a matter of time, but it is sometimes also a matter of opportunity.', author: 'Hippocrates' },
  {
    text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    author: 'Ralph Waldo Emerson',
  },
  {
    text: 'Strength does not come from physical capacity. It comes from an indomitable will.',
    author: 'Mahatma Gandhi',
  },
  {
    text: "Once you replace negative thoughts with positive ones, you'll start having positive results.",
    author: 'Willie Nelson',
  },
  { text: 'Patience and persistence conquer more than pain ever takes away.', author: 'Unknown' },
]

function dayOfYear() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / 86400000)
}

export default function Quotes() {
  const [index, setIndex] = useState(dayOfYear() % quotes.length)

  function shuffle() {
    let next = Math.floor(Math.random() * quotes.length)
    if (next === index && quotes.length > 1) {
      next = (next + 1) % quotes.length
    }
    setIndex(next)
  }

  const quote = quotes[index]

  return (
    <section className="section">
      <div className="container">
        <span className="pill warm">Motivation</span>
        <h1>A little encouragement</h1>
        <p>
          Living with chronic pain can wear you down some days more than others. Here's something
          to hold onto.
        </p>

        <div className="card quote-card">
          <p className="quote-mark" aria-hidden="true">
            "
          </p>
          <blockquote>{quote.text}</blockquote>
          <p className="quote-author">&mdash; {quote.author}</p>
          <button type="button" className="btn warm" onClick={shuffle}>
            Another quote
          </button>
        </div>

        <h2 style={{ marginTop: 40 }}>All quotes</h2>
        <div className="grid cols-2">
          {quotes.map((q, i) => (
            <article key={q.text} className={`card quote-mini ${i === index ? 'active' : ''}`}>
              <p>&ldquo;{q.text}&rdquo;</p>
              <span className="quote-mini-author">&mdash; {q.author}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
