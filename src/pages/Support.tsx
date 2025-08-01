import { useState } from 'react';

// Support category interface
interface SupportCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  articles: SupportArticle[];
}

// Support article interface
interface SupportArticle {
  id: string;
  title: string;
  content: string;
  helpful: number;
}

// Contact form interface
interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  orderNumber?: string;
}

// Support data
const supportCategories: SupportCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Setup and initial configuration help',
    icon: 'play_circle',
    articles: [
      {
        id: '1',
        title: 'Unboxing and Initial Setup',
        content: `**What's in the box:**
        - Your Air Pro or Air Mini+ unit
        - Power cord
        - Quick start guide
        - Filter (pre-installed)
        - Mobile app setup instructions

        **Setup Steps:**
        1. Remove the unit from packaging
        2. Remove plastic wrapping from the filter (located inside the unit)
        3. Place the unit on a flat, stable surface at least 3 feet from walls
        4. Plug in the power cord
        5. Press the power button - the unit will start with a blue light
        6. Download The Breeze Co app from the App Store or Google Play
        7. Follow the in-app setup instructions to connect to Wi-Fi

        **Important:** Do not remove the filter plastic wrap until you're ready to use the unit. Leaving it on during storage helps preserve filter life.`,
        helpful: 45
      },
      {
        id: '2',
        title: 'Mobile App Setup',
        content: `**Download the App:**
        - iOS: Search "The Breeze Co" in the App Store
        - Android: Search "The Breeze Co" in Google Play Store

        **Initial Setup:**
        1. Create your account with email and password
        2. Turn on your air purifier
        3. Tap "Add Device" in the app
        4. Follow the Wi-Fi connection wizard
        5. Name your device (e.g., "Living Room Air Pro")
        6. Complete setup

        **App Features:**
        - Real-time air quality monitoring
        - Remote control of fan speed and settings
        - Filter life tracking and replacement reminders
        - Air quality history and reports
        - Smart scheduling and auto mode

        **Troubleshooting Connection Issues:**
        - Ensure your phone and purifier are on the same 2.4GHz Wi-Fi network
        - Reset Wi-Fi by holding the Wi-Fi button for 5 seconds
        - Move closer to your router during setup`,
        helpful: 38
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and solutions',
    icon: 'build',
    articles: [
      {
        id: '3',
        title: 'Unit Not Turning On',
        content: `**Check These First:**
        1. **Power Connection**: Ensure the power cord is firmly plugged into both the unit and wall outlet
        2. **Power Button**: Press and hold the power button for 2-3 seconds
        3. **Different Outlet**: Try plugging into a different electrical outlet
        4. **Circuit Breaker**: Check if the circuit breaker has tripped

        **LED Indicator Meanings:**
        - **No Light**: No power or unit is off
        - **Blue Light**: Normal operation
        - **Red Light**: Error condition (see manual for specific codes)
        - **Flashing Blue**: Connecting to Wi-Fi

        **If Still Not Working:**
        Contact our support team with your serial number (located on the bottom of the unit) for further assistance.`,
        helpful: 32
      },
      {
        id: '4',
        title: 'Poor Air Quality Readings',
        content: `**Understanding Air Quality:**
        Air quality readings can vary based on many factors including weather, outdoor conditions, and indoor activities.

        **Common Causes of Poor Readings:**
        - Cooking (especially frying or grilling)
        - Cleaning with chemical products
        - Burning candles or incense
        - Pet dander and activities
        - Outdoor pollution entering through doors/windows
        - Dust from construction or renovation

        **Improving Air Quality:**
        1. **Placement**: Ensure 3+ feet clearance on all sides
        2. **Filter Check**: Verify filter is properly installed and not overdue for replacement
        3. **Fan Speed**: Increase to high speed during poor quality periods
        4. **Source Control**: Identify and minimize pollution sources
        5. **Ventilation**: Avoid opening windows during high outdoor pollution

        **When to Contact Support:**
        If readings remain consistently poor after trying these steps, contact support for a diagnostic check.`,
        helpful: 28
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Care',
    description: 'Keep your purifier running optimally',
    icon: 'settings',
    articles: [
      {
        id: '5',
        title: 'Filter Replacement Guide',
        content: `**When to Replace:**
        - App notification indicates replacement needed
        - Filter life indicator shows red
        - Generally every 6 months for PECO filters
        - More frequently in high-pollution environments

        **Replacement Steps:**
        1. Turn off and unplug the unit
        2. Open the back or side panel (varies by model)
        3. Remove the old filter by lifting the handle
        4. Remove plastic wrapping from new filter
        5. Insert new filter with airflow arrow pointing forward
        6. Close the panel securely
        7. Plug in and turn on the unit
        8. Reset filter life in the app (Settings > Filter Life > Reset)

        **Ordering Replacement Filters:**
        - Visit our website's replacement filter section
        - Use the app's "Order Filters" feature
        - Call customer service: 1-800-BREEZE1
        - Set up automatic delivery subscriptions for convenience

        **Filter Storage:**
        Store replacement filters in a cool, dry place. Keep plastic wrapping on until ready to use.`,
        helpful: 41
      },
      {
        id: '6',
        title: 'Cleaning Your Air Purifier',
        content: `**Cleaning Schedule:**
        - **Weekly**: Wipe exterior with damp cloth
        - **Monthly**: Clean air intake and outlet grilles
        - **Quarterly**: Deep clean interior (when replacing filter)

        **Exterior Cleaning:**
        1. Unplug the unit
        2. Use a slightly damp microfiber cloth
        3. Wipe gently in circular motions
        4. Dry immediately with a clean cloth
        5. Do not use harsh chemicals or abrasive cleaners

        **Grille Cleaning:**
        1. Use a vacuum with brush attachment
        2. Gently remove dust from intake and outlet areas
        3. Use a soft brush for stubborn dust
        4. Ensure grilles are completely dry before operation

        **What NOT to do:**
        - Never submerge the unit in water
        - Don't use spray cleaners directly on the unit
        - Avoid removing internal components beyond the filter
        - Don't operate with wet exterior

        **Interior Cleaning:**
        Only clean interior surfaces when replacing the filter. Use a dry cloth to wipe accessible areas.`,
        helpful: 35
      }
    ]
  },
  {
    id: 'warranty',
    title: 'Warranty & Returns',
    description: 'Warranty coverage and return policies',
    icon: 'verified_user',
    articles: [
      {
        id: '7',
        title: 'Warranty Coverage',
        content: `**Warranty Period:**
        - **Air Pro**: 5-year limited warranty
        - **Air Mini+**: 3-year limited warranty
        - **Filters**: 6-month performance guarantee

        **What's Covered:**
        - Manufacturing defects
        - Component failures under normal use
        - Fan motor and electronic components
        - Free repair or replacement (our choice)

        **What's NOT Covered:**
        - Damage from misuse or accidents
        - Normal wear and tear
        - Filters (except initial 6-month guarantee)
        - Damage from power surges (use surge protector)
        - Units damaged by unauthorized repairs

        **How to Make a Warranty Claim:**
        1. Contact customer support with your serial number
        2. Describe the issue and provide purchase details
        3. Follow troubleshooting steps as guided
        4. If needed, we'll provide prepaid shipping label
        5. Repair or replacement typically takes 5-7 business days

        **Registration:**
        Register your product within 30 days of purchase for full warranty benefits. Use our website or mobile app.`,
        helpful: 29
      },
      {
        id: '8',
        title: '30-Day Return Policy',
        content: `**Return Window:**
        30 days from delivery date for full refund (minus return shipping)

        **Return Conditions:**
        - Item must be in original condition
        - All accessories and packaging included
        - No damage beyond normal inspection
        - Original purchase receipt required

        **Return Process:**
        1. Contact customer service to initiate return
        2. Receive return authorization number (RMA)
        3. Pack item securely in original packaging
        4. Include RMA number on package
        5. Ship to address provided (customer pays return shipping)

        **Refund Timeline:**
        - Refund processed within 3-5 business days of receipt
        - Original payment method will be credited
        - Shipping charges are non-refundable

        **Exchanges:**
        We don't offer direct exchanges. Please return for refund and place a new order for different model.

        **Damaged Items:**
        Report shipping damage within 48 hours. We'll provide prepaid return label and expedited replacement.`,
        helpful: 22
      }
    ]
  }
];

// FAQ data
const faqs = [
  {
    question: "How do I know when to replace my filter?",
    answer: "Your mobile app will send notifications when it's time to replace the filter. You can also check the filter life indicator on your device or in the app settings."
  },
  {
    question: "Can I use my air purifier in a larger room than recommended?",
    answer: "While you can use it in a larger space, the cleaning efficiency will be reduced. For optimal performance, choose a unit rated for your room size or larger."
  },
  {
    question: "Why is my air purifier making noise?",
    answer: "Some noise is normal, especially on higher fan speeds. If you notice unusual sounds, check that the filter is properly installed and the unit is on a stable surface."
  },
  {
    question: "How often should I clean my air purifier?",
    answer: "Wipe the exterior weekly and clean the grilles monthly. The filter should be replaced, not cleaned, according to the app's recommendations."
  },
  {
    question: "Can I operate my air purifier 24/7?",
    answer: "Yes, air purifiers are designed to run continuously. For best results, we recommend running your unit 24/7 to maintain optimal air quality."
  }
];

// Support Article Component
const SupportArticleComponent = ({ 
  article, 
  onBack 
}: { 
  article: SupportArticle; 
  onBack: () => void 
}) => {
  const [isHelpful, setIsHelpful] = useState(false);

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
      <button
        onClick={onBack}
        className="flex items-center text-steel-blue hover:text-steel-blue-hover mb-6"
      >
        <span className="material-icons mr-2">arrow_back</span>
        Back to Support
      </button>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{article.title}</h1>
      
      <div className="prose prose-lg max-w-none mb-8">
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
      
      <div className="border-t pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Was this helpful?</span>
            <button
              onClick={() => setIsHelpful(!isHelpful)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm ${
                isHelpful 
                  ? 'bg-steel-blue text-white hover:bg-steel-blue-dark' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="material-icons text-sm">thumb_up</span>
              <span>Yes ({article.helpful + (isHelpful ? 1 : 0)})</span>
            </button>
          </div>
          <button className="text-sm text-gray-500 hover:text-gray-700">
            <span className="material-icons text-sm mr-1">flag</span>
            Report issue
          </button>
        </div>
      </div>
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
    orderNumber: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '', orderNumber: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="bg-powder-blue border border-steel-blue rounded-lg p-8 text-center">
        <span className="material-icons text-steel-blue text-4xl mb-4">check_circle</span>
        <h3 className="text-xl font-semibold text-steel-blue mb-2">Message Sent!</h3>
        <p className="text-steel-blue">
          We've received your message and will respond within 24 hours. 
          Check your email for a confirmation with your ticket number.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Our Support Team</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Subject *
        </label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
        >
          <option value="">Select a topic...</option>
          <option value="technical-support">Technical Support</option>
          <option value="warranty-claim">Warranty Claim</option>
          <option value="return-exchange">Return/Exchange</option>
          <option value="billing">Billing Question</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Order Number (if applicable)
        </label>
        <input
          type="text"
          name="orderNumber"
          value={form.orderNumber}
          onChange={handleChange}
          placeholder="e.g., BC-2024-001234"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Please describe your issue or question in detail..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
        />
      </div>
      
      <button
        type="submit"
        className="w-full btn-primary py-3 rounded-lg font-semibold"
      >
        Send Message
      </button>
      
      <p className="text-sm text-gray-600 text-center">
        We typically respond within 24 hours during business days
      </p>
    </form>
  );
};

// Main Support Component
const Support = () => {
  const [selectedArticle, setSelectedArticle] = useState<SupportArticle | null>(null);
  const [activeTab, setActiveTab] = useState<'help' | 'contact'>('help');

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-cool-gray py-8">
        <div className="container mx-auto px-6">
          <SupportArticleComponent 
            article={selectedArticle} 
            onBack={() => setSelectedArticle(null)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-white">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How can we help you?
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions, troubleshooting guides, and get in touch with our support team.
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-cool-gray rounded-lg">
              <span className="material-icons text-3xl text-steel-blue mb-3">phone</span>
              <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-2">Mon-Fri 9AM-6PM EST</p>
              <p className="text-steel-blue font-semibold">1-800-BREEZE1</p>
            </div>
            <div className="text-center p-6 bg-cool-gray rounded-lg">
              <span className="material-icons text-3xl text-steel-blue mb-3">chat</span>
              <h3 className="font-semibold text-gray-800 mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm mb-2">Average response: 2 minutes</p>
              <button className="text-steel-blue font-semibold hover:underline">Start Chat</button>
            </div>
            <div className="text-center p-6 bg-cool-gray rounded-lg">
              <span className="material-icons text-3xl text-steel-blue mb-3">email</span>
              <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm mb-2">Response within 24 hours</p>
              <p className="text-steel-blue font-semibold">support@breezecoair.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setActiveTab('help')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'help'
                    ? 'bg-steel-blue text-white hover:bg-steel-blue-dark'
                    : 'text-gray-700 hover:bg-gray-700 hover:text-white'
                }`}
              >
                Help Articles
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'contact'
                    ? 'bg-steel-blue text-white hover:bg-steel-blue-dark'
                    : 'text-gray-700 hover:bg-gray-700 hover:text-white'
                }`}
              >
                Contact Us
              </button>
            </div>
          </div>

          {activeTab === 'help' ? (
            <>
              {/* Support Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {supportCategories.map((category) => (
                  <div key={category.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="text-center mb-4">
                      <span className={`material-icons text-4xl text-steel-blue mb-3`}>
                        {category.icon}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                    <div className="space-y-2">
                      {category.articles.map((article) => (
                        <button
                          key={article.id}
                          onClick={() => setSelectedArticle(article)}
                          className="block w-full text-left p-3 rounded-lg bg-cool-gray hover:bg-gray-100 transition-colors"
                        >
                          <div className="text-sm font-medium text-gray-800 mb-1">
                            {article.title}
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <span className="material-icons text-xs mr-1">thumb_up</span>
                            {article.helpful} helpful
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Support;