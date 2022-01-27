import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPOD } from '../store/nasaPics';

export const Home = (props) => {
  const dispatch = useDispatch();
  const nasaData = useSelector((state) => state.nasaPics);

  useEffect(() => {
    dispatch(fetchAPOD());
  }, []);

  const videoURL = nasaData.url;

  return (
    <div>
      <h3>NASA's Astronomy Picture of the Day</h3>
      <h4>{nasaData.title}</h4>
      {nasaData.media_type === 'image' ? (
        <img src={nasaData.url} width="750" height="500" />
      ) : (
        <iframe
          width="750"
          height="500"
          src={`${videoURL}&autoplay=1&loop=1`}
        />
      )}
      <h4>{nasaData.explanation}</h4>
    </div>
  );
};

export default Home;
