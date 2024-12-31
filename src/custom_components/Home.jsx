import React from 'react';
import SearchBox from './SearchBox';
import './Home.css'; // Optional: Add styling for your homepage
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const Home = () => {

  const cardsData = [
    { title: 'Research Paper 1', description: 'Upload or view research papers.', image: '../images/research_paper1.jpg' },
    { title: 'Research Paper 2', description: 'Upload or view research papers.', image: 'url-to-image-2' },
    { title: 'Research Paper 3', description: 'Upload or view research papers.', image: 'url-to-image-3' },
  ];

    const handleSearch = (query) => {
        console.log(`Searching for: ${query}`);
        // Add logic here to filter or fetch search results
      };

  return (
    <div className="home my-10 rounded-lg w-[80%]">
      <header className="home-header">
        <h2>REC Kannauj</h2>
        <h3>'Academic Reports and Research Papers' Platform'</h3>
        <p>Look for any pertinent research papers and project reports here.</p>
        <SearchBox className="bg-slate-400" onSearch={handleSearch} />
      </header>
      <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
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