import './ExerciseAnimation.css'

interface Props {
  id: string
}

export default function ExerciseAnimation({ id }: Props) {
  return (
    <div className="anim-wrap">
      {id === 'chin-tuck' && (
        <svg viewBox="0 0 160 250" className="anim">
          <ellipse cx="72" cy="244" rx="58" ry="10" className="stage" />
          <path d="M45 176 L45 230 Q45 236 53 236 L70 236 Q66 205 66 180 Z" className="leg back" />
          <ellipse cx="53" cy="234" rx="11" ry="6" className="shoe back" />
          <path d="M66 180 L66 233 Q66 238 76 238 L88 238 Q84 208 84 180 Z" className="leg" />
          <ellipse cx="88" cy="238" rx="13" ry="6" className="shoe" />
          <path d="M12 180 L16 130 Q20 95 56 86 Q102 84 126 108 Q131 135 126 180 Q69 194 12 180 Z" className="torso" />
          <path d="M98 96 Q116 108 112 145 Q110 165 100 172 Q90 166 92 148 Q86 118 84 96 Z" className="arm" />
          <circle cx="100" cy="174" r="8" className="limb-hand" />
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
        <svg viewBox="0 0 160 250" className="anim">
          <ellipse cx="80" cy="242" rx="58" ry="10" className="stage" />
          <rect x="58" y="178" width="17" height="54" rx="8" className="leg" />
          <ellipse cx="66" cy="236" rx="12" ry="6" className="shoe" />
          <rect x="85" y="178" width="17" height="54" rx="8" className="leg" />
          <ellipse cx="94" cy="236" rx="12" ry="6" className="shoe" />
          <path d="M20 176 Q16 130 30 100 Q80 92 130 100 Q144 130 140 176 Q80 188 20 176 Z" className="torso" />
          <path d="M28 104 Q10 130 18 170 Q26 178 34 172 Q30 140 40 108 Z" className="arm" />
          <circle cx="24" cy="174" r="8" className="limb-hand" />
          <path d="M132 104 Q150 130 142 170 Q134 178 126 172 Q130 140 120 108 Z" className="arm" />
          <circle cx="136" cy="174" r="8" className="limb-hand" />
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
        <svg viewBox="0 0 160 250" className="anim">
          <ellipse cx="80" cy="242" rx="58" ry="10" className="stage" />
          <rect x="58" y="178" width="17" height="54" rx="8" className="leg" />
          <ellipse cx="66" cy="236" rx="12" ry="6" className="shoe" />
          <rect x="85" y="178" width="17" height="54" rx="8" className="leg" />
          <ellipse cx="94" cy="236" rx="12" ry="6" className="shoe" />
          <path d="M18 178 Q14 132 26 100 Q80 92 134 100 Q146 132 142 178 Q80 190 18 178 Z" className="torso" />
          <path d="M26 104 Q10 130 18 170 Q26 178 34 172 Q30 140 38 106 Z" className="arm" />
          <circle cx="24" cy="174" r="8" className="limb-hand" />
          <path d="M134 104 Q150 130 142 170 Q134 178 126 172 Q130 140 122 106 Z" className="arm" />
          <circle cx="136" cy="174" r="8" className="limb-hand" />
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
        <svg viewBox="0 0 160 250" className="anim">
          <ellipse cx="72" cy="244" rx="58" ry="10" className="stage" />
          <path d="M45 176 L45 230 Q45 236 53 236 L70 236 Q66 205 66 180 Z" className="leg back" />
          <ellipse cx="53" cy="234" rx="11" ry="6" className="shoe back" />
          <path d="M66 180 L66 233 Q66 238 76 238 L88 238 Q84 208 84 180 Z" className="leg" />
          <ellipse cx="88" cy="238" rx="13" ry="6" className="shoe" />
          <path d="M12 180 L16 130 Q20 95 56 86 Q102 84 126 108 Q131 135 126 180 Q69 194 12 180 Z" className="torso" />
          <path d="M98 96 Q116 108 112 145 Q110 165 100 172 Q90 166 92 148 Q86 118 84 96 Z" className="arm" />
          <circle cx="100" cy="174" r="8" className="limb-hand" />
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
        <svg viewBox="0 0 160 250" className="anim">
          <ellipse cx="80" cy="244" rx="58" ry="10" className="stage" />
          <rect x="58" y="180" width="17" height="54" rx="8" className="leg" />
          <ellipse cx="66" cy="238" rx="12" ry="6" className="shoe" />
          <rect x="85" y="180" width="17" height="54" rx="8" className="leg" />
          <ellipse cx="94" cy="238" rx="12" ry="6" className="shoe" />
          <path d="M24 178 Q20 132 32 106 Q80 98 128 106 Q140 132 136 178 Q80 190 24 178 Z" className="torso" />
          <path d="M30 110 Q14 134 20 172 Q28 180 36 174 Q32 144 42 112 Z" className="arm" />
          <circle cx="26" cy="176" r="8" className="limb-hand" />
          <path d="M130 110 Q146 134 140 172 Q132 180 124 174 Q128 144 118 112 Z" className="arm" />
          <circle cx="134" cy="176" r="8" className="limb-hand" />
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
        <svg viewBox="0 0 160 250" className="anim">
          <ellipse cx="80" cy="242" rx="58" ry="10" className="stage" />
          <rect x="58" y="178" width="17" height="54" rx="8" className="leg" />
          <ellipse cx="66" cy="236" rx="12" ry="6" className="shoe" />
          <rect x="85" y="178" width="17" height="54" rx="8" className="leg" />
          <ellipse cx="94" cy="236" rx="12" ry="6" className="shoe" />
          <path d="M22 176 Q18 130 30 100 Q80 92 130 100 Q142 130 138 176 Q80 188 22 176 Z" className="torso" />
          <path d="M30 104 Q12 130 20 170 Q28 178 36 172 Q32 140 42 106 Z" className="arm" />
          <circle cx="26" cy="174" r="8" className="limb-hand" />
          <path d="M130 104 Q148 130 140 170 Q132 178 124 172 Q128 140 118 106 Z" className="arm" />
          <circle cx="134" cy="174" r="8" className="limb-hand" />
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
        <svg viewBox="0 0 160 250" className="anim">
          <ellipse cx="72" cy="244" rx="58" ry="10" className="stage" />
          <path d="M45 176 L45 230 Q45 236 53 236 L70 236 Q66 205 66 180 Z" className="leg back" />
          <ellipse cx="53" cy="234" rx="11" ry="6" className="shoe back" />
          <path d="M66 180 L66 233 Q66 238 76 238 L88 238 Q84 208 84 180 Z" className="leg" />
          <ellipse cx="88" cy="238" rx="13" ry="6" className="shoe" />
          <path d="M12 180 L16 130 Q20 95 56 86 Q102 84 126 108 Q131 135 126 180 Q69 194 12 180 Z" className="torso" />
          <path d="M98 96 Q116 108 112 145 Q110 165 100 172 Q90 166 92 148 Q86 118 84 96 Z" className="arm" />
          <circle cx="100" cy="174" r="8" className="limb-hand" />
          <rect x="60" y="56" width="28" height="36" rx="10" className="neck" />
          <path d="M48 34 Q56 12 78 14 Q97 17 99 36 Q88 22 70 23 Q55 24 49 37 Z" className="hair" />
          <circle cx="76" cy="44" r="27" className="head" />
          <ellipse cx="57" cy="49" rx="4.5" ry="6.5" className="ear" />
          <circle cx="91" cy="40" r="2.4" className="eye" />
          <ellipse cx="102" cy="45" rx="6" ry="4" className="nose" transform="rotate(20 102 45)" />
          <path d="M95 53 Q101 56 106 52" className="mouth" />
          <g className="part hand-el" filter="url(#charShadow)">
            <path d="M92 98 Q112 92 120 68 Q126 52 121 41 Q112 46 106 62 Q98 80 92 98 Z" className="arm" />
            <path
              d="M118 34 Q136 30 140 44 Q142 56 128 58 Q112 58 108 46 Q108 38 118 34 Z"
              className="hand"
            />
          </g>
        </svg>
      )}

      {id === 'levator-stretch' && (
        <svg viewBox="0 0 160 250" className="anim">
          <ellipse cx="80" cy="242" rx="58" ry="10" className="stage" />
          <rect x="58" y="178" width="17" height="54" rx="8" className="leg" />
          <ellipse cx="66" cy="236" rx="12" ry="6" className="shoe" />
          <rect x="85" y="178" width="17" height="54" rx="8" className="leg" />
          <ellipse cx="94" cy="236" rx="12" ry="6" className="shoe" />
          <path d="M18 178 Q14 132 26 100 Q80 92 134 100 Q146 132 142 178 Q80 190 18 178 Z" className="torso" />
          <path d="M26 104 Q10 130 18 170 Q26 178 34 172 Q30 140 38 106 Z" className="arm" />
          <circle cx="24" cy="174" r="8" className="limb-hand" />
          <path d="M134 104 Q150 130 142 170 Q134 178 126 172 Q130 140 122 106 Z" className="arm" />
          <circle cx="136" cy="174" r="8" className="limb-hand" />
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
        <svg viewBox="0 0 160 250" className="anim">
          <circle cx="80" cy="70" r="30" className="head" />
        </svg>
      )}
    </div>
  )
}
