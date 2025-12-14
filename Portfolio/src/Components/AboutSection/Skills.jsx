const Skills = () => {

  return (
    <div className="flex flex-col items-center py-8" >
      
      <h2 className="text-3xl text-[#520309] font-bold">Skills</h2>
      
      <div className="flex gap-10 py-10 text-[#fff4e4] tracking-wider">
        <p data-aos='fade-up' className="skill transition durstion-600 ease-in-out hover:-translate-y-3 hover:scale-120">HTML</p>
        <p data-aos='fade-up' className='skill transition durstion-600 ease-in-out hover:-translate-y-3 hover:scale-120'>CSS3</p>
        <p data-aos='fade-up' className="skill transition durstion-600 ease-in-out hover:-translate-y-3 hover:scale-120">JavaScript</p>
        <p data-aos='fade-up' className='skill transition durstion-600 ease-in-out hover:-translate-y-3 hover:scale-120'>React</p>
        <p data-aos='fade-up' className="skill transition durstion-600 ease-in-out hover:-translate-y-3 hover:scale-120">Tailwind CSS</p>
      </div>
    </div>
  );
};

export default Skills;

