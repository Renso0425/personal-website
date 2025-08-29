import { motion } from "framer-motion";
import { ExperienceType, SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import Experience from "./Experience";

// Must identify objects and their types
const experiences: Array<ExperienceType> = [
    {
        title: "President",
        company: "University of Maryland Hong Kong Student Association",
        time: "May 2025 - Present",
        place: "College Park, MD",
        direction: 50,
        description: "Championed cultural integration by developing a safe and inclusive community for students to explore and celebrate Hong Kong culture, fostering a sense of belonging for over 100 members. Directed a team of 11 executive board members to successfully plan and execute all club initiatives, maintaining project timelines through clear task delegation and accountability. Cultivated partnerships with over a dozen campus and intercollegiate organizations, co-hosting multi-cultural events that enhanced diversity and broadened the club’s reach."
    },
    {
        title: "Software Development Intern",
        company: "Amazon Web Services IAM",
        time: "June 2025 - August 2025",
        place: "Arlington, VA",
        direction: -50,
        description: "Designed and implemented a comprehensive and centralized metrics aggregation system for AWS IAM, collecting and storing metadata from dozens of services. Performed hundreds of updated API calls using step functions with pre-production data to simulate data aggregation on the CloudWatch dashboard for analysis. Streamlined a REST service integration testing with a personal pipeline, allowing enhanced monitoring and analysis of requests sent through AWS IAM and stored in the backend within 2 minutes. Optimized metric aggregation via creation of a new data pipeline to serialize hundreds of JSON data into S3 buckets. Automated performance testing on various designs to optimize my implementation to have minimal impact on time and memory for millions of customers."
    },
    {
        title: "Teaching Assistant – Web Application Development with JavaScript",
        company: "University of Maryland Department of Computer Science",
        time: "February 2025 - May 2025",
        place: "College Park, MD",
        direction: 50,
        description: "Proctor exams and hold 4 hour long office hours to support students in mastering foundational web development concepts, including HTML, JavaScript, CSS, databases, React, and Node.js. Assist in grading hundreds of assignments, providing detailed and constructive feedback to enhance student learning. Develop teaching and mentorship skills while gaining hands-on experience in curriculum delivery and student engagement from an educator's perspective."
    },
    {
        title: "Historian",
        company: "UMCP Chinese Student Association",
        time: "May 2024 - April 2025",
        place: "College Park, MD",
        direction: -50,
        description: "Developed and maintained a website using HTML and CSS to promote the organization's activities. Captured, edited, and curated hundreds of photos and videos to advertise the organization's events. Collaborated with dozens of like-minded individuals to plan and celebrate Chinese culture."
    },
    {
        title: "Community Assistant",
        company: "University of Maryland Reslife",
        time: "August 2022 - Present ",
        place: "College Park, MD",
        direction: 50,
        description: "Collected, organized, and distributed packages and keys for student residents. Maintained a positive representation of the university. Provided assistance to students, residential life staff, parents, and package carriers. Acted as a reliable liaison between 300 residents and the school's residential department."
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
                        company={exp.company}
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