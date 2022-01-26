import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPOD } from '../store/nasaPics';

export const Home = (props) => {
  const dispatch = useDispatch();
  const nasaData = useSelector((state) => state.nasaPics);

  useEffect(() => {
    dispatch(fetchAPOD());
  }, []);

  console.log('DATA HERE', nasaData);

  return (
    <div>
      <h3>NASA's Astronomy Picture of the Day</h3>
      <h4>API STUFF HERE {nasaData.title}</h4>
    </div>
  );
};

export default Home;
