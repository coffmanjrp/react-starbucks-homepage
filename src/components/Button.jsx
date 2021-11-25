const Button = ({ text, variant }) => {
  return (
    <button type="button" className={`btn btn-${variant}`}>
      {text}
    </button>
  );
};

export default Button;
