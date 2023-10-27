import LightGallery from 'lightgallery/react';
import img1 from '../../assets/1st.jpg';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export const Gallery = () => {
  return (
    <div className="container flex mx-2.5 sm:mx-10 flex-wrap">
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href={img1} className='inline-block p-2.5'>
          <img alt="img1" src={img1} className="h-40" />
        </a>
        <a href={img1} className='inline-block p-2.5'>
          <img alt="img1" src={img1} className="h-40" />
        </a>
        <a href={img1} className='inline-block p-2.5'>
          <img alt="img1" src={img1} className="h-40" />
        </a>
        <a href={img1} className='inline-block p-2.5'>
          <img alt="img1" src={img1} className="h-40" />
        </a>
        <a href={img1} className='inline-block p-2.5'>
          <img alt="img1" src={img1} className="h-40" />
        </a>
        <a href={img1} className='inline-block p-2.5'>
          <img alt="img1" src={img1} className="h-40" />
        </a>
        <a href={img1} className='inline-block p-2.5'>
          <img alt="img1" src={img1} className="h-40" />
        </a>
      </LightGallery>
    </div>
  );
};
