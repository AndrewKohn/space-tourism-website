import { useLocation } from 'react-router-dom';
import './Subheading.scss';

const Subheading = () => {
  const location = useLocation().pathname;

  const destinationHeading = (
    <h5>
      <span>01</span> PICK YOUR DESTINATION
    </h5>
  );

  const crewHeading = (
    <h5>
      <span>02</span> MEET YOUR CREW
    </h5>
  );

  const technologyHeading = (
    <h5>
      <span>03</span> SPACE LAUNCH 101
    </h5>
  );

  return (
    <>
      {location === '/destination' ? destinationHeading : ''}
      {location === '/crew' ? crewHeading : ''}
      {location === '/technology' ? technologyHeading : ''}
    </>
  );
};

export default Subheading;
