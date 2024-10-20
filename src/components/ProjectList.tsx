import React from "react";
import projects from "@/mocks/projects";

interface IProjectType {
  type: "client" | "personal" | string;
}

interface IProjectRole {
  role: "FE" | "BE" | string;
}

const ProjectList = () => {
  const Type = ({ type }: IProjectType) => {
    let result: string;
    switch (type) {
      case "client":
        result = "Client project";
        break;
      case "personal":
        result = "Personal project";
        break;
      default:
        return <></>;
    }

    return <p className="px-2 py-1 text-sm text-green-400 bg-green-400/25 rounded-2xl">{result}</p>;
  };

  const Role = ({ role }: IProjectRole) => {
    let result: string;
    switch (role) {
      case "FE":
        result = "FE Dev";
        break;
      case "BE":
        result = "BE Dev";
        break;
      default:
        return <></>;
    }

    return <p className="px-2 py-1 text-sm text-purple-400 bg-purple-400/25 rounded-2xl">{result}</p>;
  };

  return (
    <ul className="h-full px-4 overflow-auto divide-y-2">
      {projects.map((item, index) => (
        <li className="flex gap-4 py-4 first:pt-0 last:pb-0" key={index}>
          <div className="bg-gray-900 size-24 rounded-2xl"></div>
          <div className="flex flex-col flex-1">
            <div className="flex items-center text-lg font-semibold gap-x-2">
              <p className="text-xl">{item.name}</p>
            </div>
            <div className="flex gap-2 pt-1 pb-2">
              <Type type={item.type} />
              <Role role={item.role} />
            </div>
            <p className="text-sm">{item.description}</p>
            <a className="underline w-fit" href={item.website}>
              Website
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
