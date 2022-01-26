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
      <iframe width="750" height="500" src={`${videoURL}&autoplay=1&loop=1`} />
    </div>
  );
};

export default Home;
