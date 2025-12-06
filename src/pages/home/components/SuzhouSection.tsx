import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import SuzhouPhoto from "@/assets/photos/Home_Suzhou.jpg";

const poemText = `暮色沉波画舫移 吴门灯火映星稀。
曲桥幽径通花影 一院笙歌伴月低。
虎丘塔影藏云霭 剑池寒水映霜衣。
茶烟漫绕观前巷 酒暖香浮蟹正肥。
醉倚阑干听夜漏 人间天上两忘机。`;

const poemLines = poemText.split("。");

// Animation variants for staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for individual text lines
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
};

export const SuzhouSection = () => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="flex items-center justify-center font-['Inter', 'Noto+Sans+SC']">
      <div className="w-full ">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
              viewport={{ once: true, amount: 0.3 }}
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg border-2 border-gray-100"
            >
              <img
                src={SuzhouPhoto}
                alt="A traditional Chinese water town at dusk, evoking the atmosphere of Suzhou."
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onLoad={handleImageLoad}
              />
            </motion.div>
          </div>

          {/* Text and Title Section */}
          <div className="lg:w-1/2 flex flex-row-reverse justify-evenly lg:justify-between items-center space-x-reverse space-x-6 lg:space-x-12">
            <AnimatePresence>
              {loaded && (
                <>
                  <motion.div
                    key="title-section"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "upright",
                    }}
                  >
                    <h1 className="text-9xl md:text-[10rem] font-extrabold tracking-tighter">
                      蘇州
                    </h1>
                    <p className="text-2xl md:text-3xl font-semibold">
                      「姑苏夜咏‌」
                    </p>
                  </motion.div>

                  <motion.div
                    key="poem-section"
                    className="flex flex-row-reverse flex-nowrap overflow-hidden py-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {poemLines.map((line, index) => (
                      <motion.p
                        key={index}
                        className="text-xl md:text-2xl font-serif leading-relaxed tracking-widest"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "upright",
                        }}
                        variants={itemVariants}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
