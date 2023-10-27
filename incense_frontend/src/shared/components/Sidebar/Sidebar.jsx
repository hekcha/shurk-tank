import './Sidebar.css';
import { sidebarItems } from '../../constants/index.constants.js';

export const Sidebar = ({ isopen, toggle }) => {
  let opacityClasses = ['sidebar-container'];
  if (isopen) {
    opacityClasses.push('opacity-on');
  } else {
    opacityClasses.push('opacity-off');
  }

  return (
    <div
      className={opacityClasses.join(' ')}
      isopen={isopen.toString()}
      onClick={toggle}
    >
      <div className="icon">
        <span onClick={toggle}>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:[stroke:gray] [stroke:#fff]"
            style={{ strokeWidth: '1.5', strokeLinecap: 'round' }}
          >
            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" />
            <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" />
          </svg>
        </span>
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          {sidebarItems.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
