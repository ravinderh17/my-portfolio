export default function Projects() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Personal Projects
        </h1>
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-700 sm:text-xl/8">
          Below is the selection of recent projects that I&apos;ve worked on.
        </p>
        <div className="mt-8 mx-10 flex-wrap flex gap-x-2 justify-between gap-y-4 sm:items-center">
          {/* Project Card Component */}
          {[
            {
              title: "PrimeHomes",
              type: "WEB APP",
              github: "https://github.com/ravinderh17/PrimeHomes_Full-Stack_WebApp",
              liveDemo: "https://primehomes.onrender.com/",
              image: "/Primehomes-landing-page.png",
              description:
                "A comprehensive Real Estate WebApp designed to provide users with a seamless property searching and management experience.",
              tags: ["ReactJS", "TailwindCSS", "NodeJS"],
            },
            {
              title: "Personal Portfolio",
              type: "WEBSITE",
              github: "",
              liveDemo: "#",
              image: "/portfolio.png",
              description: "This project showcases a modern design and smooth user experience to highlight personal skills, projects, and professional achievements. ",
              tags: ["ReactJS", "Tailwind CSS"],
            },
            {
              title: "Product List and Cart",
              type: "WEB APP",
              github: "https://github.com/ravinderh17/react-shopping-cart",
              liveDemo: "https://react-shopping-cart-kappa-six.vercel.app/",
              image: "/Product-Cart-homepage.PNG",
              description:
                "A fully functional prototype demonstrating the core functionality of a shopping cart system for an e-commerce platform, built using ReduxToolKit.",
              tags: ["ReactJS", "Redux"],
            },
            {
              title: "DevPen - Code Editor",
              type: "WEB APP",
              github: "https://github.com/ravinderh17/Code_Editor_Application",
              liveDemo: "http://codepen-clone-f0ca8.web.app/",
              image: "/code-editor-ss.png",
              description:
                "Developed a real-time code editor application facilitating live editing with instant preview functionality for different programming languages code.",
              tags: ["ReactJS", "MaterialUI"],
            },
            {
              title: "BOGO Pricing Selector",
              type: "WEB APP",
              github: "https://github.com/ravinderh17/proveway-assignment",
              liveDemo: "https://ravinderh17.github.io/proveway-assignment/",
              image: "/BOGO.png",
              description:
                "A pricing and cart prototype, demonstrates responsive design and an interactive user experience with a &ldquo;Buy One Get One&rdquo; (BOGO) promotion feature.",
              tags: ["JavaScript"],
            },
            {
              title: "Responsive Testimonial Portal",
              type: "WEB APP",
              github: "https://github.com/ravinderh17/ResponsiveTestimonialPortal",
              liveDemo: "https://ravinderh17.github.io/ResponsiveTestimonialPortal/",
              image: "/reviews (2).png",
              description:
                "A fully responsive portal designed to showcase user testimonials. This lightweight project features a clean layout and dynamic styling, making it perfect for modern websites.",
              tags: ["CSS (Flexbox)"],
            },
            {
              title: "ExcelEase Data Manager",
              type: "GUI APP",
              github: "https://github.com/ravinderh17/ExcelEase_Data_Manager",
              liveDemo: "",
              image: "/data-manager-python-ss.png",
              description:
                "ExcelEase is a user-friendly application, developed for Excel management to provide users with a seamless and intuitive experience for viewing and entering data.",
              tags: ["Python", "Tkinter"],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="max-h-[480px] max-w-sm flex flex-col rounded-lg text-left"
            >
              <a href={project.liveDemo || project.github}>
                <img
                  className="h-[200px] rounded-xl drop-shadow-xl w-[390px]"
                  src={project.image}
                  alt={project.title}
                />
              </a>
              <div className="px-4 py-1.5 pt-4 rounded-xl relative z-10 mx-8 bottom-16 bg-white drop-shadow-2xl">
                <div className="flex justify-between text-sm uppercase">
                  <p>{project.type}</p>
                  <a href={project.github} className="hover:underline">
                    <span>Github</span>
                  </a>
                </div>
                <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900">
                  {project.title}
                </h5>
                <div className="flex gap-x-4 text-xxs">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="p-1 bg-red-200 text-black">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="my-3 text-md font-normal">{project.description}</p>
                <a
                  href={project.liveDemo || project.github}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                >
                  <span className="relative flex px-3 py-2 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
                    {project.liveDemo ? "Live Demo" : "See Code"}
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
