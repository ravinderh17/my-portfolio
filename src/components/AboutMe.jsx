export default function AboutMe() {
    return (
      <div className="">
        <h2 className="text-5xl font-semibold text-center">About Me.</h2>
        <div className="flex flex-col sm:flex-row">
       
        <div className=" p-4 flex-2 text-justify">  
          
          <p className="my-4 text-lg">Hello! I&apos;m Ravinder Kaur, a skilled MERN stack developer dedicated to crafting exceptional digital experiences. With a blend of frontend finesse and backend robustness, I specialize in building dynamic web applications that not only meet but exceed client expectations.</p>
          <p className="mb-4 text-lg font-normal">Currently open to both internship and full-time roles, I am eager to collaborate with innovative teams that value creativity, dedication, and continuous learning. Let&apos;s connect and explore how we can create impactful digital solutions together.</p>
        </div>
        <div className=" p-4 flex items-center justify-center flex-1">
          <img 
            src="/public/assets/resume=photo.png" 
            alt="AboutMe-Image" 
            className="max-w-md rounded-3xl"
          />
        </div>
</div>
      </div>
    )
  }
  