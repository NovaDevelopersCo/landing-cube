import ServiceItem from './ServiceItem';

const ServiceBlock = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full h-full">
      <h2 className="max-w-full text-center text-2xl font-bold text-white">
        The Service We Provide For You
      </h2>

      <div className="flex-1 flex flex-col lg:flex-row justify-center items-baseline gap-6">
        <ServiceItem
          icon="/icons/development.svg"
          mainText="Development"
          subText="Create a platform with the best and coolest quality from us."
        />
        <ServiceItem
          icon="/icons/design.svg"
          mainText="UI/UX Designer"
          subText="We provide UI/UX Design services, and of course with the best quality"
        />
        <ServiceItem
          icon="/icons/graphicDesign.svg"
          mainText="Graphic Designer"
          subText="We provide Graphic Design services, with the best designers"
        />
      </div>
    </div>
  );
};

export default ServiceBlock;
