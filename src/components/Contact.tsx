import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-school-600" />,
      title: 'Phone',
      details: ['7330955923'],
    },
    {
      icon: <Mail size={24} className="text-school-600" />,
      title: 'Email',
      details: ['swarnabarathikgm@gmail.com'],
    },
    {
      icon: <MapPin size={24} className="text-school-600" />,
      title: 'Address',
      details: [
        'Swarna Bharathi Play & High School',
        'SCB Nagar, NH 30',
        'Ramavaram, Telangana 507118',
      ],
    },
    {
      icon: <Clock size={24} className="text-school-600" />,
      title: 'Office Hours',
      details: ['Monday–Saturday: Open until 5:30 PM'],
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-school-50 to-white py-20 pt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600">
                We're here to answer any questions you may have about Swarna
                Bharathi High School.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center"
                >
                  <div className="inline-block p-4 rounded-full bg-school-100 mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-md p-4">
                    Thank you for your message! We will get back to you as soon
                    as possible.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-500"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-school-600 hover:bg-school-700 text-white py-3 px-6 rounded-md transition-colors duration-200 font-medium"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.448825429235!2d80.62816707501634!3d17.532452783544254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a341757b2490383%3A0xfc65fd9ae839e390!2sSwarna%20Bharathi%20High%20School!5e0!3m2!1sen!2sin!4v1713093423943!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Swarna Bharathi Play & High School Location"
                  ></iframe>
                </div>
                <p className="mt-4 text-gray-600">
                  Visit us at Swarna Bharathi Play & High School, located in SCB Nagar
                  along NH 30, Ramavaram, Telangana 507118. We’re easily
                  accessible from the National Highway and open Monday through
                  Saturday until 5:30 PM.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
