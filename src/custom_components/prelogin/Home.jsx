import React from 'react';
import SearchBox from './SearchBox';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const Home = () => {
  const cardsData = [
    {
      title: 'Image Enhancement using ML',
      description: '',
      image: require('../../assets/images/paper-photo.jpg'), // Local image
    },
    {
      title: 'Portfolio Website Development using React.js',
      description: '',
      image: require('../../assets/images/paper-photo.jpg'), // Local image
    },
    {
      title: 'Attention Mechanism Implementation',
      description: '',
      image: require('../../assets/images/paper-photo.jpg'), // Local image
    },
  ];

  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
    // Add logic here to filter or fetch search results
  };

  return (
    <div className="home bg-black text-white min-h-screen px-4 py-8">
      <header className="home-header text-center max-w-3xl mx-auto py-12">
        <h2 className="text-4xl font-bold mb-4">REC Kannauj</h2>
        <h3 className="text-3xl font-semibold text-gray-300 mb-6">
          Academic Reports and Research Papers' Platform
        </h3>
        <p className="text-xl text-gray-400 mb-8">
          Look for any pertinent research papers and project reports here.
        </p>
        <SearchBox className="bg-slate-400 rounded" onSearch={handleSearch} />
      </header>
      <div className="flex justify-center flex-wrap gap-10 mt-10">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="max-w-xs rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <CardMedia
              component="img"
              alt={card.title}
              height="185"
              image={card.image}
              className="object-cover"
            />
            <CardContent className="p-4">
              <Typography variant="h5" className="text-xl font-bold text-gray-900">
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                className="text-sm text-gray-600 mt-2"
              >
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
