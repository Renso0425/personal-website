import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import { motion } from "framer-motion";
import ProfilePic from "../../assets/darrenpfp.jpg"
import { TypeAnimation } from 'react-type-animation';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const About = ({ setSelectedPage }: Props) => {
    return (
        <section id="about" className="gap-16 bg-background-100 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN HEADER */}
            <motion.div 
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.About)}
            >
                {/* MAIN HEADER */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* HEADINGS */}
                    <motion.div 
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        /* once means it only transitions once, amount is how much of the div needs to be seen to be triggered*/
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 2 }}
                        variants={{
                            hidden: { opacity: 0, x:-50 },
                            visible: { opacity: 1, x:0 },
                        }}
                    >
                        <div>
                            <div>
                                <h1 className="font-bold text-5xl">Darren Zheng</h1>
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed once, initially
                                        'Welcome to My Website!',
                                        1000,
                                        'I am a programmer',
                                        1000,
                                        'I am a leader',
                                        1000,
                                        'I am a collaborator',
                                        1000,
                                        'I am a curator',
                                        1000,
                                        'I am an artist',
                                        1000,
                                        'I am a historian',
                                        1000,
                                        'I am a customer service representative',
                                        1000,
                                        'I am a software engineer',
                                        1000,
                                        'I am a terp',
                                        1000,
                                        'I am Darren Zheng',
                                        1000,
                                    ]}
                                    speed={50}
                                    style={{ fontSize: '2em' }}
                                    repeat={Infinity}
                                />
                            </div>
                        </div>
                        <p className="mt-8">
                            Hello, my name is Darren Zheng (he/him). I am majoring Computer Science and minoring General Business at University of Maryland, College Park. Currently, I am interested in Software Engineering as I posses strong basic foundations of programming in languages, such as Java, Python, HTLML, CSS, Java Script, C, Ocaml, and many more. I am very persistent in achieving my goals. I have multitude of experience in customer service and multitasking. I also possess strong leadership, effective communication and teamwork, and organization skills. I am very excited to meet new professionals that can help my professional career with my degree of Computer Science.
                        </p>
                    </motion.div>
                    {/* ACTIONS */}
                    <motion.div 
                        className="mt-8 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        /* once means it only transitions once, amount is how much of the dive needs to be seen to be triggered*/
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: .7, duration: 2 }}
                        variants={{
                            hidden: { opacity: 0, x:-50 },
                            visible: { opacity: 1, x:0 },
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Contact Me
                        </ActionButton>
                    </motion.div>
                </div>
                {/* IMAGE */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end mt-36">
                    <img className="h-auto max-w-md rounded-xl border-2 border-gray-100" alt="profile-pic" src={ProfilePic}/>
                </div>
            </motion.div>
            {/* SKILLS */}
            ;
        </section>
    )
}

export default About;