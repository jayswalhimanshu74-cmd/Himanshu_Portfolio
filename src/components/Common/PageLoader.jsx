import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-surface-container-lowest flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center gap-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-display-lg text-3xl sm:text-4xl text-on-surface tracking-tight uppercase font-bold">
            Himanshu Jayswal
          </span>
          <span className="font-technical text-xs text-primary-container tracking-[0.25em] uppercase font-semibold">
            INITIALIZING EXPERIENCE
          </span>
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-[2px] bg-surface-variant/40 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 bg-primary-container"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
