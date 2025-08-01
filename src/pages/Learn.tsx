import { useState } from 'react';

// Article interface
interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: number;
  date: string;
  image: string;
  tags: string[];
}

// Sample articles data
const articles: Article[] = [
  {
    id: '1',
    title: 'Understanding Indoor Air Quality: What You Need to Know',
    excerpt: 'Learn about the invisible pollutants in your home and how they affect your health and wellbeing.',
    content: `Indoor air quality (IAQ) refers to the air quality within and around buildings and structures, especially as it relates to the health and comfort of building occupants. Understanding IAQ is crucial because we spend approximately 90% of our time indoors.

    **Common Indoor Air Pollutants:**
    
    1. **Particulate Matter (PM2.5 and PM10)** - Tiny particles from dust, smoke, and other sources
    2. **Volatile Organic Compounds (VOCs)** - Chemicals from cleaning products, furniture, and building materials
    3. **Biological Contaminants** - Mold, bacteria, viruses, and allergens
    4. **Carbon Monoxide** - From gas appliances and vehicle exhaust
    5. **Radon** - Naturally occurring radioactive gas from soil
    
    **Health Effects:**
    Poor indoor air quality can cause both immediate and long-term health effects. Short-term effects include eye irritation, headaches, dizziness, and fatigue. Long-term exposure can lead to respiratory diseases, heart disease, and even cancer.
    
    **Improving Your Indoor Air Quality:**
    - Use high-quality air purifiers with HEPA filtration
    - Maintain proper ventilation
    - Control humidity levels (30-50%)
    - Use natural cleaning products
    - Regularly replace HVAC filters
    - Add indoor plants that naturally purify air`,
    category: 'Air Quality Basics',
    readTime: 5,
    date: '2024-01-20',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Indoor Air', 'Health', 'Pollutants', 'Basics']
  },
  {
    id: '2',
    title: 'PECO vs HEPA: Which Air Purification Technology is Better?',
    excerpt: 'Compare PECO and HEPA technologies to understand which air purification method works best for your needs.',
    content: `When choosing an air purifier, understanding the difference between PECO and HEPA technologies is crucial for making an informed decision.

    **HEPA (High-Efficiency Particulate Air) Technology:**
    
    HEPA filters work by physically trapping particles as air flows through a dense mat of fibers. They're highly effective at capturing:
    - Particles 0.3 microns and larger
    - Dust, pollen, and pet dander
    - Some bacteria and viruses
    
    **Limitations of HEPA:**
    - Cannot destroy pollutants, only traps them
    - Ineffective against gases and odors
    - Requires frequent filter replacements
    - Can become breeding ground for bacteria if not maintained
    
    **PECO (Photo Electrochemical Oxidation) Technology:**
    
    PECO technology goes beyond trapping - it actually destroys pollutants at the molecular level using light-activated catalysis.
    
    **Advantages of PECO:**
    - Destroys pollutants 1000x smaller than what HEPA can trap
    - Effective against VOCs, bacteria, viruses, and mold
    - Breaks down pollutants into harmless substances
    - Longer-lasting filters
    - No risk of pollutant re-release
    
    **The Verdict:**
    While HEPA filters are effective for larger particles, PECO technology offers comprehensive air purification by addressing both particles and molecular pollutants. For the most complete air cleaning solution, PECO represents the next generation of air purification technology.`,
    category: 'Technology',
    readTime: 7,
    date: '2024-01-18',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['PECO', 'HEPA', 'Technology', 'Comparison']
  },
  {
    id: '3',
    title: 'Seasonal Allergies: How Air Purifiers Can Provide Relief',
    excerpt: 'Discover how the right air purifier can help reduce allergy symptoms and improve your quality of life.',
    content: `Seasonal allergies affect millions of people worldwide, causing symptoms like sneezing, runny nose, watery eyes, and fatigue. While you can't control outdoor pollen levels, you can significantly improve your indoor environment.

    **Common Seasonal Allergens:**
    
    **Spring:**
    - Tree pollen (oak, birch, cedar)
    - Early grass pollen
    
    **Summer:**
    - Grass pollen
    - Weed pollen
    - Mold spores
    
    **Fall:**
    - Ragweed pollen
    - Mold spores from fallen leaves
    - Dust mites (peak season)
    
    **How Air Purifiers Help:**
    
    1. **Particle Removal:** High-quality air purifiers can capture pollen particles that enter your home
    2. **Continuous Cleaning:** They work 24/7 to maintain clean air, even when windows and doors are opened
    3. **Whole-Home Protection:** Strategic placement can clean air throughout your living space
    
    **Choosing the Right Air Purifier for Allergies:**
    
    - **CADR Rating:** Look for high Clean Air Delivery Rate for pollen
    - **Room Size:** Ensure the purifier is rated for your room size
    - **Filter Type:** HEPA or PECO technology for particle removal
    - **Additional Features:** Real-time air quality monitoring helps track improvement
    
    **Additional Tips:**
    - Keep windows closed during high pollen days
    - Shower and change clothes after being outdoors
    - Use air conditioning with recirculate mode
    - Wash bedding weekly in hot water
    - Consider running the air purifier on high during peak pollen seasons`,
    category: 'Health & Wellness',
    readTime: 6,
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Allergies', 'Pollen', 'Health', 'Seasonal']
  },
  {
    id: '4',
    title: 'The Hidden Dangers of Wildfire Smoke in Your Home',
    excerpt: 'Learn how wildfire smoke infiltrates indoor spaces and what you can do to protect your family.',
    content: `Wildfires are becoming increasingly common and severe, affecting air quality hundreds of miles away from the actual fire. Understanding how smoke infiltrates your home and impacts health is crucial for protection.

    **How Wildfire Smoke Enters Homes:**
    
    Even with windows and doors closed, smoke can enter through:
    - Cracks around doors and windows
    - HVAC systems
    - Exhaust fans and vents
    - Fireplace chimneys
    - Any opening to the outside
    
    **Health Impacts of Wildfire Smoke:**
    
    **Immediate Effects:**
    - Eye and throat irritation
    - Coughing and wheezing
    - Headaches
    - Reduced lung function
    
    **Long-term Concerns:**
    - Increased risk of respiratory infections
    - Worsening of asthma and COPD
    - Cardiovascular problems
    - Potential cognitive effects
    
    **Vulnerable Populations:**
    - Children under 18
    - Adults over 65
    - People with heart or lung disease
    - Pregnant women
    
    **Protection Strategies:**
    
    1. **Create a Clean Air Room:**
       - Choose a room with minimal air leaks
       - Use high-efficiency air purifiers
       - Avoid activities that create particles (smoking, frying, candles)
    
    2. **Air Purifier Selection:**
       - Look for units that specifically address smoke particles
       - Ensure adequate room coverage
       - Consider units with activated carbon for odor removal
    
    3. **Home Preparation:**
       - Seal air leaks with weatherstripping
       - Use recirculate mode on HVAC systems
       - Install high-efficiency filters in your HVAC system
    
    **When to Take Action:**
    Monitor local Air Quality Index (AQI) and take precautions when levels reach "Unhealthy for Sensitive Groups" (101-150) or higher.`,
    category: 'Emergency Preparedness',
    readTime: 8,
    date: '2024-01-12',
    image: 'https://images.unsplash.com/photo-1628891890965-42587bcdace3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Wildfire', 'Smoke', 'Emergency', 'Protection']
  },
  {
    id: '5',
    title: 'Pet Owners Guide to Cleaner Indoor Air',
    excerpt: 'Love your pets but struggle with dander and odors? Learn how to maintain clean air in pet-friendly homes.',
    content: `Pet ownership brings joy and companionship, but it also introduces unique air quality challenges. Here's how to love your pets while maintaining clean indoor air.

    **Common Pet-Related Air Quality Issues:**
    
    1. **Pet Dander:** Microscopic skin flakes that trigger allergies
    2. **Pet Hair:** Carries dander and traps other pollutants
    3. **Odors:** From litter boxes, accidents, and natural pet smells
    4. **Tracked-in Pollutants:** Dirt, pollen, and chemicals from outdoors
    
    **Understanding Pet Dander:**
    
    Contrary to popular belief, pet allergies aren't caused by fur but by proteins found in:
    - Skin flakes (dander)
    - Saliva
    - Urine
    - Sebaceous glands
    
    These proteins are incredibly small (2.5 microns or smaller) and can remain airborne for hours.
    
    **Solutions for Pet Owners:**
    
    **Air Purification:**
    - Use air purifiers with HEPA or PECO technology
    - Choose units specifically rated for pet allergens
    - Run purifiers continuously, not just when you notice odors
    - Consider multiple units for larger homes
    
    **Regular Maintenance:**
    - Groom pets regularly to reduce shedding
    - Bathe pets weekly to reduce dander
    - Wash pet bedding frequently
    - Vacuum with HEPA-equipped cleaners 2-3 times per week
    
    **Home Environment:**
    - Use hard flooring instead of carpet where possible
    - Wash human bedding weekly in hot water
    - Keep pets out of bedrooms if family members have allergies
    - Maintain humidity levels between 30-50%
    
    **Litter Box Management:**
    - Place litter boxes in well-ventilated areas
    - Use low-dust, unscented litter
    - Clean boxes daily
    - Consider air purifiers near litter areas
    
    **Pro Tips:**
    - Brush pets outdoors when possible
    - Use entrance mats to reduce tracked-in pollutants
    - Consider "hypoallergenic" breeds (though no breed is 100% allergen-free)
    - Regular vet checkups can reduce skin issues that increase dander`,
    category: 'Pet Care',
    readTime: 6,
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Pets', 'Dander', 'Allergies', 'Home Care']
  }
];

