const Skills = () => {

  return (
    <div className="w-1/2 px-5 py-8 bg-[#f2e9df] rounded-2xl shadow  flex" data-aos='slide-up' >
      <div className="flex gap-25 items-center">
        <div className="md:col-span-1 flex items-start md:items-center ">
          <h2 className="text-xl font-semibold text-[#593F2C] px-5">Skills</h2>
        </div>
        <div className=" grid grid-cols-2 gap-5" data-aos='zoom-in'>
            <p className="skill transition durstion-300 ease-in-outhover:-translate-y-1 hover:scale-110 ">HTML</p>
            <p className="skill transition durstion-300 ease-in-outhover:-translate-y-1 hover:scale-110 ">CSS</p>
            <p className="skill transition durstion-300 ease-in-outhover:-translate-y-1 hover:scale-110 ">JavaScript</p>
            <p className="skill transition durstion-300 ease-in-outhover:-translate-y-1 hover:scale-110 ">React</p>
            <p className="skill transition durstion-300 ease-in-outhover:-translate-y-1 hover:scale-110 ">TailwindCSS</p>
        </div>

        
        
      </div>
    </div>
  );
};

export default Skills;

