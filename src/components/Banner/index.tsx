import cerealGrains from '../../assets/cerealGrains.jpg'

const Banner = () => {
  return (
    <div>
      <img className='w-full md:h-[50vh] object-cover' src={cerealGrains} alt="Cereais" />
    </div>
  );
};

export default Banner;