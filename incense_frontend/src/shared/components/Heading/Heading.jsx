import './Heading.css';
import imageUnderline from '../../../assets-compressed/image-removebg-preview.png';
import brahma from '../../../assets-compressed/brahma-removebg-preview.png';
import vishnu from '../../../assets-compressed/vishnu-removebg-preview.png';
import mahesh from '../../../assets-compressed/mahesh-removebg-preview.png';

export const Heading = ({ text }) => {
  return (
    <>
      <span className="flex flex-row xs:min-w-[40px] max-w-[70px] god">
        <img src={brahma} />
        <img src={vishnu} />
        <img src={mahesh} />
      </span>
      <span className="flex flex-row xs:min-w-[40px] max-w-[70px] god  md:text-[16px]">
        <h4 className="mx-2">Brahma</h4>
        <h4 className="mx-2">Vishnu</h4>
        <h4 className="mx-2">Mahesh</h4>
      </span>
      <img className="image-underline" src={imageUnderline} alt="" />
      <div className="heading">
        <h1>{text}</h1>
      </div>
    </>
  );
};
