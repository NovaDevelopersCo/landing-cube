import Image from 'next/image';

interface ServiceItemProps {
  icon: string;
  mainText: string;
  subText: string;
}

const ServiceItem = ({ icon, mainText, subText }: ServiceItemProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 text-center">
      <Image src={icon} width={69} height={69} alt="Service Icon" />
      <h2 className="text-base tracking-[-0.75px] font-semibold text-white">
        {mainText}
      </h2>
      <p className="text-white/70 text-sm tracking-[-0.5px]">{subText}</p>
    </div>
  );
};

export default ServiceItem;
