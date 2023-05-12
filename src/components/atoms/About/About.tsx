const About = () => {
  return (
    <div className="w-screen h-[50vh] flex justify-center items-center gap-10">
      <div className="w-1/3">
        <p className=" text-2xl">
          Working at the intersection of creativity and user experience, I aim
          to provide memorable experiences with functionality that supports
          business growth.
        </p>
      </div>
      <div className="w-1/3 flex flex-col items-end gap-20">
        <span>
          <h2 className="text-4xl font-bold">SERVICES</h2>
          <span className="text-2xl">
            <p>UI/UX Development</p>
            <p>API Development</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default About;
