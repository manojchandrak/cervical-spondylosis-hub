import './ExerciseAnimation.css'

interface Props {
  id: string
}

export default function ExerciseAnimation({ id }: Props) {
  return (
    <div className="anim-wrap">
      {id === 'chin-tuck' && (
        <svg viewBox="0 0 160 140" className="anim">
          <ellipse cx="80" cy="133" rx="50" ry="9" className="stage" />
          <path d="M14 140 Q20 90 56 86 Q102 84 126 108 L128 140 Z" className="torso" />
          <path d="M96 96 Q112 112 106 140 L88 140 Q92 114 84 96 Z" className="arm" />
          <g className="part chin-tuck-el" filter="url(#charShadow)">
            <rect x="62" y="52" width="26" height="38" rx="10" className="neck" />
            <circle cx="76" cy="42" r="27" className="head" />
            <path d="M50 30 Q58 10 80 12 Q99 15 101 34 Q90 20 72 21 Q57 22 51 35 Z" className="hair" />
            <ellipse cx="57" cy="47" rx="4.5" ry="6.5" className="ear" />
            <circle cx="91" cy="38" r="2.4" className="eye" />
            <ellipse cx="102" cy="43" rx="6" ry="4" className="nose" transform="rotate(20 102 43)" />
            <path d="M95 52 Q101 55 106 51" className="mouth" />
          </g>
        </svg>
      )}

      {id === 'neck-rotation' && (
        <svg viewBox="0 0 160 140" className="anim">
          <ellipse cx="80" cy="133" rx="50" ry="9" className="stage" />
          <path d="M20 140 Q30 96 80 94 Q130 96 140 140 Z" className="torso" />
          <path d="M28 100 Q16 116 22 140 L38 140 Q34 118 42 102 Z" className="arm" />
          <path d="M132 100 Q144 116 138 140 L122 140 Q126 118 118 102 Z" className="arm" />
          <rect x="66" y="82" width="28" height="26" rx="9" className="neck" />
          <g className="part rotation-el" filter="url(#charShadow)">
            <path d="M52 46 Q58 20 84 22 Q106 26 108 50 Q94 32 76 33 Q58 34 52 50 Z" className="hair" />
            <circle cx="80" cy="58" r="30" className="head" />
            <ellipse cx="54" cy="62" rx="5" ry="7" className="ear" />
            <ellipse cx="106" cy="62" rx="5" ry="7" className="ear" />
            <circle cx="68" cy="56" r="2.4" className="eye" />
            <circle cx="93" cy="56" r="2.4" className="eye" />
            <ellipse cx="112" cy="58" rx="7" ry="4.5" className="nose" />
            <path d="M70 70 Q80 75 90 70" className="mouth" />
          </g>
        </svg>
      )}

      {id === 'lateral-stretch' && (
        <svg viewBox="0 0 160 140" className="anim">
          <ellipse cx="80" cy="133" rx="50" ry="9" className="stage" />
          <path d="M18 140 Q26 100 80 98 Q134 100 142 140 Z" className="torso" />
          <path d="M26 104 Q14 120 20 140 L36 140 Q32 122 40 106 Z" className="arm" />
          <path d="M134 104 Q146 120 140 140 L124 140 Q128 122 120 106 Z" className="arm" />
          <g className="part lateral-el" filter="url(#charShadow)">
            <rect x="66" y="66" width="26" height="34" rx="10" className="neck" />
            <path d="M52 32 Q58 8 82 10 Q102 14 103 34 Q90 18 74 19 Q58 20 52 34 Z" className="hair" />
            <circle cx="79" cy="48" r="27" className="head" />
            <ellipse cx="55" cy="52" rx="4.5" ry="6.5" className="ear" />
            <circle cx="68" cy="46" r="2.2" className="eye" />
            <ellipse cx="99" cy="47" rx="6" ry="4" className="nose" transform="rotate(15 99 47)" />
            <path d="M67 58 Q76 62 84 58" className="mouth" />
          </g>
        </svg>
      )}

      {id === 'flexion-extension' && (
        <svg viewBox="0 0 160 140" className="anim">
          <ellipse cx="80" cy="133" rx="50" ry="9" className="stage" />
          <path d="M14 140 Q20 90 56 86 Q102 84 126 108 L128 140 Z" className="torso" />
          <path d="M96 96 Q112 112 106 140 L88 140 Q92 114 84 96 Z" className="arm" />
          <g className="part flex-ext-el" filter="url(#charShadow)">
            <rect x="60" y="56" width="28" height="36" rx="10" className="neck" />
            <path d="M48 34 Q56 12 78 14 Q97 17 99 36 Q88 22 70 23 Q55 24 49 37 Z" className="hair" />
            <circle cx="75" cy="44" r="27" className="head" />
            <ellipse cx="56" cy="49" rx="4.5" ry="6.5" className="ear" />
            <circle cx="90" cy="40" r="2.4" className="eye" />
            <ellipse cx="101" cy="45" rx="6" ry="4" className="nose" transform="rotate(20 101 45)" />
            <path d="M94 54 Q100 57 105 53" className="mouth" />
          </g>
        </svg>
      )}

      {id === 'shoulder-rolls' && (
        <svg viewBox="0 0 160 140" className="anim">
          <ellipse cx="80" cy="133" rx="50" ry="9" className="stage" />
          <path d="M30 140 Q40 108 80 106 Q120 108 130 140 Z" className="torso" />
          <rect x="66" y="84" width="28" height="26" rx="9" className="neck" />
          <path d="M52 52 Q58 26 82 28 Q104 32 105 54 Q92 36 76 37 Q58 38 52 54 Z" className="hair" />
          <circle cx="80" cy="58" r="28" className="head" />
          <ellipse cx="55" cy="60" rx="4.5" ry="6.5" className="ear" />
          <ellipse cx="105" cy="60" rx="4.5" ry="6.5" className="ear" />
          <circle cx="70" cy="56" r="2.2" className="eye" />
          <circle cx="90" cy="56" r="2.2" className="eye" />
          <path d="M72 68 Q80 72 88 68" className="mouth" />
          <circle className="part shoulder-left-el" cx="42" cy="106" r="12" filter="url(#charShadow)" />
          <circle className="part shoulder-right-el" cx="118" cy="106" r="12" filter="url(#charShadow)" />
        </svg>
      )}

      {id === 'scapular-retraction' && (
        <svg viewBox="0 0 160 140" className="anim">
          <ellipse cx="80" cy="133" rx="50" ry="9" className="stage" />
          <path d="M26 140 Q34 100 80 98 Q126 100 134 140 Z" className="torso" />
          <path d="M32 104 Q20 118 26 140 L40 140 Q36 122 44 106 Z" className="arm" />
          <path d="M128 104 Q140 118 134 140 L120 140 Q124 122 116 106 Z" className="arm" />
          <rect x="66" y="80" width="28" height="24" rx="9" className="neck" />
          <path d="M53 50 Q59 24 82 26 Q103 30 104 51 Q91 34 76 35 Q59 36 53 51 Z" className="hair" />
          <circle cx="80" cy="56" r="27" className="head" />
          <ellipse cx="55" cy="58" rx="4.5" ry="6.5" className="ear" />
          <ellipse cx="105" cy="58" rx="4.5" ry="6.5" className="ear" />
          <circle cx="70" cy="54" r="2.2" className="eye" />
          <circle cx="90" cy="54" r="2.2" className="eye" />
          <path d="M72 65 Q80 69 88 65" className="mouth" />
          <path className="part blade-left-el" d="M58 96 Q48 108 58 126 Q66 112 62 98 Z" filter="url(#charShadow)" />
          <path className="part blade-right-el" d="M102 96 Q112 108 102 126 Q94 112 98 98 Z" filter="url(#charShadow)" />
        </svg>
      )}

      {id === 'isometric-resistance' && (
        <svg viewBox="0 0 160 140" className="anim">
          <ellipse cx="80" cy="133" rx="50" ry="9" className="stage" />
          <path d="M14 140 Q20 90 56 86 Q102 84 126 108 L128 140 Z" className="torso" />
          <path d="M96 96 Q112 112 106 140 L88 140 Q92 114 84 96 Z" className="arm" />
          <rect x="60" y="56" width="28" height="36" rx="10" className="neck" />
          <path d="M48 34 Q56 12 78 14 Q97 17 99 36 Q88 22 70 23 Q55 24 49 37 Z" className="hair" />
          <circle cx="76" cy="44" r="27" className="head" />
          <ellipse cx="57" cy="49" rx="4.5" ry="6.5" className="ear" />
          <circle cx="91" cy="40" r="2.4" className="eye" />
          <ellipse cx="102" cy="45" rx="6" ry="4" className="nose" transform="rotate(20 102 45)" />
          <path d="M95 53 Q101 56 106 52" className="mouth" />
          <g className="part hand-el" filter="url(#charShadow)">
            <path
              d="M118 34 Q136 30 140 44 Q142 56 128 58 Q112 58 108 46 Q108 38 118 34 Z"
              className="hand"
            />
          </g>
        </svg>
      )}

      {id === 'levator-stretch' && (
        <svg viewBox="0 0 160 140" className="anim">
          <ellipse cx="80" cy="133" rx="50" ry="9" className="stage" />
          <path d="M18 140 Q26 100 80 98 Q134 100 142 140 Z" className="torso" />
          <path d="M26 104 Q14 120 20 140 L36 140 Q32 122 40 106 Z" className="arm" />
          <path d="M134 104 Q146 120 140 140 L124 140 Q128 122 120 106 Z" className="arm" />
          <g className="part levator-el" filter="url(#charShadow)">
            <rect x="60" y="62" width="26" height="36" rx="10" className="neck" />
            <path d="M46 40 Q54 16 76 18 Q96 22 97 42 Q86 26 68 27 Q53 28 47 43 Z" className="hair" />
            <circle cx="72" cy="46" r="26" className="head" />
            <ellipse cx="53" cy="51" rx="4.5" ry="6.5" className="ear" />
            <circle cx="86" cy="42" r="2.2" className="eye" />
            <ellipse cx="95" cy="53" rx="6" ry="4" className="nose" transform="rotate(45 95 53)" />
            <path d="M89 56 Q94 60 99 55" className="mouth" />
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
