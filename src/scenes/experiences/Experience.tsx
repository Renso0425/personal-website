import { motion } from 'framer-motion';

const childVariant = {
    hidden: { opacity: 0, scale: 0.9},
    visible: { opacity: 1, scale: 1},
}

type Props = {
    title: string;
    time: string;
    place: string;
    description: string;
};

const Experience = ({title, time, place, description}: Props) => {
  return (
    <motion.div 
        variants={childVariant}
        className="mt-9 rounded-md border-2 bg-white border-gray-100 px-5 py-16 text-center">
        <h3 className="font-bold">{title}</h3>
        <h4 className="my-3 font-bold">{time}</h4>
        <h4 className="my-3 font-bold">{place}</h4>
        <h4 className="my-3">{description}</h4>
    </motion.div>
  )
}

export default Experience;