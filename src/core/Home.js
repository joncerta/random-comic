import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './../styles.scss';
import { getComic } from './apiCore';

const Home = () => {
  const [error, setError] = useState(false);
  const [comic, setComic] = useState({});
  const [value, setValue] = useState(0);

  const loadComic = () => {
    let numberComic = randomNumber();
    console.log('numberComic', numberComic);
    getComic(numberComic).then((data) => {
      console.log('data', data);
      if (data.error) {
        setError(true);
      } else {
        setComic(data);
      }
    });
  };

  const randomNumber = () => {
    return Math.floor(Math.random() * (1000 - 1)) + 1;
  };

  useEffect(() => {
    loadComic();
  }, []);

  return (
    <div className='full-content'>
      <div className='content-comic'>
        <h2 className='mb-4'>{comic.title}</h2>
        <img src={comic.img} alt={comic.alt} />
        <div className='rate'>
          <Box component='fieldset' mb={3} borderColor='transparent'>
            <Rating
              name='simple-controlled'
              size="large"
              value={value}
              onChange={(event, newValue) => {
                localStorage.setItem('comicRate', JSON.stringify({comic: comic.num, rate: newValue}))
                setValue(newValue);
              }}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Home;
