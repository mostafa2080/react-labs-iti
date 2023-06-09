import './btn.css';

const Button = ({ text, onClick }) => (
  <button className="custom-button" onClick={onClick}>
    {text}
  </button>
);

export default Button;