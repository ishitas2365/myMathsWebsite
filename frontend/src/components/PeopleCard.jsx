import { Link } from 'react-router-dom';

const PeopleCard = ({ designation, number, imgSrc, navigateto }) => {
  return (
    <Link
      to={navigateto}
      className="bg-white shadow-md flex flex-col items-center justify-between p-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-1 min-h-[450px]"
    >
      <div className="w-full h-[200px] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={imgSrc}
          alt={`${designation}-image`}
        />
      </div>

      <div className="text-5xl text-cyan-500 font-bold mt-4">{number}</div>

      <div className="text-[18px] w-full text-white bg-[#040C3D] rounded-lg text-center mt-2 leading-tight min-h-[60px] flex items-center justify-center text-ellipsis overflow-hidden text-nowrap">
        {designation}
      </div>
    </Link>
  );
};

export default PeopleCard;
