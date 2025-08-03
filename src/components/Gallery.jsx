import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('images');

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      alt: "Workshop Session 1",
      title: "Leadership Workshop"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      alt: "Team Building Session",
      title: "Team Building Exercise"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
      alt: "Presentation Training",
      title: "Presentation Skills Training"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
      alt: "Corporate Training",
      title: "Corporate Training Session"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg",
      alt: "One-on-One Coaching",
      title: "Personal Coaching"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
      alt: "Group Discussion",
      title: "Interactive Discussion"
    }
  ];

  const videos = [
    {
      id: 1,
      thumbnail: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg",
      title: "Communication Mastery Workshop",
      duration: "5:30"
    },
    {
      id: 2,
      thumbnail: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      title: "Leadership Development Session",
      duration: "8:15"
    },
    {
      id: 3,
      thumbnail: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
      title: "Emotional Intelligence Training",
      duration: "6:45"
    },
    {
      id: 4,
      thumbnail: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg",
      title: "Team Collaboration Workshop",
      duration: "7:20"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Training <span className="text-indigo-600 dark:text-indigo-400">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Glimpses from my workshops, coaching sessions, and training programs
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('images')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'images'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              <ImageIcon size={20} />
              Images
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'videos'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              <Play size={20} />
              Videos
            </button>
          </div>
        </div>

        {/* Images Grid */}
        <AnimatePresence mode="wait">
          {activeTab === 'images' && (
            <motion.div
              key="images"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white dark:bg-gray-900 rounded-full p-3">
                        <ImageIcon className="w-6 h-6 text-gray-900 dark:text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold">{image.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Videos Grid */}
          {activeTab === 'videos' && (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white dark:bg-gray-900 rounded-full p-4 shadow-lg"
                    >
                      <Play className="w-8 h-8 text-indigo-600 dark:text-indigo-400 ml-1" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold mb-1">{video.title}</h3>
                    <p className="text-gray-200 text-sm">{video.duration}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;