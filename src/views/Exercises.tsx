import { useEffect, useMemo, useRef, useState } from 'react'
import ExerciseAnimation from '../components/ExerciseAnimation'
import './Exercises.css'

interface Exercise {
  id: string
  category: string
  name: string
  seconds: number
  instructions: string
}

const exercises: Exercise[] = [
  {
    id: 'chin-tuck',
    category: 'Mobility',
    name: 'Chin tucks',
    seconds: 30,
    instructions:
      'Sit tall. Gently draw your chin straight back to make a "double chin," keeping your eyes level. Hold 5 seconds, release, and repeat.',
  },
  {
    id: 'neck-rotation',
    category: 'Mobility',
    name: 'Neck rotation',
    seconds: 30,
    instructions:
      'Slowly turn your head to look over one shoulder as far as comfortable, then the other. Move slowly and stop short of pain.',
  },
  {
    id: 'lateral-stretch',
    category: 'Mobility',
    name: 'Lateral neck stretch',
    seconds: 30,
    instructions:
      'Tilt your ear toward one shoulder without raising the shoulder up. Hold gently, then switch sides.',
  },
  {
    id: 'flexion-extension',
    category: 'Mobility',
    name: 'Flexion & extension',
    seconds: 30,
    instructions:
      'Slowly lower your chin toward your chest, then slowly tilt your head back to look toward the ceiling. Move within a pain-free range.',
  },
  {
    id: 'shoulder-rolls',
    category: 'Mobility',
    name: 'Shoulder rolls',
    seconds: 30,
    instructions:
      'Roll both shoulders up, back, and down in a slow circle to loosen the muscles that support your neck.',
  },
  {
    id: 'scapular-retraction',
    category: 'Strength',
    name: 'Shoulder blade squeeze',
    seconds: 30,
    instructions:
      'Squeeze your shoulder blades together as if holding a pencil between them. Hold 5 seconds, then release.',
  },
  {
    id: 'isometric-resistance',
    category: 'Strength',
    name: 'Isometric neck resistance',
    seconds: 40,
    instructions:
      'Press your forehead gently into your palm without letting your head move. Hold, release, then repeat pressing to the back and each side.',
  },
  {
    id: 'levator-stretch',
    category: 'Stretch',
    name: 'Levator scapulae stretch',
    seconds: 40,
    instructions:
      'Turn your head about 45 degrees, then tilt it down as if looking into your armpit. Hold gently to feel a stretch along the back of the neck.',
  },
]

const categories = [...new Set(exercises.map((e) => e.category))]

export default function Exercises() {
  const routine = exercises
  const [currentIndex, setCurrentIndex] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(routine[0].seconds)
  const [running, setRunning] = useState(false)
  const [finished, setFinished] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const currentIndexRef = useRef(currentIndex)
  const secondsLeftRef = useRef(secondsLeft)
  currentIndexRef.current = currentIndex
  secondsLeftRef.current = secondsLeft

  const currentExercise = routine[currentIndex]
  const nextExercise = routine[currentIndex + 1] ?? null
  const totalSeconds = useMemo(() => routine.reduce((sum, e) => sum + e.seconds, 0), [routine])
  const elapsedSeconds = useMemo(() => {
    const done = routine.slice(0, currentIndex).reduce((sum, e) => sum + e.seconds, 0)
    return done + (currentExercise.seconds - secondsLeft)
  }, [routine, currentIndex, currentExercise, secondsLeft])
  const progressPct = Math.min(100, Math.round((elapsedSeconds / totalSeconds) * 100))

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  function advance() {
    const idx = currentIndexRef.current
    if (idx < routine.length - 1) {
      const nextIdx = idx + 1
      setCurrentIndex(nextIdx)
      setSecondsLeft(routine[nextIdx].seconds)
    } else {
      stop()
      setFinished(true)
    }
  }

  function tick() {
    if (secondsLeftRef.current > 1) {
      setSecondsLeft(secondsLeftRef.current - 1)
    } else {
      advance()
    }
  }

  function start() {
    if (running) return
    setRunning(true)
    setFinished(false)
    timerRef.current = setInterval(tick, 1000)
  }

  function pause() {
    setRunning(false)
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = null
  }

  function stop() {
    pause()
  }

  function reset() {
    stop()
    setCurrentIndex(0)
    setSecondsLeft(routine[0].seconds)
    setFinished(false)
  }

  function skip() {
    advance()
  }

  const isAtStart = currentIndex === 0 && secondsLeft === currentExercise.seconds

  return (
    <section className="section">
      <div className="container">
        <span className="pill">Exercises</span>
        <h1>Cervical spondylosis exercises</h1>
        <p>
          Gentle, consistent neck mobility and strengthening exercises can reduce stiffness,
          improve range of motion, and take pressure off irritated joints and nerves. Move slowly
          and stay within a pain-free range &mdash; sharp pain, numbness, or tingling means stop.
        </p>

        <div className="disclaimer" style={{ margin: '16px 0 32px' }}>
          <p>
            These exercises complement medical treatment, not replace it. Talk to your doctor or
            a physical therapist before starting, especially if you have myelopathy symptoms,
            recent injury, or a fusion/instability diagnosis.
          </p>
        </div>

        <div className="card player-card">
          <div className="player-head">
            <h2>Guided routine</h2>
            <span className="player-total">
              ~{Math.round(totalSeconds / 60)} min · {routine.length} exercises
            </span>
          </div>

          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressPct}%` }} />
          </div>

          {!finished ? (
            <div className="player-body">
              <span className="pill" style={{ marginBottom: 10 }}>
                {currentExercise.category}
              </span>
              <h3>{currentExercise.name}</h3>
              <ExerciseAnimation id={currentExercise.id} />
              <p>{currentExercise.instructions}</p>
              <div className="timer">{secondsLeft}s</div>
              {nextExercise && <p className="up-next">Up next: {nextExercise.name}</p>}

              <div className="player-controls">
                {!running ? (
                  <button type="button" className="btn" onClick={start}>
                    {isAtStart ? 'Start routine' : 'Resume'}
                  </button>
                ) : (
                  <button type="button" className="btn secondary" onClick={pause}>
                    Pause
                  </button>
                )}
                <button type="button" className="btn secondary" onClick={skip}>
                  Skip
                </button>
                <button type="button" className="btn secondary" onClick={reset}>
                  Reset
                </button>
              </div>
            </div>
          ) : (
            <div className="player-body finished">
              <h3>Routine complete 🎉</h3>
              <p>Nice work. Consistency matters more than intensity &mdash; try to do this daily.</p>
              <button type="button" className="btn" onClick={reset}>
                Do it again
              </button>
            </div>
          )}
        </div>

        {categories.map((cat) => (
          <div key={cat} className="category-block">
            <h2>{cat}</h2>
            <div className="grid cols-2">
              {exercises
                .filter((e) => e.category === cat)
                .map((ex) => (
                  <article key={ex.id} className="card exercise-card">
                    <div className="exercise-head">
                      <h3>{ex.name}</h3>
                      <span className="duration">{ex.seconds}s</span>
                    </div>
                    <ExerciseAnimation id={ex.id} />
                    <p>{ex.instructions}</p>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
