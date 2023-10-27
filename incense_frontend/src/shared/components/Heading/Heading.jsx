import './Heading.css';

export const Heading = ({ text, align }) => {
  return (
    <>
      <div style={{ textAlign: align ? align : 'left' }}>
        <h1>{text}</h1>
      </div>
    </>
  );
};
