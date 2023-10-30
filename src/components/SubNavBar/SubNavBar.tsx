import { useState } from 'react';
import IDestination from '../../types/IDestination';
import './SubNavBar.scss';
import ICrew from '../../types/ICrew';
import ITechnology from '../../types/ITechnology';

interface Props {
  subNavType: string;
  PageData: IDestination[] | ICrew[] | ITechnology[];
}

const SubNavBar = ({ subNavType, PageData }: Props) => {
  const [navState, setNavState] = useState<string>(
    PageData[0].name.toLowerCase()
  );

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
        {subNavType === 'string' ? data.name : ''}
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
