import Image from 'next/image';

export const About = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-semibold text-left">Our History</h2>
      <div className="flex gap-5">
        <Image
          className="rounded-md w-1/2"
          width={300}
          height={300}
          alt="about"
          src="/img/aboutpage.png"
        />
        <p className="w-1/2 text-white/70 text-sm">
          Our company, Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloremque ut corrupti enim voluptas qui! Eius reiciendis
          exercitationem enim voluptate animi? Lorem ipsum dolor sit amet.
        </p>
      </div>
      <p className="w-full text-white/70 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
        ducimus dolores. Officiis repudiandae consectetur accusantium repellat a
        nihil numquam doloribus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Minima illo officia amet exercitationem unde.
      </p>
    </div>
  );
};
