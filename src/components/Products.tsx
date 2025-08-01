import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="card">
            <img 
              alt="Air Pro purifier in a modern living room" 
              className="w-full h-80 object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEsW7J8z-tq6BmW4N34fZb2u6WHWkqUSNpd_PgZ_nbTHtY0UdJXU74svucZhmmALEOgeDLWb0LaN6RIT3xZd0xFEv6e8dG0ALZ4PVDNxosEDc7q1rakwTq1X_nD_4UdIpUOqTJUoJPhawYUeNN31AHEq6o5gZnn5UtNgVI2yxoladNpnVPHIOTkOJifFktLcgWZ_fQuV-FOJX_BC4SPVGpuGaClkgor93EdDdbjwrBL0YI1dgYXvb1DQMO3_BBgmkou2L_babbDiJI"
            />
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Air Pro</h3>
              <p className="text-gray-600 mb-4">For large rooms up to 1000 sq. ft.</p>
              <Link 
                className="btn-primary py-2 px-6 rounded-full font-semibold inline-block" 
                to="/shop"
              >
                Shop Air Pro
              </Link>
            </div>
          </div>
          
          <div className="card">
            <img 
              alt="Air Mini+ purifier on a shelf" 
              className="w-full h-80 object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvBCvcuhDRFLet9itZOwYoJsz6ECmKmK6_UHOKK718vw6LHvDPuZcHpva90hUkZ0VuWzmZWpXSB7gDN75KuFzgz3wHDSBmXZI0J6COPd48YpLv-aBkzhA1IncYZrkEUway_poRSWzUNYcHsfSBUFnIPX8JRZ-tIApyFI4iJbaisza8NLmQppunmA-_l70Ivlw4YsZzKtcJcCtl_I4MzctRq0FAJJhNN4kv9-t5TEUmsHGaV2Gz8lhJMuwKhDAF-34gDwJc83BKRIkp"
            />
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Air Mini+</h3>
              <p className="text-gray-600 mb-4">For small rooms up to 250 sq. ft., plus smoke detection.</p>
              <Link 
                className="btn-primary py-2 px-6 rounded-full font-semibold inline-block" 
                to="/shop"
              >
                Shop Air Mini+
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;