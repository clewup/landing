const Introduction = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="mt-52 mb-28 w-2/5">
        <p className="text-4xl italic">
          Nobody cares how much you know, until they know how much you care.
        </p>
      </div>
      <div className="w-2/3 h-1/2 bg-branding-purple relative">
        <h1 className="absolute text-black text-center text-4xl p-10 font-bold">
          Featured Project
        </h1>
      </div>
    </div>
  );
};

export default Introduction;
