import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';


const Home = () => {
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;