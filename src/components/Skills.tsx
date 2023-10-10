import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import tailwind from "../assets/skills/tailwind.png";
import typescript from "../assets/skills/typescript.png";
import asp from "../assets/skills/asp.png";
import php from "../assets/skills/php.png";
import java from "../assets/skills/java.png";
import mongodb from "../assets/skills/mongodb.png";
import mysql from "../assets/skills/mysql.png";

type Skill = {
  id: number;
  src: string;
  title: string;
  style: string;
};

export default function Skills() {
  const skills: Skill[] = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-700",
    },
    {
      id: 8,
      src: asp,
      title: "ASP.Net Core",
      style: "shadow-purple-700",
    },
    {
      id: 9,
      src: php,
      title: "PHP",
      style: "shadow-purple-400",
    },
    {
      id: 10,
      src: java,
      title: "Java",
      style: "shadow-red-600",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: mysql,
      title: "MySQL",
      style: "shadow-orange-600",
    },
  ];

  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">
            These are some of the technologies I've worked with:
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`px-2 shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt="skill"
                className="w-20 object-contain mx-auto h-20"
              />
              <p className="mt-4 text-xs sm:text-xl">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
