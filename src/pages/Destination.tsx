import { useState } from 'react';
import SubNavBar from '../components/SubNavBar/SubNavBar';
import Subheading from '../components/Subheading/Subheading';
import IDestination from '../types/IDestination';
import './Destination.scss';

interface Props {
  PageData: IDestination[];
}

const Destination = ({ PageData }: Props) => {
  const [navState, setNavState] = useState<string>(
    PageData[0].name.toLowerCase()
  );

  const navStateHandler = (currentState: string) => {
    setNavState(() => currentState);
  };

  const destination = PageData.map((data, key: number) => {
    if (data.name.toLowerCase() === navState)
      return (
        <div key={key} className="destination-content">
          <Subheading />
          <div className="destination-wrapper">
            <img className="destination-img" src={data.images.webp} />
            <div className="destination-descriptions">
              <SubNavBar
                subNavType="string"
                PageData={PageData}
                navState={navState}
                setNavState={navStateHandler}
              />
              <div className="destination--text-wrapper">
                <h2>{data.name}</h2>
                <p className="destination--description">{data.description}</p>
                <hr className="divider" />
                <div className="destination--details">
                  <div>
                    <p className="subheading-2">AVG. DISTANCE</p>
                    <p className="subheading-1">{data.distance}</p>
                  </div>
                  <div>
                    <p className="subheading-2">EST. TRAVEL TIME</p>
                    <p className="subheading-1">{data.travel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  });

  return (
    <section className="destination-container">
      {destination.filter(html => {
        if (html !== undefined) return html;
      })}
    </section>
  );
};

export default Destination;
