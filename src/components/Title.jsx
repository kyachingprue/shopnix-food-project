export const Title = ({ sub, children, light }) => (
  <div className="mb-8">
    <p className="font-script text-2xl text-gold">{sub}</p>

    <h2
      className={`font-serif text-3xl md:text-4xl ${light ? 'text-white' : ''}`}
    >
      {children}
    </h2>
  </div>
)
