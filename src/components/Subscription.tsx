const Subscription = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Now available: <br /> The Breeze Co Monthly
          </h2>
          <p className="text-gray-600 mb-6">
            Clean air on your terms. Pay over time with 0% APR financing, 
            and get automatic filter refills with a subscription.
          </p>
          <a 
            className="btn-primary py-3 px-8 rounded-full text-lg font-semibold inline-block" 
            href="#"
          >
            Learn More
          </a>
        </div>
        <div>
          <img 
            alt="Woman relaxing in a clean living room" 
            className="rounded-lg shadow-lg w-full" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCac1QxN7emOUYnaU2toVxTD9-4kopfBkWGVCdeOLK_O_KR72MTz1foGW5PLHCiOqsdruAsbXObQZLMflEoig_AGeww-73e9uFOMzs8PNv2yxzKQQ_p6n91H-cU1vm1a-JQIusQmyjQ77M2uDtD6KmT7Z3BOUAjb_5GnieSDXc7y_FNIuJd2WYdIT-GBrZ0PK368F_wdoUOyE8_Y85EodZUuyVQgu518rQAFKXJ-WyRRExlGU_wk6cGhlacp5YaEC0acWeDpMPyDGPf"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscription;