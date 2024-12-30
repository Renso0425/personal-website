import { motion } from "framer-motion";
import { ProjectType, SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import Project from "./project";

// Must identify objects and their types
const projects: Array<ProjectType> = [
    {
        title: "Pokemon Gacha",
        time: "December 2024",
        description: "Designed and developed an interactive Pokemon Gacha Simulator website featuring real-time data from the PokeAPI. Integrated a MongoDB database to manage user accounts and enhance organization. Deployed the platform using Node.js to handle backend logic and host dynamic web pages efficiently.",
        skills: "Node.js, PokeAPI, JavaScript, CSS, MongoDB",
        direction: -50,
        link: "https://pokemongacha-10kj.onrender.com/",
    },
    {
        title: "Terrapin Wars",
        time: "May 2024",
        description: "Developed an interactive geographical capture-the-flag game using the Google Maps API to reward players for visiting college landmarks, promoting real-world discovery and interaction. Designed the backend with Firebase to manage player account data, collect game statistics, analyze popular congregation spots and travel times, and optimize landmark placement. Created a dynamic user interface featuring a live-updating global leaderboard and a responsive, scalable design using Flutter.",
        skills: "Google Maps API, Firebase, Dart, Flutter",
        direction: 50,
        link: "https://github.com/echang505/TerrapinWars",
    },
    {
        title: "Language Evaluator",
        time: "April 2024",
        description: "Developed a compiler in OCaml to convert a custom basic CFG language into OCaml code. Implemented a lexer, parser, and evaluation system to tokenize and validate inputs. Optimized performance to handle large-scale inputs and deeply nested logic, supporting over 15 keywords.",
        skills: "OCaml",
        direction: -50,
        link: "https://github.com/Renso0425/Language-Evaluation",
    },
    {
        title: "SAC Datathon-NBA Proposal",
        time: "March 2024",
        description: "Developed a linear regression model to analyze over 10,000 real-world records to identify ideal locations for establishing new NBA teams, based on real-world data, for Deloitte’s Datathon competition. Utilized Pandas and Scikit-Learn to perform exploratory data analysis and feature extraction, identifying key factors such as fan base data. Optimized the regression model, reducing computation time by over 80%.",
        skills: "Python, Pandas, Sklearn",
        direction: 50,
        link: "",
    },
];


type Props = {
    // void means it doesn't return anything
    setSelectedPage: ( value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
    return (
    <section id="projects" className="mx-auto bg-background-100 min-h-full py-20">
        <motion.div
            className="mx-auto w-5/6 items-center"
            onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        >
            {/* HEADER */}
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
                <HText>My Projects</HText>
            </motion.div>
            {/*  Projects */}
            {/*md means when it goes to a bigger screen*/}
            <motion.div 
                className="mt-10 items-center justify-between gap-10 "
            >
                {projects.map((proj: ProjectType) => (
                    <Project 
                        key={proj.title}
                        title={proj.title}
                        time={proj.time}
                        description={proj.description}
                        skills={proj.skills}
                        direction={proj.direction}
                        link={proj.link}
                    />
                ))}
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Projects;
