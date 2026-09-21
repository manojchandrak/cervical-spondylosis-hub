import './Diet.css'

const eatMore = [
  {
    title: 'Fatty fish',
    desc: 'Salmon, mackerel, sardines — rich in omega-3s, which may help ease joint inflammation.',
  },
  {
    title: 'Leafy greens',
    desc: 'Spinach, kale, and broccoli provide vitamin K and calcium that support bone and disc health.',
  },
  {
    title: 'Berries & colorful fruit',
    desc: 'High in antioxidants that help counter oxidative stress linked to inflammation.',
  },
  {
    title: 'Nuts & seeds',
    desc: 'Walnuts, flaxseed, and chia seeds add plant-based omega-3s and healthy fats.',
  },
  {
    title: 'Turmeric & ginger',
    desc: 'Contain curcumin and gingerol, compounds studied for mild anti-inflammatory effects.',
  },
  {
    title: 'Whole grains',
    desc: 'Oats, quinoa, and brown rice, in place of refined grains, are linked to lower inflammatory markers.',
  },
]

const limitFoods = [
  {
    title: 'Refined sugar',
    desc: 'Sugary drinks and sweets can promote inflammatory pathways when eaten in excess.',
  },
  {
    title: 'Processed & red meat',
    desc: 'Frequent intake is associated with higher inflammatory markers in several studies.',
  },
  {
    title: 'Fried & fast food',
    desc: 'High in trans fats and omega-6s, which can tilt the body toward inflammation.',
  },
  {
    title: 'Excess alcohol',
    desc: 'Can worsen sleep and interact with pain medications — keep intake moderate.',
  },
]

const nutrients = [
  { name: 'Calcium', why: 'Bone strength', sources: 'Dairy, fortified plant milk, leafy greens, almonds' },
  { name: 'Vitamin D', why: 'Calcium absorption, bone health', sources: 'Sunlight, fatty fish, fortified foods' },
  { name: 'Magnesium', why: 'Muscle relaxation, nerve function', sources: 'Nuts, seeds, whole grains, dark chocolate' },
  { name: 'Protein', why: 'Muscle support around the spine', sources: 'Fish, poultry, legumes, eggs, tofu' },
]

export default function Diet() {
  return (
    <section className="section">
      <div className="container">
        <span className="pill warm">Diet</span>
        <h1>Eating to support your neck</h1>
        <p>
          No diet cures cervical spondylosis, but an anti-inflammatory eating pattern &mdash;
          similar to a Mediterranean-style diet &mdash; may help reduce overall inflammation,
          support bone and disc health, and manage weight, which lowers mechanical load on the
          spine.
        </p>

        <div className="disclaimer" style={{ margin: '16px 0 32px' }}>
          <p>
            Talk to your doctor or a registered dietitian before making major diet changes or
            starting supplements, especially if you take blood thinners, diabetes medication, or
            have kidney or liver conditions.
          </p>
        </div>

        <h2>Foods that may help</h2>
        <div className="grid cols-3">
          {eatMore.map((f) => (
            <article key={f.title} className="card food-card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>

        <h2 style={{ marginTop: 40 }}>Foods to limit</h2>
        <div className="grid cols-2">
          {limitFoods.map((f) => (
            <article key={f.title} className="card food-card limit">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>

        <h2 style={{ marginTop: 40 }}>Key nutrients for spine health</h2>
        <div className="card table-card">
          <table className="nutrient-table">
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Why it matters</th>
                <th>Good sources</th>
              </tr>
            </thead>
            <tbody>
              {nutrients.map((n) => (
                <tr key={n.name}>
                  <td className="nutrient-name">{n.name}</td>
                  <td>{n.why}</td>
                  <td>{n.sources}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card" style={{ marginTop: 32 }}>
          <h3>Hydration matters too</h3>
          <p>
            Spinal discs are largely water. Staying well hydrated through the day supports disc
            height and cushioning, and can help reduce stiffness alongside your exercise routine.
          </p>
        </div>
      </div>
    </section>
  )
}
