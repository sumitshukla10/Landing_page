import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: "2024 - Present",
      title: "Senior Soft Skills Consultant",
      company: "Global Leadership Institute",
      description: "Leading enterprise-wide transformation programs for Fortune 500 companies, specializing in executive communication and leadership development.",
      icon: TrendingUp,
      achievements: ["Increased team productivity by 40%", "Trained 200+ executives", "Developed proprietary assessment tools"]
    },
    {
      year: "2021 - 2024",
      title: "Corporate Training Specialist",
      company: "Professional Development Corp",
      description: "Designed and delivered comprehensive soft skills curricula for mid-tier organizations across technology and healthcare sectors.",
      icon: Briefcase,
      achievements: ["Trained 2000+ professionals", "98% client satisfaction rate", "Expanded into 15 new markets"]
    },
    {
      year: "2019 - 2021",
      title: "Communication Coach",
      company: "SkillBuilder Academy",
      description: "Provided one-on-one coaching and group workshops focusing on presentation skills, emotional intelligence, and conflict resolution.",
      icon: Users,
      achievements: ["500+ individual coaching sessions", "Launched public speaking program", "Featured speaker at 25+ events"]
    },
    {
      year: "2016 - 2019",
      title: "Junior Training Associate",
      company: "Human Capital Solutions",
      description: "Started my journey in soft skills training, assisting senior trainers and developing foundational expertise in adult learning principles.",
      icon: Award,
      achievements: ["Completed 500+ training hours", "Earned 5 professional certifications", "Mentored 50+ junior professionals"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-indigo-600 dark:text-indigo-400">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A timeline of growth, learning, and impact in the soft skills training industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-indigo-200 dark:bg-indigo-700 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full border-4 border-white dark:border-gray-800 hidden md:block z-10"></div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">
                          <exp.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                          {exp.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-amber-600 dark:text-amber-400 font-medium mb-3">
                          {exp.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;