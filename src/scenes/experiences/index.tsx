import { motion } from "framer-motion";
import { ExperienceType, SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import Experience from "./Experience";

// Must identify objects and their types
const experiences: Array<ExperienceType> = [
    {
        title: "Incoming Software Development Intern",
        time: "June 2025 - August 2025",
        place: "Arlington, VA",
        direction: -50,
        description: "AWS IAM"
    },
    {
        title: "Teaching Assistant – Web Application Development with JavaScript",
        time: "February 2025 - Present",
        place: "College Park, MD",
        direction: 50,
        description: "Proctor exams and hold office hours to support students in mastering foundational web development concepts, including HTML, JavaScript, CSS, databases, React, and Node.js. Assist in grading assignments, providing detailed and constructive feedback to enhance student learning. Develop teaching and mentorship skills while gaining hands-on experience in curriculum delivery and student engagement from an educator's perspective."
    },
    {
        title: "Historian",
        time: "May 2024 - Present",
        place: "College Park, MD",
        direction: -50,
        description: "Developed and maintained a website using HTML and CSS to promote the organization's activities. Captured, edited, and curated photos and videos to advertise the organization's events. Collaborated with like-minded individuals to plan and celebrate Chinese culture."
    },
    {
        title: "Community Assistant",
        time: "August 2022 - Present ",
        place: "College Park, MD",
        direction: 50,
        description: "Collected, organized, and distributed packages and keys for student residents. Maintained a positive representation of the university. Provided assistance to students, residential life staff, parents, and package carriers. Acted as a reliable liaison between 300 residents and the school's residential department."
    },
    {
        title: "Waiter",
        time: "June 2022 - August 2022",
        place: "Warner Robins, GA",
        direction: -50,
        description: "Received and processed customer orders for both in-person dining and delivery. Greeted and seated dine-in customers, ensuring they were satisfied with their experience. Maintained organization by efficiently assigning tables to waitstaff."
    },
];


type Props = {
    // void means it doesn't return anything
    setSelectedPage: ( value: SelectedPage) => void;
};

const Experiences = ({ setSelectedPage }: Props) => {
    return (
    <section id="experiences" className="bg-background-100 mx-auto min-h-full py-20">
        <motion.div
            className="mx-auto w-4/6 items-center"
            onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}
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
                <HText>My Experiences</HText>
                <p className="my-5">
                    Here is a collection of brief summaries about my past experiences working in various fields.
                </p>
            </motion.div>
            {/* Experiences */}
            {/*md means when it goes to a bigger screen*/}
            <motion.div 
                className="mt-10 items-center justify-between gap-10 "
            >
                {experiences.map((exp: ExperienceType) => (
                    <Experience 
                        key={exp.title}
                        title={exp.title}
                        time={exp.time}
                        place={exp.place}
                        direction={exp.direction}
                        description={exp.description}
                    />
                ))}
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Experiences;