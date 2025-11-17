import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Counter = ({ to, label }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * to);
      setValue(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, to]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-white">
        {value.toLocaleString()}+
      </div>
      <div className="text-white/70 mt-2">{label}</div>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <Counter to={5000} label="Members" />
        <Counter to={40} label="Trainers" />
        <Counter to={1200} label="Success Stories" />
        <Counter to={35} label="Programs" />
      </div>
    </section>
  );
};

export default StatsCounter;
