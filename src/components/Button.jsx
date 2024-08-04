const Button = ({ flipCoin, disabled }) => {
  return (
    <button
      onClick={flipCoin}
      disabled={disabled}
      className={`bg-slate-600 text-white text-2xl px-8 py-2 rounded-xl ${
        disabled ? "bg-gray-500 cursor-not-allowed" : "hover:bg-slate-700"
      }`}
    >
      Flip
    </button>
  );
};

export default Button;
