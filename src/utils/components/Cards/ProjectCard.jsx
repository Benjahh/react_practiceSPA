import React from "react";
import { flexBetweeen } from "../../../data";
import { SiLinktree, SiGithub } from "react-icons/si";

const ProjectCard = ({
  projectLink,
  projectImage,
  projectRepo,
  projectName,
  projectDescription,
  projectSkill,
  id,
}) => {
  return (
    <article>
      <div key={id} className="gap-4 border-2 h-auto border-teal-500">
        <div className="border-2 border-pink-400">
          <img src={projectImage} alt="testing image"></img>
        </div>

        <div className={`${flexBetweeen} flex-col`}>
          <div>
            <h2 className="border-2 border-blue-300 ">{projectName}</h2>
            <p className="">{projectDescription}</p>
            <p></p>
          </div>

          <div className={`${flexBetweeen} flex-row gap-6`}>
            {projectSkill.map(({ id, skillName, Icon }) => (
              <div
                className={`border-2 border-pink-300 ${flexBetweeen}`}
                key={id}
              >
                {skillName}
                {Icon}
              </div>
            ))}
          </div>
        </div>

        <div className="border-2 border-b-red-950">
          <a
            href={projectLink}
            className={`${flexBetweeen}flex-col bg-orange-500 p-1 rounded-sm gap-3`}
          >
            Live <SiLinktree />
          </a>
          <a
            href={projectRepo}
            className={` ${flexBetweeen}flex-col bg-orange-500 p-1 rounded-sm gap-3`}
          >
            Source <SiGithub />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
