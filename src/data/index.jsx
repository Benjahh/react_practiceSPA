import { 
    SiExpress, 
    SiNodedotjs, 
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiVite,
    SiHtml5,
    SiCss3,
    SiMongodb,
    SiGit,
    SiRedux

} from "react-icons/si"

export const frontEndTech = [
    {    
        id: 1,
        groupName: "Group 2",
        techs: [
            {
                id: 1,
                skillName: "ReactJS",
                Icon:  <SiReact size="50"/> 
            },
            {
                id: 2,
                skillName: "Tailwindcss",
                Icon: <SiTailwindcss size="50"/>
            },
            {
                id: 3,
                skillName: "TypeScript",
                Icon: <SiTypescript size="50"/>
            }
        ]
    },
    {    
        id: 2,
        groupName: "Group 2",
        techs: [          
            {
                id: 4,
                skillName: "JavaScript",
                Icon: <SiJavascript size="50"/>
            },
            {
                id: 5,
                skillName: "HTML",
                Icon: <SiHtml5 size="50"/>
            },
            
        ]
    },
    {
        id: 3,
        groupName: "Group 3",
        techs: [
            {
                id: 6,
                skillName: "CSS",
                Icon: <SiCss3 size="50"/>  
            },
        ]
    }
]
   


export const backEndTech = [
    {
        id: 1,
        skillName: "NodeJS",
        Icon: <SiNodedotjs/>  
    },
    {
        id: 2,
        skillName: "MongoDB",
        Icon: <SiMongodb/>  
    },
    {
        id: 3,
        skillName: "ExpressJS",
        Icon: <SiExpress/>
    },
]

export const otherTech = [
    {
        id: 1,
        skillName: "Vite",
        Icon: <SiVite/>
    },
    {
        id: 2,
        skillName: "Git",
        Icon: <SiGit/>
    },
    {
        id: 3,
        skillName: "Redux",
        Icon: <SiRedux/>
    }
]

export const projects = [
    {
        id: 1,
        projectName: "SocialApp",
        projectLink : "",
        projectSkill: [
            {
                id: 1,

            }
    ]
    },
    {
        id: 2, 
        projectName: "FitnessApp",
        projectLink: "",
        projectSkill: [
            {
                id: 1
            }
        ]
    }
]