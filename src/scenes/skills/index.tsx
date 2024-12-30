import { motion } from "framer-motion";
import { SkillType, SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import Skill from "./skill";
import PythonIcon from "../../assets/python.png"
import CudaIcon from "../../assets/cuda.png"
import JavaIcon from "../../assets/java.png"
import JavaScriptIcon from "../../assets/javascript.png"
import MatlabIcon from "../../assets/matlab.png"
import NodeIcon from "../../assets/node.png"
import PandasIcon from "../../assets/pandas.png"
import RIcon from "../../assets/r.png"
import ReactIcon from "../../assets/react.png"
import SQLIcon from "../../assets/sql.png"
import TypeScriptIcon from "../../assets/typescript.png"
import HTMLIcon from "../../assets/html.png"
import CSSIcon from "../../assets/css.png"
import CIcon from "../../assets/c.png"
import CPlusIcon from "../../assets/c++.png"
import OCamlIcon from "../../assets/ocaml.png"
import RustIcon from "../../assets/rust.png"
import AssemblyIcon from "../../assets/assembly.png"
import DartIcon from "../../assets/dart.png"

const skills: Array<SkillType> = [
    {
        icon: <img className="h-8 w-8" alt="PythonIcon" src={PythonIcon}/>,
        title: "Python",
    },
    {
        icon: <img className="h-8 w-8" alt="Javascript" src={JavaScriptIcon}/>,
        title: "JavaScript",    
    },
    {
        icon: <img className="h-8 w-8" alt="Java" src={JavaIcon}/>,
        title: "Java",    
    },
    {
        icon: <img className="h-8 w-8" alt="HTML" src={HTMLIcon}/>,
        title: "HTML",    
    },
    {
        icon: <img className="h-8 w-8" alt="CSS" src={CSSIcon}/>,
        title: "CSS",    
    },
    {
        icon: <img className="h-8 w-8" alt="C" src={CIcon}/>,
        title: "C",    
    },
    {
        icon: <img className="h-8 w-8" alt="C++" src={CPlusIcon}/>,
        title: "C++",    
    },
    {
        icon: <img className="h-8 w-8" alt="R" src={RIcon}/>,
        title: "R",    
    },
    {
        icon: <img className="h-8 w-8" alt="Matlab" src={MatlabIcon}/>,
        title: "MATLAB",    
    },
    {
        icon: <img className="h-8 w-8" alt="OCaml" src={OCamlIcon}/>,
        title: "OCaml",    
    },
    {
        icon: <img className="h-8 w-8" alt="Assembly" src={AssemblyIcon}/>,
        title: "Assembly",    
    },
    {
        icon: <img className="h-8 w-8" alt="Dart" src={DartIcon}/>,
        title: "Dart",    
    },
    {
        icon: <img className="h-8 w-8" alt="Rust" src={RustIcon}/>,
        title: "Rust",    
    },
    {
        icon: <img className="h-8 w-8" alt="Cuda" src={CudaIcon}/>,
        title: "CUDA",    
    },
    {
        icon: <img className="h-8 w-8" alt="Pandas" src={PandasIcon}/>,
        title: "Pandas",    
    },
    {
        icon: <img className="h-8 w-8" alt="SQL" src={SQLIcon}/>,
        title: "SQL",    
    },
    {
        icon: <img className="h-8 w-8" alt="React" src={ReactIcon}/>,
        title: "React",    
    },
    {
        icon: <img className="h-8 w-8" alt="Node" src={NodeIcon}/>,
        title: "Node",    
    },
    {
        icon: <img className="h-8 w-8" alt="Typescript" src={TypeScriptIcon}/>,
        title: "TypeScript",    
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggeredChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Skills = ({ setSelectedPage }: Props) => {
  return (
    <section id="skills" className="mx-auto bg-background-100 min-h-full py-20">
        <motion.div
            className="mx-auto w-5/6 items-center"
            onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        >
            {/* Header */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                /* once means it only transitions once, amount is how much of the dive needs to be seen to be triggered*/
                viewport={{ once: true, amount: 0.5 }}
                transition={{  duration: 2 }}
                variants={{
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x:0 },
                }}            
            >
                <HText>My Skills</HText>
            </motion.div>
            <motion.div 
                className="mt-10 rounded-xl bg-white border-2 border-gray-100 pb-5 items-center justify-between gap-8 grid md:grid-cols-7 grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5}}
                variants={container}
            >
                {skills.map((skill: SkillType) => (
                    <Skill 
                        key={skill.title}
                        icon={skill.icon}
                        title={skill.title}
                    />
                ))}
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Skills;
