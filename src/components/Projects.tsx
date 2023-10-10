import adminDashboard from "../assets/projects/Admin Dashboard.png";
import chatty from "../assets/projects/Chatty.png";
import dreamDwell from "../assets/projects/Dream Dwell.png";
import nike from "../assets/projects/Nike Landing Page.png";
import productPulse from "../assets/projects/Product Pulse.png";
import threads from "../assets/projects/Threads Clone.png";

type Project = {
  id: number;
  src: string;
  github: string;
  demo: string;
};

export default function Projects() {
  const pojects: Project[] = [
    {
      id: 1,
      src: adminDashboard,
      github: "https://github.com/HasanDiab19/Admin-Dashboard",
      demo: "https://admin-dashboard-6oxr.onrender.com/",
    },
    {
      id: 2,
      src: chatty,
      github: "https://github.com/HasanDiab19/MERN-Chat-App",
      demo: "https://chatty-hd-nk5o.onrender.com/",
    },
    {
      id: 3,
      src: dreamDwell,
      github: "https://github.com/HasanDiab19/DreamDwell",
      demo: "https://dreamdwell.onrender.com/",
    },
    {
      id: 4,
      src: productPulse,
      github: "https://github.com/HasanDiab19/ProductPulse",
      demo: "https://productpulse.onrender.com/ ",
    },
    {
      id: 5,
      src: nike,
      github: "https://github.com/HasanDiab19/Nike",
      demo: "https://react-nikehd-app.netlify.app/",
    },
    {
      id: 6,
      src: threads,
      github: "https://github.com/HasanDiab19/Threads-Clone-With-Private-Chat",
      demo: "https://threads-hd.onrender.com/",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        {/* project card section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {pojects.map(({ id, src, demo, github }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt="project"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  className="text-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  text-cyan-500"
                  target="_blank"
                  rel="noreferrer"
                  href={demo}
                >
                  Demo
                </a>
                <a
                  className="text-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                  href={github}
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
