import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9932978825',
      href: 'tel:+919932978825',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'ramiz.dev01@gmail.com',
      href: 'mailto:ramiz.dev01@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'West Bengal, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative ideas, or potential collaborations. 
                  Whether you have a project in mind or just want to say hello, don't hesitate to reach out.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg group-hover:scale-110 transition-transform">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{info.title}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-all duration-300"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-all duration-300"
                    placeholder="Subject"
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-all duration-300 resize-none"
                    placeholder="Your Message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;