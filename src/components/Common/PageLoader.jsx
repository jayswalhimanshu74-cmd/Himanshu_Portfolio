import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-surface-container-lowest flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center gap-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-display-lg text-3xl text-on-surface tracking-tight uppercase font-bold">
            Himanshu Jayswal
          </span>
          <span className="font-technical text-[10px] text-outline tracking-[0.25em] uppercase">
            INITIALIZING EXPERIENCE
          </span>
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-[1px] bg-surface-variant rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 bg-primary-container"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
