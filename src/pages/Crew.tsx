import { useState } from 'react';
import SubNavBar from '../components/SubNavBar/SubNavBar';
import Subheading from '../components/Subheading/Subheading';
import ICrew from '../types/ICrew';
import './Crew.scss';

interface Props {
  PageData: ICrew[];
}

const Crew = ({ PageData }: Props) => {
  const [navState, setNavState] = useState<string>(
    PageData[0].name.toLowerCase()
  );

  const navStateHandler = (currentState: string) => {
    setNavState(() => currentState);
  };

  const crew = PageData.map((data, key: number) => {
    if (data.name.toLowerCase() === navState)
      return (
        <div key={key} className="crew-content">
          <div className="crew-wrapper">
            <Subheading />
            <div className="crew-descriptions">
              <h4>{data.role}</h4>
              <h3>{data.name}</h3>
              {data.name !== 'Victor Glover' ? (
                <p className="crew-bio">{data.bio}</p>
              ) : (
                <p className="crew-bio crew-bio--longer">{data.bio}</p>
              )}
            </div>
            <SubNavBar
              subNavType="dots"
              PageData={PageData}
              navState={navState}
              setNavState={navStateHandler}
            />
          </div>
          <img className="crew-img" src={data.images.webp} />
        </div>
      );
  });

  return (
    <section className="crew-container">
      {crew.filter(html => {
        if (html !== undefined) return html;
      })}
    </section>
  );
};

export default Crew;
