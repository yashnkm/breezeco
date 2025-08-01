const AirQualityChallenges = () => {
  const challenges = [
    { icon: 'local_fire_department', title: 'Wildfire smoke' },
    { icon: 'grass', title: 'Allergies' },
    { icon: 'water_drop', title: 'Mold' },
    { icon: 'pets', title: 'Pet dander' }
  ];

  return (
    <section id="challenges" className="py-20 bg-cool-gray">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Learn more about our home's <br /> air quality challenges.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-ivory-white rounded-full shadow-md flex items-center justify-center mb-4">
                <span className="material-icons text-4xl text-steel-blue">
                  {challenge.icon}
                </span>
              </div>
              <h4 className="font-semibold text-gray-800">{challenge.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirQualityChallenges;