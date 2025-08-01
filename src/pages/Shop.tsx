import { useState, useEffect } from 'react';

// Simple product interface
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  features: string[];
  coverage: string;
  isNew?: boolean;
  isBestseller?: boolean;
  isRefurbished?: boolean;
}

// Cart item interface
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Notification interface
interface Notification {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

// Product data inline
const products: Product[] = [
  {
    id: '1',
    name: 'Air Pro',
    price: 799,
    rating: 4.8,
    reviewCount: 324,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEsW7J8z-tq6BmW4N34fZb2u6WHWkqUSNpd_PgZ_nbTHtY0UdJXU74svucZhmmALEOgeDLWb0LaN6RIT3xZd0xFEv6e8dG0ALZ4PVDNxosEDc7q1rakwTq1X_nD_4UdIpUOqTJUoJPhawYUeNN31AHEq6o5gZnn5UtNgVI2yxoladNpnVPHIOTkOJifFktLcgWZ_fQuV-FOJX_BC4SPVGpuGaClkgor93EdDdbjwrBL0YI1dgYXvb1DQMO3_BBgmkou2L_babbDiJI',
    features: ['PECO Technology', 'Smart App Control', 'Real-time Air Quality'],
    coverage: '1000 sq ft',
    isBestseller: true
  },
  {
    id: '2',
    name: 'Air Mini+',
    price: 399,
    rating: 4.7,
    reviewCount: 189,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvBCvcuhDRFLet9itZOwYoJsz6ECmKmK6_UHOKK718vw6LHvDPuZcHpva90hUkZ0VuWzmZWpXSB7gDN75KuFzgz3wHDSBmXZI0J6COPd48YpLv-aBkzhA1IncYZrkEUway_poRSWzUNYcHsfSBUFnIPX8JRZ-tIApyFI4iJbaisza8NLmQppunmA-_l70Ivlw4YsZzKtcJcCtl_I4MzctRq0FAJJhNN4kv9-t5TEUmsHGaV2Gz8lhJMuwKhDAF-34gDwJc83BKRIkp',
    features: ['PECO Technology', 'Compact Design', 'Smoke Detection'],
    coverage: '250 sq ft',
    isNew: true
  },
  {
    id: '3',
    name: 'Refurbished Air Mini+',
    price: 299,
    originalPrice: 399,
    rating: 4.6,
    reviewCount: 89,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvBCvcuhDRFLet9itZOwYoJsz6ECmKmK6_UHOKK718vw6LHvDPuZcHpva90hUkZ0VuWzmZWpXSB7gDN75KuFzgz3wHDSBmXZI0J6COPd48YpLv-aBkzhA1IncYZrkEUway_poRSWzUNYcHsfSBUFnIPX8JRZ-tIApyFI4iJbaisza8NLmQppunmA-_l70Ivlw4YsZzKtcJcCtl_I4MzctRq0FAJJhNN4kv9-t5TEUmsHGaV2Gz8lhJMuwKhDAF-34gDwJc83BKRIkp',
    features: ['PECO Technology', 'Compact Design', 'Smoke Detection'],
    coverage: '250 sq ft',
    isRefurbished: true
  },
  {
    id: '4',
    name: 'Refurbished Air Pro',
    price: 599,
    originalPrice: 799,
    rating: 4.7,
    reviewCount: 156,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEsW7J8z-tq6BmW4N34fZb2u6WHWkqUSNpd_PgZ_nbTHtY0UdJXU74svucZhmmALEOgeDLWb0LaN6RIT3xZd0xFEv6e8dG0ALZ4PVDNxosEDc7q1rakwTq1X_nD_4UdIpUOqTJUoJPhawYUeNN31AHEq6o5gZnn5UtNgVI2yxoladNpnVPHIOTkOJifFktLcgWZ_fQuV-FOJX_BC4SPVGpuGaClkgor93EdDdbjwrBL0YI1dgYXvb1DQMO3_BBgmkou2L_babbDiJI',
    features: ['PECO Technology', 'Smart App Control', 'Real-time Air Quality'],
    coverage: '1000 sq ft',
    isRefurbished: true
  }
];

// Notification Component
const NotificationToast = ({ notification, onClose }: { notification: Notification; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    success: 'bg-steel-blue',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500'
  }[notification.type];

  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2 animate-slide-in`}>
      <span className="material-icons text-sm">
        {notification.type === 'success' ? 'check_circle' : 
         notification.type === 'error' ? 'error' : 
         notification.type === 'warning' ? 'warning' : 'info'}
      </span>
      <span>{notification.message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-75">
        <span className="material-icons text-sm">close</span>
      </button>
    </div>
  );
};

// Cart Drawer Component
const CartDrawer = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onCheckout 
}: {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose}></div>
      
      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">
            Shopping Cart ({itemCount})
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <span className="material-icons">close</span>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <span className="material-icons text-6xl text-gray-300 mb-4">shopping_cart</span>
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="text-steel-blue font-bold">${item.price.toLocaleString()}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="material-icons text-sm">remove</span>
                      </button>
                      <span className="px-3 py-1 bg-gray-100 rounded">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="material-icons text-sm">add</span>
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <span className="material-icons">delete</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-steel-blue">${total.toLocaleString()}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full btn-primary py-3 rounded-full font-semibold"
            >
              Proceed to Checkout
            </button>
            <p className="text-xs text-gray-500 text-center">
              Free shipping on all orders • 30-day returns
            </p>
          </div>
        )}
      </div>
    </>
  );
};

// Checkout Modal Component
const CheckoutModal = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onConfirmOrder 
}: {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onConfirmOrder: () => void;
}) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = total * 0.08; // 8% tax
  const shipping = total > 500 ? 0 : 25; // Free shipping over $500
  const finalTotal = total + tax + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmOrder();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <span className="material-icons">close</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Order Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent mt-4"
                  required
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    placeholder="ZIP code"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
                <input
                  type="text"
                  placeholder="Card number"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                  required
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full btn-primary py-3 rounded-full font-semibold text-lg"
              >
                Complete Order - ${finalTotal.toLocaleString()}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="bg-cool-gray rounded-lg p-4 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-medium">${(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span className="text-steel-blue">${finalTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, onAddToCart }: { product: Product; onAddToCart: (product: Product) => void }) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`material-icons text-sm ${
          index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        star
      </span>
    ));
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="card group cursor-pointer">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
              BESTSELLER
            </span>
          )}
          {product.isRefurbished && (
            <span className="bg-steel-blue text-white text-xs font-bold px-2 py-1 rounded">
              REFURBISHED
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm font-medium text-gray-700">{product.rating}</span>
          <span className="text-sm text-gray-500 ml-1">({product.reviewCount})</span>
        </div>

        {/* Coverage */}
        <p className="text-sm text-gray-600 mb-3">Coverage: {product.coverage}</p>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through ml-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <span className="text-sm font-bold text-steel-blue">
              Save {formatPrice(product.originalPrice - product.price)}
            </span>
          )}
        </div>

        {/* Action Button */}
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full btn-primary py-2 px-4 rounded-full font-semibold hover:bg-steel-blue-dark transition-colors"
        >
          Add to Cart
        </button>

        {/* Shipping Info */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-600">
            <span className="material-icons text-sm mr-1">local_shipping</span>
            <span>Free shipping • 30-day returns</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Shop Component
const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Add item to cart
  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If item exists, increase quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If new item, add to cart
        return [...prevItems, {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        }];
      }
    });

    // Show notification
    const notification: Notification = {
      id: Date.now().toString(),
      message: `${product.name} added to cart!`,
      type: 'success'
    };
    setNotifications(prev => [...prev, notification]);
  };

  // Update item quantity
  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Handle checkout
  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Confirm order
  const confirmOrder = () => {
    setIsCheckoutOpen(false);
    setCartItems([]);
    
    const notification: Notification = {
      id: Date.now().toString(),
      message: '🎉 Order placed successfully! You will receive a confirmation email shortly.',
      type: 'success'
    };
    setNotifications(prev => [...prev, notification]);
  };

  // Remove notification
  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Filter products by search
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-ivory-white">
      {/* Notifications */}
      {notifications.map((notification) => (
        <NotificationToast
          key={notification.id}
          notification={notification}
          onClose={() => removeNotification(notification.id)}
        />
      ))}

      {/* Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 bg-steel-blue text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-steel-blue-dark transition-colors z-40"
      >
        <span className="material-icons">shopping_cart</span>
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </button>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onConfirmOrder={confirmOrder}
      />
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Air Purifiers
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed for clean, purifying, living and sleep.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 material-icons text-gray-400">
                search
              </span>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-steel-blue focus:border-transparent"
              />
            </div>
          </div>

          {/* Sort Controls */}
          <div className="flex justify-center space-x-4">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            {[
              { key: 'name' as const, label: 'Name' },
              { key: 'price' as const, label: 'Price' },
              { key: 'rating' as const, label: 'Rating' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSortBy(key)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  sortBy === key
                    ? 'bg-steel-blue text-white hover:bg-steel-blue-dark'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {searchQuery ? `Search results for "${searchQuery}"` : 'All Products'}
            </h2>
            <p className="text-gray-600">
              {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="material-icons text-6xl text-gray-300 mb-4">
                search_off
              </div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try different search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-cool-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Compare Air Pro vs Air Mini+
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-cool-gray">
                  <tr>
                    <th className="text-left p-6 font-bold text-gray-800">Features</th>
                    <th className="text-center p-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEsW7J8z-tq6BmW4N34fZb2u6WHWkqUSNpd_PgZ_nbTHtY0UdJXU74svucZhmmALEOgeDLWb0LaN6RIT3xZd0xFEv6e8dG0ALZ4PVDNxosEDc7q1rakwTq1X_nD_4UdIpUOqTJUoJPhawYUeNN31AHEq6o5gZnn5UtNgVI2yxoladNpnVPHIOTkOJifFktLcgWZ_fQuV-FOJX_BC4SPVGpuGaClkgor93EdDdbjwrBL0YI1dgYXvb1DQMO3_BBgmkou2L_babbDiJI"
                          alt="Air Pro"
                          className="w-20 h-20 object-cover rounded-lg mb-2"
                        />
                        <h3 className="font-bold">Air Pro</h3>
                        <p className="text-steel-blue font-bold">$799</p>
                      </div>
                    </th>
                    <th className="text-center p-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvBCvcuhDRFLet9itZOwYoJsz6ECmKmK6_UHOKK718vw6LHvDPuZcHpva90hUkZ0VuWzmZWpXSB7gDN75KuFzgz3wHDSBmXZI0J6COPd48YpLv-aBkzhA1IncYZrkEUway_poRSWzUNYcHsfSBUFnIPX8JRZ-tIApyFI4iJbaisza8NLmQppunmA-_l70Ivlw4YsZzKtcJcCtl_I4MzctRq0FAJJhNN4kv9-t5TEUmsHGaV2Gz8lhJMuwKhDAF-34gDwJc83BKRIkp"
                          alt="Air Mini+"
                          className="w-20 h-20 object-cover rounded-lg mb-2"
                        />
                        <h3 className="font-bold">Air Mini+</h3>
                        <p className="text-steel-blue font-bold">$399</p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Coverage Area', airPro: '1000 sq ft', airMini: '250 sq ft' },
                    { feature: 'PECO Technology', airPro: true, airMini: true },
                    { feature: 'Smart App Control', airPro: true, airMini: false },
                    { feature: 'Real-time Air Quality', airPro: true, airMini: false },
                    { feature: 'Smoke Detection', airPro: false, airMini: true },
                    { feature: 'Compact Design', airPro: false, airMini: true }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-cool-gray'}>
                      <td className="p-4 font-medium text-gray-800">{row.feature}</td>
                      <td className="p-4 text-center">
                        {typeof row.airPro === 'boolean' ? (
                          <span className={`material-icons ${row.airPro ? 'text-steel-blue' : 'text-gray-300'}`}>
                            {row.airPro ? 'check_circle' : 'cancel'}
                          </span>
                        ) : (
                          <span className="font-medium">{row.airPro}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.airMini === 'boolean' ? (
                          <span className={`material-icons ${row.airMini ? 'text-steel-blue' : 'text-gray-300'}`}>
                            {row.airMini ? 'check_circle' : 'cancel'}
                          </span>
                        ) : (
                          <span className="font-medium">{row.airMini}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Why Choose The Breeze Co?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-powder-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-steel-blue text-2xl">science</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">PECO Technology</h3>
              <p className="text-gray-600 text-sm">
                Destroys pollutants 1000x smaller than what HEPA can trap.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-powder-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-steel-blue text-2xl">verified</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Certified Performance</h3>
              <p className="text-gray-600 text-sm">
                Independently tested and certified for advertised performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-powder-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-steel-blue text-2xl">support_agent</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">
                Get help from our air quality experts for the right choice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;