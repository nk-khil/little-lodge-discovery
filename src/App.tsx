import React, { useState } from 'react';
import { Play, CheckCircle, ArrowRight, BarChart, Home, Users, FileCheck } from 'lucide-react';
import { supabase } from './lib/supabase';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    placesRequired: 1
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const { error: insertError } = await supabase
        .from('registrations')
        .insert([{
          first_name: formData.firstName,
          surname: formData.surname,
          email: formData.email,
          places_required: formData.placesRequired
        }]);

      if (insertError) throw insertError;

      setSubmitted(true);
      setFormData({
        firstName: '',
        surname: '',
        email: '',
        placesRequired: 1
      });
    } catch (err) {
      console.error('Error submitting registration:', err);
      setError('Failed to submit registration. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'placesRequired' ? parseInt(value) || 1 : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-grey to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Little Lodge Nursery" 
              className="h-24 w-auto"
            />
          </div>
          <a 
            href="mailto:discovery.day@littlelodgenursery.com?subject=Discovery%20Day%20Enquiry"
            className="bg-brand-mint text-white px-6 py-2 rounded-full hover:bg-brand-mint/90 transition-colors"
          >
            Contact Us
          </a>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
              How to Unlock the Secrets to Purchasing a Children's Day Nursery
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our exclusive Discovery Day and get the insider knowledge, expert guidance, and real-world insights you need to take the first step toward owning your own successful nursery.
            </p>
            <div className="text-center">
              <a 
                href="#register"
                className="bg-brand-coral text-white p-4 rounded-lg inline-block hover:bg-brand-coral/90 transition-colors"
              >
                <p className="font-semibold">Limited Spaces will be Available – Register Your Interest Today!</p>
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
              <iframe 
                src="https://player.vimeo.com/video/1067116252?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1" 
                style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="LL Discovery Day Promo Video">
              </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js" async></script>
          </div>
        </div>
      </div>

      {/* What You'll Gain Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-black">What You'll Gain from the Day</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-light-mint p-8 rounded-xl">
              <BarChart className="w-12 h-12 text-brand-mint mb-4" />
              <h3 className="text-xl font-bold mb-4">Industry Insights</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Get up-to-date insights into the UK children's day nursery sector—where it stands today and what's next</li>
                <li>Discover opportunities for expansion and how to position yourself for success</li>
              </ul>
            </div>
            <div className="bg-brand-light-mint p-8 rounded-xl">
              <Home className="w-12 h-12 text-brand-mint mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Story</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Hear firsthand how we built a profitable nursery business with a multi-million pound turnover</li>
                <li>Learn from our journey—the wins, the challenges, and the lessons</li>
                <li>Get an exclusive guided tour of our nurseries to see how a well-run setting operates</li>
              </ul>
            </div>
            <div className="bg-brand-light-mint p-8 rounded-xl">
              <Users className="w-12 h-12 text-brand-mint mb-4" />
              <h3 className="text-xl font-bold mb-4">Meet the Experts</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Connect with specialist nursery sales agents who can help you find the right opportunity</li>
                <li>Gain direct access to key industry contacts—finance brokers, and consultants who will guide you through the purchase process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Guide Section */}
      <div className="bg-brand-grey py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-black">Your Step-by-Step Guide to Buying a Nursery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "How to find nurseries for sale – and identify the right one for you",
              "What to look for in a sales brochure—spot hidden risks and opportunities",
              "Assessing the financials – receive a financial analyzer tool",
              "The viewing process – what questions to ask and red flags to watch out for",
              "Making an offer – learn the advantages of asset vs. share purchases",
              "Creating a strong business plan to secure funding",
              "Understanding loan offers – what lenders look for",
              "OFSTED registration requirements – interview preparation"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-white">
                <FileCheck className="w-6 h-6 text-brand-coral flex-shrink-0 mt-1" />
                <p className="text-lg text-brand-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div id="register" className="bg-brand-coral py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Register Your Interest Today
            </h2>
            <p className="text-white/90 mb-8">
              Take the first step towards owning your successful nursery business. Limited spaces available for our next discovery day.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {submitted ? (
                <div className="bg-white text-brand-mint py-3 px-6 rounded-full inline-flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Thank you for your interest!
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col items-start">
                      <label htmlFor="firstName" className="text-white mb-2">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-6 py-3 rounded-full"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <label htmlFor="surname" className="text-white mb-2">Surname</label>
                      <input
                        id="surname"
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        className="w-full px-6 py-3 rounded-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="email" className="text-white mb-2">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-3 rounded-full"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="placesRequired" className="text-white mb-2">Number of Places Required</label>
                    <input
                      id="placesRequired"
                      type="number"
                      name="placesRequired"
                      value={formData.placesRequired}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-6 py-3 rounded-full"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-brand-coral px-8 py-3 rounded-full font-semibold hover:bg-brand-grey transition-colors inline-flex items-center justify-center"
                  >
                    Register Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </>
              )}
              {error && (
                <p className="text-red-500 mt-2">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;