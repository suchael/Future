import "./../Styles/Newarrival.css";
// eslint-disable-next-line react/prop-types
const Title = ({ text1, text2 }) => {
  return (
    <div className="title">
      <p className="title-text">
        {text1} <span>{text2}</span>
      </p>
      <p className="title-text-sub">Introducing our latest products</p>
    </div>
  );
};

export default Title;
