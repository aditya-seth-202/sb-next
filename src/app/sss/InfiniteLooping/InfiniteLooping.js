"use client"
// const { useState, useEffect, useRef, useCallback } = React;
import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./infiniteLooping.module.css";

const InfiniteLooper = ({
  speed,
  children,
  direction,
  runningState = "running",
}) => {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;

    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  }, [looperInstances]);

  /*
    6 instances, 200 each = 1200
    parent = 1700
  */

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className={styles.looper} ref={outerRef}>
      <div
        className={styles.looper__innerList}
        ref={innerRef}
        data-animate="true"
      >
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className={styles.looper__listInstance}
            style={{
              animationPlayState: runningState,
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            <div className="contentBlock contentBlock--two">{children}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { InfiniteLooper };
