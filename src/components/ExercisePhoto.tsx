import chinTuck from '../assets/exercises/chin-tuck.jpg'
import neckRotation from '../assets/exercises/neck-rotation.jpg'
import lateralStretch from '../assets/exercises/lateral-stretch.jpg'
import flexionExtension from '../assets/exercises/flexion-extension.jpg'
import shoulderRolls from '../assets/exercises/shoulder-rolls.jpg'
import scapularRetraction from '../assets/exercises/scapular-retraction.jpg'
import isometricResistance from '../assets/exercises/isometric-resistance.jpg'
import levatorStretch from '../assets/exercises/levator-stretch.jpg'
import './ExercisePhoto.css'

const photos: Record<string, { src: string; alt: string }> = {
  'chin-tuck': { src: chinTuck, alt: 'Woman gently drawing her chin back with her hand near her jaw' },
  'neck-rotation': { src: neckRotation, alt: 'Person stretching and turning the neck to the side' },
  'lateral-stretch': { src: lateralStretch, alt: 'Woman tilting her ear toward her shoulder in a seated neck stretch' },
  'flexion-extension': { src: flexionExtension, alt: 'Woman tilting her head back in a neck extension stretch' },
  'shoulder-rolls': { src: shoulderRolls, alt: 'Woman stretching her arms and shoulders' },
  'scapular-retraction': { src: scapularRetraction, alt: "Close-up of a person's upper back and shoulder blades" },
  'isometric-resistance': { src: isometricResistance, alt: "A physiotherapist supporting a patient's head during a neck exercise" },
  'levator-stretch': { src: levatorStretch, alt: 'Woman stretching her neck to relieve tension' },
}

interface Props {
  id: string
}

export default function ExercisePhoto({ id }: Props) {
  const photo = photos[id]
  if (!photo) return null
  return (
    <div className="exercise-photo">
      <img src={photo.src} alt={photo.alt} loading="lazy" />
    </div>
  )
}
