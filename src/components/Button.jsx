
const Button = ({flipCoin}) => {
  return (
    <button onClick={flipCoin} className="bg-slate-600 text-white text-2xl px-8 py-2 rounded-xl">
        Flip
    </button>
  )
}

export default Button