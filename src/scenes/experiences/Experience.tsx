import { motion } from 'framer-motion';

type Props = {
    title: string;
    time: string;
    company: string;
    place: string;
    direction: number;
    description: string;
};

const Experience = ({title, time, company, place, direction, description}: Props) => {
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
        className="mt-9 rounded-md border-2 bg-white border-gray-100 px-5 py-16 text-center">
        <h3 className="font-bold">{title}</h3>
        <h4 className="my-3 font-bold">{company}</h4>
        <h4 className="my-3 font-bold">{time}</h4>
        <h4 className="my-3 font-bold">{place}</h4>
        <h4 className="my-3">{description}</h4>
    </motion.div>
  )
}

export default Experience;