import React from "react";
import { motion } from "framer-motion";
import Welcome from "./pages/Welcome";
import Quiz from "./components/Quiz";
import { Switch, Route } from "react-router-dom";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const App = () => {
  return (
    <main>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 2 }}
      >
        Trivia Game Coding Challenge
      </motion.h1>
      <div className="glass">
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default App;
