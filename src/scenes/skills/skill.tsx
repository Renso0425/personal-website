import { motion } from 'framer-motion';

const childVariant = {
    hidden: { opacity: 0, scale: 0.9},
    visible: { opacity: 1, scale: 1},
}

type Props = {
    icon: JSX.Element;
    title: string;
};

const Skill = ({icon, title}: Props) => {
  return (
    <motion.div 
        variants={childVariant}
        className="mt-5 rounded-xl px-5 py-1 text-center">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                {icon}
            </div>
        </div>
        <h3 className="font-bold">{title}</h3>
    </motion.div>
  )
}

export default Skill;