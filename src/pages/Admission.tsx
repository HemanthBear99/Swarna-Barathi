import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PlayfulBackground from '@/components/PlayfulBackground';
import {
  BookOpen,
  Download,
  Heart,
  Rainbow,
  Rocket,
  Smile,
  Sparkles,
  Star,
} from 'lucide-react';
import { useState } from 'react';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    occupation: '',
    address: '',
    phone: '',
    grade: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, fatherName, occupation, address, phone, grade, message } =
      formData;

    const whatsappMessage = `New Admission Inquiry:
Full Name: ${name}
Father's Name: ${fatherName}
Occupation: ${occupation}
Address: ${address}
Mobile Number: ${phone}
Grade Applying For: ${grade}
Questions/Comments: ${message || 'N/A'}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/917330955923?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');

    setFormSubmitted(true);
    setFormData({
      name: '',
      fatherName: '',
      occupation: '',
      address: '',
      phone: '',
      grade: '',
      message: '',
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Navbar />
      <PlayfulBackground />
      <main className="relative">
        <section className="bg-gradient-to-b from-yellow-100 via-pink-100 to-purple-100 py-20 pt-32 backdrop-blur-sm">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
                Welcome to Swarna Bharathi Play & High School ✨
              </h1>
              <p className="text-xl text-gray-700">
                Begin your child's journey towards academic excellence and
                holistic development at our esteemed institution.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* School Features */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-4 border-purple-200 transform hover:scale-105">
                <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 flex items-center">
                  <Sparkles className="mr-2" /> Our Educational Excellence
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start bg-yellow-50 p-3 rounded-lg">
                    <Smile className="text-yellow-400 mr-2 mt-1" />
                    <p className="text-gray-700">
                      Comprehensive academic curriculum with modern teaching
                      methodologies
                    </p>
                  </div>
                  <div className="flex items-start bg-blue-50 p-3 rounded-lg">
                    <BookOpen className="text-blue-400 mr-2 mt-1" />
                    <p className="text-gray-700">
                      State-of-the-art learning facilities and resources
                    </p>
                  </div>
                  <div className="flex items-start bg-pink-50 p-3 rounded-lg">
                    <Heart className="text-red-400 mr-2 mt-1" />
                    <p className="text-gray-700">
                      Dedicated and experienced faculty committed to student
                      success
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-3 px-6 rounded-full transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                  >
                    <Download size={18} className="mr-2" />
                    Download Our Prospectus
                  </a>
                </div>
              </div>

              {/* Admission Form */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-4 border-pink-200">
                <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500">
                  Admission Inquiry Form
                </h2>
                <p className="text-gray-700 mb-6">
                  We welcome your interest in our institution. Please complete
                  this form to begin the admission process.
                </p>

                {formSubmitted ? (
                  <div className="bg-green-50 border-4 border-green-200 text-green-700 rounded-xl p-4 animate-bounce">
                    <Rocket className="inline-block mr-2" />
                    Thank you for your interest! A WhatsApp message has been
                    opened for further communication.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-purple-700 mb-1"
                      >
                        Student's Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter student's full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="fatherName"
                        className="block text-sm font-medium text-purple-700 mb-1"
                      >
                        Parent/Guardian's Name *
                      </label>
                      <input
                        type="text"
                        id="fatherName"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter parent/guardian's name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="occupation"
                        className="block text-sm font-medium text-purple-700 mb-1"
                      >
                        Parent/Guardian's Occupation *
                      </label>
                      <input
                        type="text"
                        id="occupation"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter occupation"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-purple-700 mb-1"
                      >
                        Residential Address *
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter complete address"
                      ></textarea>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-purple-700 mb-1"
                      >
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter contact number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="grade"
                        className="block text-sm font-medium text-purple-700 mb-1"
                      >
                        Class Applying For *
                      </label>
                      <select
                        id="grade"
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select class</option>
                        <option value="Pre-Primary (Nursery, LKG, UKG)">
                          Pre-Primary (Nursery, LKG, UKG)
                        </option>
                        <option value="Primary (1-5)">Primary (1-5)</option>
                        <option value="Secondary (6-10)">
                          Secondary (6-10)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-purple-700 mb-1"
                      >
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Any additional information or questions"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-3 px-6 rounded-full transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Submit Admission Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Admission;
