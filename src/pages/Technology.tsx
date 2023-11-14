import { useState } from 'react';
import SubNavBar from '../components/SubNavBar/SubNavBar';
import Subheading from '../components/Subheading/Subheading';
import ITechnology from '../types/ITechnology';

interface Props {
  PageData: ITechnology[];
}

const Technology = ({ PageData }: Props) => {
  const [navState, setNavState] = useState<string>(
    PageData[0].name.toLowerCase()
  );

  const navStateHandler = (currentState: string) => {
    setNavState(() => currentState);
  };

  const technology = PageData.map((data, key: number) => {
    if (data.name.toLowerCase() === navState)
      return (
        <div key={key}>
          <div>
            <Subheading />
            <div>
              <SubNavBar
                subNavType="buttons"
                PageData={PageData}
                navState={navState}
                setNavState={navStateHandler}
              />
              <div>
                <p className="nav-text">THE TERMINOLOGY...</p>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          </div>
          <img src={data.images.landscape} />
        </div>
      );
  });

  return (
    <section>
      <h2>hihihi</h2>
      {technology.filter(html => {
        if (html !== undefined) return html;
      })}
    </section>
  );
};

export default Technology;
