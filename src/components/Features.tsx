const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center">
            <span className="material-icons feature-icon mr-4 text-3xl">spa</span>
            <p className="font-medium">Removes allergens</p>
          </div>
          <div className="flex items-center justify-center">
            <span className="material-icons feature-icon mr-4 text-3xl">coronavirus</span>
            <p className="font-medium">Destroys viruses & bacteria</p>
          </div>
          <div className="flex items-center justify-center">
            <span className="material-icons feature-icon mr-4 text-3xl">air</span>
            <p className="font-medium">Traps airborne particles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;