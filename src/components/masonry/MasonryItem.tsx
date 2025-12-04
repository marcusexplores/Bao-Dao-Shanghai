import { motion, useReducedMotion, type Transition } from "motion/react";

interface MasonryItemProps {
  image: string;
  delay: number;
}

const transition = { type: "spring", stiffness: 300, damping: 30, mass: 1 };
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...transition, duration: 0.6 } as Transition,
  },
};

export const MasonryItem = ({ image, delay }: MasonryItemProps) => {
  const prefersReducedMotion = useReducedMotion();

  // Disable complex motion logic if prefers reduced motion
  const motionProps = prefersReducedMotion
    ? { transition: { duration: 0.01 } }
    : {
        variants: itemVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 }, // Trigger when 20% of item is visible
        transition: { delay: delay * 0.1 }, // Staggered delay for cool cascading effect
      };

  return (
    <motion.div
      className="mb-4 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative"
      {...motionProps}
    >
      <img
        src={image}
        alt={""}
        loading="lazy"
        className="block w-full h-auto object-cover transition duration-500 ease-in-out hover:scale-[1.05]"
      />
    </motion.div>
  );
};
