import './Heading.css';
import imageUnderline from '../../../assets/image-removebg-preview.png';

export const Heading = ({ text, align }) => {
  return (
    <>
      <img className = "image-underline" src={imageUnderline} alt="" />
      <div className="heading">
        <h1>{text}</h1>
      </div>
    </>
  );
};
