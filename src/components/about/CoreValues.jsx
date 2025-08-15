const values = [
  {
    icon: "planet-outline",
    title: "Exploration First",
    color: "text-electric-aqua",
    delay: 0,
  },
  {
    icon: "heart-outline",
    title: "AI with Empathy",
    color: "text-electric-aqua",
    delay: 100,
  },
  {
    icon: "globe-outline",
    title: "Borderless Access",
    color: "text-electric-aqua",
    delay: 200,
  },
  {
    icon: "ribbon-outline",
    title: "True Mastery",
    color: "text-neon-lilac",
    delay: 300,
  },
  {
    icon: "sync-circle-outline",
    title: "Real-Time Reflection",
    color: "text-neon-lilac",
    delay: 400,
  },
];

const CoreValues = () => {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="font-poppins text-3xl lg:text-4xl font-bold text-cosmic-indigo"
            data-aos="fade-up"
          >
            The Principles That Guide Us
          </h2>
          <p
            className="mt-4 text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            These values are the foundation of our technology and the core of
            our commitment to every learner.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {values.map((value) => (
            <div
              key={value.title}
              data-aos="zoom-in-up"
              data-aos-delay={value.delay}
            >
              <div className="bg-white p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center shadow-lg">
                <ion-icon
                  name={value.icon}
                  className={`text-5xl ${value.color}`}
                ></ion-icon>
              </div>
              <h3 className="mt-5 font-poppins text-lg font-semibold text-cosmic-indigo">
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
