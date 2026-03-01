"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const shimmerStyle = {
  background:
    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 80%, transparent 100%)",
} as const;

export function HeroImage() {
  const [imageErr, setImageErr] = useState(false);

  const handleImageError = useCallback(() => {
    setImageErr(true);
  }, []);

  return (
    <div className="flex shrink-0 justify-center lg:flex-1">
      <motion.div
        className="group relative w-56 shrink-0 overflow-hidden rounded-2xl shadow-xl sm:w-72 lg:w-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {!imageErr ? (
            <Image
              src="/images/vismay_portrait.jpeg"
              alt="Portrait of Vismay"
              width={320}
              height={320}
              onError={handleImageError}
            />
          ) : (
            <div
              className="aspect-square w-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800"
              role="img"
              aria-label="Portrait of Vismay Valsaraj, Frontend Engineer"
            >
              <span className="flex h-full w-full items-center justify-center text-4xl font-semibold text-zinc-500 dark:text-zinc-400 sm:text-5xl">
                VV
              </span>
            </div>
          )}
        </motion.div>

        <div
          className="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-[-20deg] transition-transform duration-[1000ms] ease-in-out group-hover:translate-x-[120%]"
          style={shimmerStyle}
        />
      </motion.div>
    </div>
  );
}

