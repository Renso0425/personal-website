import { motion } from "framer-motion";
import { ExperienceType, SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import Experience from "./Experience";

// Must identify objects and their types
const experiences: Array<ExperienceType> = [
    {
        title: "Historian",
        time: "May 2024 - Present",
        place: "College Park, MD",
        description: "Developed and maintained a website using HTML and CSS to promote the organization’s activities. Took, edited, and curated photos and videos to advertise the organization’s events. Collaborated and planned with like-minded individuals in celebrating Chinese culture."
    },
    {
        title: "Community Assistant",
        time: "August 2022 - Present ",
        place: "College Park, MD",
        description: "Collected, organized, and distributed packages and keys for student residents. Maintained a positive representation for the university. Provided any kind of assistance to students, residential life, parents, and package carriers. Played a reliable connection between 300 residents and the residential department of the school"
    },
    {
        title: "Waiter",
        time: "June 2022 - August 2022",
        place: "Warner Robins, GA",
        description: "Took and distributed customer orders in person and for delivery. Greeted and seated dine-in customers, making sure every customer is satisfied with their experience. Maintained organization among assigning tables for waiters."
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggeredChildren: 0.2 }
    }
}

type Props = {
    // void means it doesn't return anything
    setSelectedPage: ( value: SelectedPage) => void;
};

const Experiences = ({ setSelectedPage }: Props) => {
    return (
    <section id="experiences" className="bg-background-100 mx-auto min-h-full py-20">
        <motion.div
            className="mx-auto w-5/6 items-center"
            onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}
        >
            {/* HEADER */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                /* once means it only transitions once, amount is how much of the dive needs to be seen to be triggered*/
                viewport={{ once: true, amount: 0.3 }}
                transition={{  duration: 1 }}
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
                className="mt-5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5}}
                variants={container}
            >
                {experiences.map((exp: ExperienceType) => (
                    <Experience 
                        key={exp.title}
                        title={exp.title}
                        time={exp.time}
                        place={exp.place}
                        description={exp.description}
                    />
                ))}
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Experiences;