import { motion } from "framer-motion";
import { ProjectType, SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import Project from "./project";

// Must identify objects and their types
const projects: Array<ProjectType> = [
    {
        title: "Stranded",
        time: "April 2025",
        description: "Architected and developed a comprehensive suite of 30+ C# scripts for a Unity-based first-person puzzle game, implementing core features such as first-person movement, engaging storyline, and context-sensitive object interactions.Designed and implemented a dynamic procedural system that adjusts 4 distinct difficulty settings, procedural world generation, and enemy AI, creating a scalable and challenging experience. Developed a comprehensive user-facing system featuring 3 distinct menus and over 7 interactive HUD elements, leveraging a modular UI architecture for inventory and quest tracking to enhance player usability and streamline game progression.",
        skills: "C#, Unity Game Engine, Unity UI",
        direction: 50,
        link: "https://github.com/ocalalex/CMSC425-Island-Game",
    },
    {
        title: "Pokémon Gacha",
        time: "December 2024",
        description: "Developed a full-stack web application, a Pokémon Gacha Simulator, utilizing Node.js and Express.js to manage server-side logic and EJS for dynamic templating. Implemented a user authentication and data persistence system using MongoDB to handle user accounts, securely storing login credentials and a list of collected Pokémon, increasing data retrieval efficiency by 90% compared to a non-indexed database. Integrated PokéAPI to dynamically fetch and display Pokémon data, improving performance by caching frequently accessed data and reducing API calls by 70%",
        skills: "Node.js, PokéAPI, JavaScript, CSS, MongoDB",
        direction: -50,
        link: "https://pokemongacha-10kj.onrender.com/",
    },
    {
        title: "Terrapin Wars",
        time: "May 2024",
        description: "Developed a Flutter mobile application for a location-based game, 'Terrapin Wars', integrating Google Maps API to display key locations and the user's current position. Implemented Firebase Authentication to enable user registration and login with robust error handling for weak passwords, existing accounts, and invalid email formats. Utilized Firebase Realtime Database to manage game data, including user accounts, captured points, and location tracking, improving data synchronization across devices by 40% by optimizing data structure and listeners.",
        skills: "Google Maps API, Firebase, Dart, Flutter",
        direction: 50,
        link: "https://github.com/echang505/TerrapinWars",
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
