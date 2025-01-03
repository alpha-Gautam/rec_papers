import React from 'react';
import SearchBox from './SearchBox';
import './Home.css'; // Optional: Add styling for your homepage
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
    <div className="home  w-[100%] h-full">
      <header className="home-header">
        <h2>REC Kannauj</h2>
        <h3>Academic Reports and Research Papers' Platform</h3>
        <p>Look for any pertinent research papers and project reports here.</p>
        <SearchBox className="bg-slate-400" onSearch={handleSearch} />
      </header>
      <div className='flex justify-center flex-wrap gap-[40px]'
        
      >
        {cardsData.map((card, index) => (
          <Card key={index} style={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              alt={card.title}
              height="185"
              image={card.image}
            />
            <CardContent>
              <Typography variant="h5">{card.title}</Typography>
              <Typography variant="body2" color="textSecondary">
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
