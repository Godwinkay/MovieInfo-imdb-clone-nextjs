import React from 'react';
import { FaVideo, FaTheaterMasks, FaUserFriends, FaSearchDollar } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">About MovieInfo</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaVideo className="text-4xl text-primary mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Comprehensive Movie Database</h2>
            </div>
            <p className="text-gray-700">
              Our website provides a comprehensive database of information on movies, including plot summaries, cast and crew details, reviews, and more. We strive to be your one-stop-shop for all your movie research needs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaTheaterMasks className="text-4xl text-primary mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Movie Recommendations</h2>
            </div>
            <p className="text-gray-700">
              Whether you're looking for the latest blockbuster or a hidden gem, our team of movie experts curates personalized recommendations based on your preferences and viewing history.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaUserFriends className="text-4xl text-primary mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Community Engagement</h2>
            </div>
            <p className="text-gray-700">
              Our website fosters a vibrant community of movie enthusiasts, allowing you to connect with fellow fans, share your thoughts and opinions, and engage in discussions about your favorite films.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaSearchDollar className="text-4xl text-primary mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Monetization Opportunities</h2>
            </div>
            <p className="text-gray-700">
              Our website offers various monetization opportunities for movie-related businesses, such as advertising, affiliate marketing, and partnerships, allowing you to reach a targeted audience and grow your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;