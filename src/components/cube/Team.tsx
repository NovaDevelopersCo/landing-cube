export const Team = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row gap-[30px] md:gap-6 mb-[50px]">
        <h2 className="flex-1 text-2xl font-bold text-white">
          Why Nova Is The Best Choice?
        </h2>
        <p className="flex-1  text-white/70 text-sm tracking-[-0.657px]">
          Watch this one minute video so you understand why you should use our
          services!
        </p>
      </div>

      <video
        width="1260"
        height="670"
        controls={true}
        autoPlay={false}
        src="/video/sample.mp4"
      ></video>
    </div>
  );
};
