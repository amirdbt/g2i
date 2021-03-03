import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Welcome = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 2 }}
      className="welcome"
    >
      <h2 className="title">Welcome to Trivia Game Challenge</h2>
      <h3 className="subtitle">Click the button below to continue.</h3>
      <Link to="/quiz" className="startbtn">
        Start Now
      </Link>
    </motion.div>
  );
};

export default Welcome;
