import Hero from '../components/Hero'
import Features from '../components/Features'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import Subscription from '../components/Subscription'
import AirQualityChallenges from '../components/AirQualityChallenges'

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Subscription />
      <AirQualityChallenges />
    </main>
  );
};

export default Home;