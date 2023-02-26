import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../../context/context';
import teapot from '../../../images/teapot.gif';
import { teapotTimeLimit } from '../../../utils/constants';

export default function TeapotGif() {
  const { timeLimitStep, winner, teamAsistent } = useAppContext();
  const [imgSrc, setImgSrc] = useState(teapot);

  useEffect(() => {
    winner ? setImgSrc(teapotTimeLimit[timeLimitStep]) : setImgSrc(teapot);
  }, [timeLimitStep, winner]);

  return (
    <Box>
      <Typography variant='h2'>{winner}</Typography>
      {teamAsistent.length > 1 ? (
        <img src={imgSrc} alt='teapot' style={{ width: '70%' }} />
      ) : (
        <>
          <img src={teapot} alt='teapot' style={{ width: '90%' }} />
          <Box
            sx={{
              backgroundColor: '#0000003a',
              padding: '1rem',
              textAlign: 'left',
            }}
          >
            <Typography variant='h5'>How start the daily meeting?</Typography>
            <Typography variant='h6'>
              <ol>
                <li>Include all team members in the daily meeting.</li>
                <li>Limit speaking time for each member.</li>
                <li>Decide on how to choose the next facilitator.</li>
                <li>Adjust language settings if necessary.</li>
                <li>
                  Use emojis to add fun to the meeting. Don't forget to share
                  your audio!
                </li>
                <li>Start the daily meeting.</li>
              </ol>
              Note: Your settings are saved locally in the browser.
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
}
