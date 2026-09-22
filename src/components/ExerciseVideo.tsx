import chinTuck from '../assets/exercise-videos/chin-tuck.mp4'
import neckRotation from '../assets/exercise-videos/neck-rotation.mp4'
import lateralStretch from '../assets/exercise-videos/lateral-stretch.mp4'
import flexionExtension from '../assets/exercise-videos/flexion-extension.mp4'
import shoulderRolls from '../assets/exercise-videos/shoulder-rolls.mp4'
import scapularRetraction from '../assets/exercise-videos/scapular-retraction.mp4'
import isometricResistance from '../assets/exercise-videos/isometric-resistance.mp4'
import levatorStretch from '../assets/exercise-videos/levator-stretch.mp4'
import './ExerciseVideo.css'

const videos: Record<string, string> = {
  'chin-tuck': chinTuck,
  'neck-rotation': neckRotation,
  'lateral-stretch': lateralStretch,
  'flexion-extension': flexionExtension,
  'shoulder-rolls': shoulderRolls,
  'scapular-retraction': scapularRetraction,
  'isometric-resistance': isometricResistance,
  'levator-stretch': levatorStretch,
}

interface Props {
  id: string
}

export default function ExerciseVideo({ id }: Props) {
  const src = videos[id]
  if (!src) return null
  return (
    <div className="exercise-video">
      <video src={src} autoPlay loop muted playsInline preload="metadata" />
    </div>
  )
}
