import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  /* ---------------------------  State  --------------------------- */
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ------------------------  Handlers  --------------------------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzdznzro';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;        // guard against double‑clicks
    setIsSubmitting(true);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: 'Portfolio contact',
        }),
      });

      if (res.ok) {
        toast.success("Message sent! I'll reply soon.", {
          position: 'bottom-right',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const { message } = await res.json().catch(() => ({}));
        throw new Error(message || 'Something went wrong.');
      }
    } catch (err: any) {
      toast.error(err.message || 'Network error. Please try again later.', {
        position: 'bottom-right',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------------------  UI  ------------------------------ */
  return (
    <section id="contact" className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* -------------------  Left Column (Info)  ------------------- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm currently seeking full‑time Data Engineer position.
              Feel free to message me below, or connect via LinkedIn/GitHub.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:pulishashank9@gmail.com"
                    className="text-cyan-400 hover:underline"
                  >
                    pulishashank9@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:+14842781189"
                    className="text-cyan-400 hover:underline"
                  >
                    +1 (484) 278-1189
                  </a>
                </div>
              </div>
            </div>

            <div className="flex space-x-5 mt-8">
              <a
                href="https://github.com/pulishashank8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shashank-puli/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* -------------------  Right Column (Form) ------------------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </section>
  );
};

export default ContactSection;
