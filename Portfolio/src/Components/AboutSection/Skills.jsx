const Skills = () => {

  return (
    <div className="w-1/2 px-5 py-8 bg-rose-50 rounded-2xl shadow  flex" data-aos='slide-up' >
      <div className="flex gap-30 items-center">
        <div className="md:col-span-1 flex items-start md:items-center">
          <h2 className="text-xl font-semibold text-rose-500 px-5">Skills</h2>
        </div>

        <div className=" grid grid-cols-2 gap-5" data-aos='zoom-in'>
            <p className="skill transition durstion-300 ease-in-outhover:-translate-y-1 hover:scale-110 text-[#212842]">HTML</p>
            <p className="skill transition durstion-300 ease-in-outhover:-translate-y-1 hover:scale-110 text-[#212842]">CSS</p>
            <p className="skill transition durstion-300 ease-in-outhover:-translate-y-1 hover:scale-110 text-[#212842]">JavaScript</p>
            <p className="skill transition durstion-300 ease-in-outhover:-translate-y-1 hover:scale-110 text-[#212842]">React</p>
            <p className="skill transition durstion-300 ease-in-outhover:-translate-y-1 hover:scale-110 text-[#212842]">TailwindCSS</p>
        </div>

        
        
      </div>
    </div>
  );
};

export default Skills;