// Article categories
const categories = ['All', 'Air Quality Basics', 'Technology', 'Health & Wellness', 'Emergency Preparedness', 'Pet Care'];

// Article Card Component
const ArticleCard = ({ article, onClick }: { article: Article; onClick: () => void }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-powder-blue text-steel-blue text-xs font-medium px-2 py-1 rounded-full">
            {article.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <span className="material-icons text-sm mr-1">access_time</span>
            {article.readTime} min read
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {article.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">{formatDate(article.date)}</span>
        </div>
      </div>
    </div>
  );
};

// Article Modal Component
const ArticleModal = ({ 
  article, 
  isOpen, 
  onClose 
}: { 
  article: Article | null; 
  isOpen: boolean; 
  onClose: () => void 
}) => {
  if (!isOpen || !article) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100"
          >
            <span className="material-icons">close</span>
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="bg-powder-blue text-steel-blue text-sm font-medium px-3 py-1 rounded-full">
              {article.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <span className="material-icons text-sm mr-1">access_time</span>
              {article.readTime} min read • {formatDate(article.date)}
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {article.title}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              if (paragraph.trim() === '') return null;
              return (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Learning Component
const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter articles by category
  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-ivory-white">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Learn About Air Quality
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover expert insights, tips, and science-backed information to help you breathe cleaner, healthier air at home.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-steel-blue mb-2">90%</div>
              <p className="text-gray-600">of time spent indoors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-steel-blue mb-2">2-5x</div>
              <p className="text-gray-600">more polluted indoor air can be</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-steel-blue mb-2">50M</div>
              <p className="text-gray-600">Americans affected by allergies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-steel-blue text-white hover:bg-steel-blue-dark'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-gray-600 text-center">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                onClick={() => openArticle(article)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about air quality and air purifiers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How often should I replace my air purifier filter?",
                answer: "Filter replacement depends on usage and air quality conditions. Generally, PECO filters last 6 months, while HEPA filters need replacement every 3-6 months. Your purifier's app or indicator will notify you when it's time."
              },
              {
                question: "What size air purifier do I need for my room?",
                answer: "Choose an air purifier rated for at least your room size. For faster cleaning, select a unit rated for a larger space. The Air Pro covers up to 1000 sq ft, while the Air Mini+ is perfect for rooms up to 250 sq ft."
              },
              {
                question: "Can air purifiers help with COVID-19?",
                answer: "While air purifiers can help reduce airborne particles and some viruses, they should be used alongside other safety measures like vaccination, masking, and ventilation. HEPA and PECO technologies can capture virus-sized particles."
              },
              {
                question: "Do air purifiers work for cigarette smoke?",
                answer: "Yes, high-quality air purifiers with activated carbon and HEPA or PECO filtration can effectively remove cigarette smoke particles and odors. However, eliminating the source of smoke is always the best approach."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-cool-gray rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Learn;