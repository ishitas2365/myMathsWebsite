import { Link } from 'react-router-dom';

const PeopleCard = ({ designation, number, imgSrc,navigateto }) => {
  return (
    <Link
      to={navigateto}
      className="bg-white shadow-md flex flex-col gap-6 items-center justify-between p-3 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-1"
    >
        <img className="rounded-lg h-[300px]" src={imgSrc} alt={`${designation}-image`} />
      <div className='flex-1'>
      </div>
      <div className="text-5xl text-cyan-500 font-bold">{number}</div>
      <div className="text-3xl w-full text-white bg-[#040C3D] py-2 px-4 rounded-lg text-center">
        {designation}
      </div>
    </Link>
  );
};

export default PeopleCard;
