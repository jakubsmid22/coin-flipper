import headImg from "../assets/head.png";
import tailImg from "../assets/tail.png";
import './Coin.css';

const Coin = ({animating, site}) => {

  return (
    <div className={`coin w-80 h-80 ${animating ? 'spinning' : ''}`}>
      <div className="coin-inner relative w-full h-full">
        <div className={`${site && 'rotate'} coin-front`}>
          <img src={headImg} alt="Head" />
        </div>
        <div className={`${!site && 'rotate'} coin-back`}>
          <img src={tailImg} alt="Tail" />
        </div>
      </div>
    </div>
  );
};

export default Coin;
