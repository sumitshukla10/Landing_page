import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Heart, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "My Mission",
      description: "To empower individuals and organizations with essential soft skills that drive success, foster meaningful connections, and create positive workplace cultures."
    },
    {
      icon: Users,
      title: "Who I Help",
      description: "Corporate teams, emerging leaders, professionals seeking career advancement, and organizations looking to enhance their human capital development."
    },
    {
      icon: Heart,
      title: "How I Work",
      description: "Through interactive workshops, personalized coaching sessions, and evidence-based methodologies that create lasting behavioral change and measurable results."
    },
    {
      icon: Award,
      title: "My Approach",
      description: "Combining psychology, neuroscience, and practical application to deliver training that's engaging, memorable, and immediately applicable in real-world scenarios."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With over 8 years of experience in soft skill development, I've had the privilege of working with 
            diverse professionals across industries, helping them unlock their potential and achieve remarkable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-indigo-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2"
            >
              5000+
            </motion.div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Professionals Trained</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2"
            >
              50+
            </motion.div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Corporate Partners</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2"
            >
              95%
            </motion.div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Success Rate</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2"
            >
              8+
            </motion.div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;