import { useState } from 'react';

// Review interface
interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  product: string;
  verified: boolean;
  helpful: number;
  avatar: string;
}

// Sample reviews data
const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'New York, NY',
    rating: 5,
    date: '2024-01-15',
    title: 'Life-changing for my allergies!',
    content: 'I\'ve had severe allergies for years and tried multiple air purifiers. The Air Pro is hands down the best investment I\'ve made. Within a week, I noticed a significant improvement in my breathing and sleep quality. The app integration is fantastic - I love seeing the real-time air quality data.',
    product: 'Air Pro',
    verified: true,
    helpful: 24,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b812292a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    rating: 5,
    date: '2024-01-10',
    title: 'Perfect for our small apartment',
    content: 'The Air Mini+ is perfect for our bedroom. It\'s incredibly quiet - we barely notice it running at night. The smoke detection feature gave us peace of mind, especially living in California during fire season. Highly recommend for anyone with a smaller space.',
    product: 'Air Mini+',
    verified: true,
    helpful: 18,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    location: 'Austin, TX',
    rating: 4,
    date: '2024-01-08',
    title: 'Great for pet owners',
    content: 'We have two cats and a dog, and pet dander was always an issue for guests with allergies. Since getting the Air Pro, we\'ve had zero complaints. The air feels noticeably cleaner, and the automatic mode adjusts perfectly throughout the day.',
    product: 'Air Pro',
    verified: true,
    helpful: 15,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '4',
    name: 'David Thompson',
    location: 'Chicago, IL',
    rating: 5,
    date: '2024-01-05',
    title: 'Worth every penny',
    content: 'Initially hesitant about the price, but after 3 months of use, I can say it\'s worth every penny. My wife\'s asthma symptoms have improved dramatically. The build quality is excellent, and customer service has been outstanding.',
    product: 'Air Pro',
    verified: true,
    helpful: 22,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '5',
    name: 'Lisa Park',
    location: 'Seattle, WA',
    rating: 4,
    date: '2024-01-03',
    title: 'Compact but powerful',
    content: 'The Air Mini+ exceeded my expectations. It\'s much smaller than I anticipated but incredibly effective. Perfect for my home office. The only minor complaint is that I wish the filter replacement indicator was more prominent.',
    product: 'Air Mini+',
    verified: true,
    helpful: 12,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '6',
    name: 'James Wilson',
    location: 'Miami, FL',
    rating: 5,
    date: '2023-12-28',
    title: 'Excellent customer service too',
    content: 'Not only is the product fantastic, but when I had questions about optimal placement, their customer service team was incredibly helpful. They even followed up a month later to see how everything was working. That\'s rare these days!',
    product: 'Air Mini+',
    verified: true,
    helpful: 19,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];

// Review Card Component
const ReviewCard = ({ review }: { review: Review }) => {
  const [isHelpful, setIsHelpful] = useState(false);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`material-icons text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        star
      </span>
    ));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-800">{review.name}</h3>
              {review.verified && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                  <span className="material-icons text-xs mr-1">verified</span>
                  Verified
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600">{review.location}</p>
            <p className="text-sm text-gray-500">{formatDate(review.date)}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex mb-1">{renderStars(review.rating)}</div>
          <span className="text-sm text-gray-600">{review.product}</span>
        </div>
      </div>

      {/* Review Content */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">{review.title}</h4>
        <p className="text-gray-700 leading-relaxed">{review.content}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <button
          onClick={() => setIsHelpful(!isHelpful)}
          className={`flex items-center space-x-2 text-sm ${
            isHelpful ? 'text-brand-green' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <span className="material-icons text-sm">thumb_up</span>
          <span>Helpful ({review.helpful + (isHelpful ? 1 : 0)})</span>
        </button>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          <span className="material-icons text-sm mr-1">flag</span>
          Report
        </button>
      </div>
    </div>
  );
};

// Filter Component
const ReviewFilter = ({ 
  onFilterChange 
}: { 
  onFilterChange: (filters: { rating: number | null; product: string | null }) => void 
}) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleRatingChange = (rating: number | null) => {
    setSelectedRating(rating);
    onFilterChange({ rating, product: selectedProduct });
  };

  const handleProductChange = (product: string | null) => {
    setSelectedProduct(product);
    onFilterChange({ rating: selectedRating, product });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
      <h3 className="font-semibold text-gray-800 mb-4">Filter Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Rating Filter */}
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Rating</h4>
          <div className="space-y-2">
            <button
              onClick={() => handleRatingChange(null)}
              className={`block w-full text-left px-3 py-2 rounded ${
                selectedRating === null ? 'bg-brand-green text-white' : 'hover:bg-gray-100'
              }`}
            >
              All Ratings
            </button>
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() => handleRatingChange(rating)}
                className={`flex items-center w-full px-3 py-2 rounded ${
                  selectedRating === rating ? 'bg-brand-green text-white' : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex mr-2">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`material-icons text-sm ${
                        index < rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span>& up</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Filter */}
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Product</h4>
          <div className="space-y-2">
            <button
              onClick={() => handleProductChange(null)}
              className={`block w-full text-left px-3 py-2 rounded ${
                selectedProduct === null ? 'bg-brand-green text-white' : 'hover:bg-gray-100'
              }`}
            >
              All Products
            </button>
            {['Air Pro', 'Air Mini+'].map((product) => (
              <button
                key={product}
                onClick={() => handleProductChange(product)}
                className={`block w-full text-left px-3 py-2 rounded ${
                  selectedProduct === product ? 'bg-brand-green text-white' : 'hover:bg-gray-100'
                }`}
              >
                {product}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Reviews Component
const Reviews = () => {
  const [filters, setFilters] = useState<{ rating: number | null; product: string | null }>({
    rating: null,
    product: null
  });

  // Filter reviews based on selected filters
  const filteredReviews = reviews.filter(review => {
    if (filters.rating && review.rating < filters.rating) return false;
    if (filters.product && review.product !== filters.product) return false;
    return true;
  });

  // Calculate stats
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Customer Reviews
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our customers are saying about their experience with The Breeze Co air purifiers.
            </p>
          </div>

          {/* Review Stats */}
          <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Overall Rating */}
              <div className="text-center">
                <div className="text-6xl font-bold text-brand-green mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`material-icons text-2xl ${
                        index < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">Based on {reviews.length} reviews</p>
                <p className="text-sm text-gray-500 mt-2">96% of customers recommend our products</p>
              </div>

              {/* Rating Distribution */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Rating Distribution</h3>
                {ratingDistribution.map(({ rating, count, percentage }) => (
                  <div key={rating} className="flex items-center mb-2">
                    <span className="w-8 text-sm text-gray-600">{rating}★</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-brand-green h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-8 text-sm text-gray-600 text-right">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Filter */}
          <ReviewFilter onFilterChange={setFilters} />

          {/* Results */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredReviews.length} of {reviews.length} reviews
            </p>
          </div>

          {/* Review Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Empty State */}
          {filteredReviews.length === 0 && (
            <div className="text-center py-16">
              <span className="material-icons text-6xl text-gray-300 mb-4">rate_review</span>
              <h3 className="text-xl font-medium text-gray-600 mb-2">No reviews match your filters</h3>
              <p className="text-gray-500">Try adjusting your filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Have a Breeze Co product?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Share your experience and help others make informed decisions about their air quality.
          </p>
          <button className="btn-primary py-3 px-8 rounded-full font-semibold">
            Write a Review
          </button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;