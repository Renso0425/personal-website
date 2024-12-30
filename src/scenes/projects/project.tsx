import { StarIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

type Props = {
    title: string;
    time: string;
    description: string;
    skills: string;
    direction: number;
    link: string;
};

const Project = ({title, time, description, skills, direction, link}: Props) => {
  return (
    <motion.div 
        variants={{
            hidden: { opacity: 0, x: direction },
            visible: { opacity: 1, x:0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5}}
        transition={{  duration: 1 }}
        className="mt-10 rounded-xl border-2 border-gray-100 px-5 py-10 text-left bg-white">
        <div className="flex items-center justify-between">
            <div className="flex gap-1 group">
                <a href={link} target="_blank" className="font-bold underline text-lg">{title}</a>
                <StarIcon className="text-white h-5 w-5 pt-1 group-hover:text-gray-100"/>
            </div>
            <h4 className="font-bold my-3">{time}</h4>
        </div>
        <h4 className="my-3">{description}</h4>
        <p className="font-bold my-1">{skills}</p>
    </motion.div>
  )
}

export default Project;