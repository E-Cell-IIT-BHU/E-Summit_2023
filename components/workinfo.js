import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const workinfo = () => {
  return (
    <div className="workinfo">
      <Tilt>
        <motion.div
          className="workCard"
          whileHover={{
            width: "17rem",
            height: "12rem",
          }}
        >
          <div className="firstchild">
            <i class="bi bi-clock"></i>
          </div>
          <div className="secondchild">
            50K
            <div className="secondsubchild">Work Hours</div>
          </div>
        </motion.div>
      </Tilt>
      <Tilt>
        <motion.div
          whileHover={{
            width: "17rem",
            height: "12rem",

            zIndex: "2",
          }}
          className="workCard"
        >
          <div className="firstchild">
            <i class="bi bi-person"></i>
          </div>
          <div className="secondchild">
            740
            <div className="secondsubchild">Customers</div>
          </div>
        </motion.div>
      </Tilt>
      <Tilt>
        <motion.div
          whileHover={{
            width: "17rem",
            height: "12rem",

            zIndex: "2",
          }}
          className="workCard"
        >
          <div className="firstchild">
            <i class="bi bi-files"></i>
          </div>
          <div className="secondchild">
            60+
            <div className="secondsubchild">Layouts</div>
          </div>
        </motion.div>
      </Tilt>
      <Tilt>
        <motion.div
          whileHover={{
            width: "17rem",
            height: "12rem",

            zIndex: "2",
          }}
          className="workCard"
        >
          <div className="firstchild">
            <i class="bi bi-hdd-stack"></i>
          </div>
          <div className="secondchild">
            375
            <div className="secondsubchild">Projects</div>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

export default workinfo;
