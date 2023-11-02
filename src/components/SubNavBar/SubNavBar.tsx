import { useEffect } from 'react';
import IDestination from '../../types/IDestination';
import './SubNavBar.scss';
import ICrew from '../../types/ICrew';
import ITechnology from '../../types/ITechnology';

interface Props {
  subNavType: string;
  PageData: IDestination[] | ICrew[] | ITechnology[];
  navState: string | undefined;
  setNavState: (currentState: string) => void;
}

const SubNavBar = ({ subNavType, PageData, navState, setNavState }: Props) => {
  useEffect(() => {
    if (navState === undefined) setNavState(PageData[0].name.toLowerCase());
  });

  const links = PageData.map((data, key: number) => (
    <li key={key}>
      <button
        className={`${subNavType === 'string' ? 'nav--string' : ''} ${
          subNavType === 'dots' ? 'nav--dots' : ''
        } ${subNavType === 'buttons' ? 'nav--buttons' : ''} ${
          navState === data.name.toLowerCase() ? 'sub-nav--active' : ''
        }`}
        onClick={() => setNavState(data.name.toLowerCase())}
      >
        {subNavType === 'string' ? <p className="nav-text">{data.name}</p> : ''}
        {subNavType === 'buttons' ? key + 1 : ''}
      </button>
    </li>
  ));

  return (
    <nav aria-label="sub-navigation" className="sub-nav">
      <ul className="sub-nav--links ">{links}</ul>
    </nav>
  );
};

export default SubNavBar;
