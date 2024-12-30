import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import { useForm } from "react-hook-form";
import HText from "../../shared/HText";
import LinkedIn from "../../assets/linkedin.png";
import Resume from "../../assets/resume.png";
import Res from "../../assets/DarrenZResume.pdf"
import GitHub from "../../assets/github.png";
import Mail from "../../assets/mail.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (e: any) => {
        // trigger is used to validate form if needed
        const isValid = await trigger();
        if (!isValid) {
            // don't refresh the page if error
            e.preventDefault();
        }
    };

    return (
    <section id="contact" className="mx-auto pt-24 pb-32 bg-background-100">
        <motion.div
            className="mx-auto w-5/6 items-center"
            onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >
            {/* HEADER */}
            <motion.div
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                /* once means it only transitions once, amount is how much of the dive needs to be seen to be triggered*/
                viewport={{ once: true, amount: 0.5 }}
                transition={{  duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x:0 },
                }}  
            >
                <HText>
                    PERSONAL CONTACT
                </HText>
                <p className="my-5">
                    Feel free to reach out to me by email or other provided platforms! Looking forward toward meeting you!
                </p>
            </motion.div>
            {/* FORM AND IMAGE, md means when it goes on bigger screens */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                    className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    /* once means it only transitions once, amount is how much of the dive needs to be seen to be triggered*/
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{  duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, y:50 },
                        visible: { opacity: 1, y:0 },
                    }} 
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/9891ccf3e1401a3d8d2bbc26add1e953"
                        method="POST"
                    >
                        <input
                            className={inputStyles}
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 50,
                            })}
                        />
                        {/* Checks if there is an error by grabbing from input and runs the code */}
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 50 characters"}
                            </p>
                        )}
                        <input
                            className={inputStyles}
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                maxLength: 100,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {/* Checks if there is an error by grabbing from input and runs the code */}
                        {errors.email && (
                            <p className="mt-1 text-primary-500">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}
                        <textarea
                            className={inputStyles}
                            rows={4}
                            cols={50}
                            placeholder="MESSAGE"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {/* Checks if there is an error by grabbing from input and runs the code */}
                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 2000 characters"}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                        >
                            SUBMIT
                        </button>
                    </form>
                </motion.div>
                <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext rounded-xl border-2 border-gray-100 px-7 py-7 bg-white">
                        <HText>
                            MORE LINKS
                        </HText>
                        <div className="flex gap-3 mt-3">
                            <img className="h-6 w-6" alt="linkedinicon" src={LinkedIn}/>
                            <a target="_blank" href="https://www.linkedin.com/in/darren-z">linkedin.com/in/darren-z</a>
                        </div>
                        <div className="flex gap-3 mt-3">
                            <img className="h-6 w-6" alt="githubicon" src={GitHub}/>
                            <a target="_blank" href="https://github.com/Renso0425">github.com/Renso0425</a>
                        </div>
                        <div className="flex gap-3 mt-3">
                            <img className="h-6 w-6" alt="mailicon" src={Mail}/>
                            <a target="_blank" href="">darrenz0425@gmail.com</a>
                        </div>
                        <div className="flex gap-3 mt-3">
                            <img className="h-6 w-6" alt="resumeicon" src={Resume}/>
                            <a target="_blank" href={Res}>Resume</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
    )
}

export default Contact;