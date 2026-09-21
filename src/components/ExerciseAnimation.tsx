import './ExerciseAnimation.css'

interface Props {
  id: string
}

export default function ExerciseAnimation({ id }: Props) {
  return (
    <div className="anim-wrap">
      {id === 'chin-tuck' && (
        <svg viewBox="0 0 160 140" className="anim">
          <path d="M18 140 Q24 92 58 88 Q100 86 122 108 L124 140 Z" className="torso" />
          <g className="part chin-tuck-el">
            <rect x="62" y="52" width="26" height="38" rx="9" className="neck" />
            <circle cx="76" cy="42" r="27" className="head" />
            <path d="M100 40 L112 44 L100 50 Z" className="nose" />
          </g>
        </svg>
      )}

      {id === 'neck-rotation' && (
        <svg viewBox="0 0 160 140" className="anim">
          <path d="M20 140 Q30 96 80 94 Q130 96 140 140 Z" className="torso" />
          <rect x="66" y="82" width="28" height="26" rx="8" className="neck" />
          <g className="part rotation-el">
            <circle cx="80" cy="58" r="30" className="head" />
            <path d="M107 58 L120 52 L120 64 Z" className="nose" />
          </g>
        </svg>
      )}

      {id === 'lateral-stretch' && (
        <svg viewBox="0 0 160 140" className="anim">
          <path d="M18 140 Q26 100 80 98 Q134 100 142 140 Z" className="torso" />
          <g className="part lateral-el">
            <rect x="66" y="66" width="26" height="34" rx="9" className="neck" />
            <circle cx="79" cy="48" r="27" className="head" />
            <path d="M103 46 L115 50 L103 56 Z" className="nose" />
          </g>
        </svg>
      )}

      {id === 'flexion-extension' && (
        <svg viewBox="0 0 160 140" className="anim">
          <path d="M18 140 Q24 96 58 92 Q100 90 122 112 L124 140 Z" className="torso" />
          <g className="part flex-ext-el">
            <rect x="60" y="56" width="28" height="36" rx="9" className="neck" />
            <circle cx="75" cy="44" r="27" className="head" />
            <path d="M99 42 L111 46 L99 52 Z" className="nose" />
          </g>
        </svg>
      )}

      {id === 'shoulder-rolls' && (
        <svg viewBox="0 0 160 140" className="anim">
          <path d="M30 140 Q40 108 80 106 Q120 108 130 140 Z" className="torso" />
          <rect x="66" y="84" width="28" height="26" rx="8" className="neck" />
          <circle cx="80" cy="58" r="28" className="head" />
          <circle className="part shoulder-left-el" cx="42" cy="106" r="11" />
          <circle className="part shoulder-right-el" cx="118" cy="106" r="11" />
        </svg>
      )}

      {id === 'scapular-retraction' && (
        <svg viewBox="0 0 160 140" className="anim">
          <path d="M26 140 Q34 100 80 98 Q126 100 134 140 Z" className="torso" />
          <rect x="66" y="80" width="28" height="24" rx="8" className="neck" />
          <circle cx="80" cy="56" r="27" className="head" />
          <path className="part blade-left-el" d="M58 96 Q48 108 58 126 Q66 112 62 98 Z" />
          <path className="part blade-right-el" d="M102 96 Q112 108 102 126 Q94 112 98 98 Z" />
        </svg>
      )}

      {id === 'isometric-resistance' && (
        <svg viewBox="0 0 160 140" className="anim">
          <path d="M18 140 Q24 96 58 92 Q100 90 122 112 L124 140 Z" className="torso" />
          <rect x="60" y="56" width="28" height="36" rx="9" className="neck" />
          <circle cx="76" cy="44" r="27" className="head" />
          <path d="M100 42 L112 46 L100 52 Z" className="nose" />
          <g className="part hand-el">
            <path d="M118 34 Q136 30 140 44 Q142 56 128 58 Q112 58 108 46 Q108 38 118 34 Z" className="hand" />
          </g>
        </svg>
      )}

      {id === 'levator-stretch' && (
        <svg viewBox="0 0 160 140" className="anim">
          <path d="M18 140 Q26 100 80 98 Q134 100 142 140 Z" className="torso" />
          <g className="part levator-el">
            <rect x="60" y="62" width="26" height="36" rx="9" className="neck" />
            <circle cx="72" cy="46" r="26" className="head" />
            <path d="M94 50 L106 58 L92 60 Z" className="nose" />
          </g>
        </svg>
      )}

      {!id && (
        <svg viewBox="0 0 160 140" className="anim">
          <circle cx="80" cy="70" r="30" className="head" />
        </svg>
      )}
    </div>
  )
}
