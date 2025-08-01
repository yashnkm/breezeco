const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press']
    },
    {
      title: 'Air Purifiers',
      links: ['Air Pro', 'Air Mini+', 'Shop All']
    },
    {
      title: 'Technology',
      links: ['PECO', 'Our App']
    },
    {
      title: 'Business',
      links: ['For Business', 'For Enterprise']
    },
    {
      title: 'Service & Support',
      links: ['Help Center', 'Contact Us']
    }
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold">Let's stay connected.</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      className="hover:text-green-400 transition-colors" 
                      href="#"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>© 2024 The Breeze Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;