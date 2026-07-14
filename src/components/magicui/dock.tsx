"use client";

import { cn } from "@/lib/utils";
import { motion, type MotionValue, useMotionValue, useSpring, useTransform } from "motion/react";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

interface DockProps {
  className?: string;
  children: ReactNode;
  magnification?: number;
  distance?: number;
}

interface DockIconProps {
  className?: string;
  children?: ReactNode;
}

const DEFAULT_MAGNIFICATION = 46;
const DEFAULT_DISTANCE = 72;
const BASE_SIZE = 40;
const BASE_ICON_SIZE = 20;
const ICON_SIZE_RATIO = 0.5;
const SPRING = { mass: 0.14, stiffness: 110, damping: 20 };

interface DockContextValue {
  mouseX: MotionValue<number>;
  magnification: number;
  distance: number;
  canAnimate: boolean;
}

const DockContext = createContext<DockContextValue | null>(null);

const Dock = ({
  className,
  children,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
}: DockProps) => {
  const mouseX = useMotionValue(Infinity);
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => {
      setCanAnimate(!motionQuery.matches && pointerQuery.matches);
    };

    update();
    motionQuery.addEventListener("change", update);
    pointerQuery.addEventListener("change", update);

    return () => {
      motionQuery.removeEventListener("change", update);
      pointerQuery.removeEventListener("change", update);
    };
  }, []);

  return (
    <DockContext.Provider
      value={{
        mouseX,
        magnification: canAnimate ? magnification : BASE_SIZE,
        distance: canAnimate ? distance : 0,
        canAnimate,
      }}
    >
      <motion.div
        onMouseMove={(e) => {
          if (canAnimate) mouseX.set(e.pageX);
        }}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "mx-auto w-max h-full flex items-end justify-center overflow-visible rounded-full border",
          className
        )}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
};

const DockIcon = ({ className, children }: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const context = useContext(DockContext);

  if (!context) {
    throw new Error("DockIcon must be used within a Dock component");
  }

  const { mouseX, magnification, distance, canAnimate } = context;

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const containerSize = useSpring(
    useTransform(
      distanceCalc,
      [-distance, 0, distance],
      [BASE_SIZE, magnification, BASE_SIZE]
    ),
    SPRING
  );
  const iconSize = useSpring(
    useTransform(
      distanceCalc,
      [-distance, 0, distance],
      [BASE_ICON_SIZE, magnification * ICON_SIZE_RATIO, BASE_ICON_SIZE]
    ),
    SPRING
  );

  return (
    <motion.div
      ref={ref}
      style={
        canAnimate
          ? { width: containerSize, height: containerSize }
          : { width: BASE_SIZE, height: BASE_SIZE }
      }
      className={cn(
        "relative flex aspect-square items-center justify-center rounded-full shrink-0",
        className
      )}
    >
      <motion.div
        style={
          canAnimate
            ? { width: iconSize, height: iconSize }
            : { width: BASE_ICON_SIZE, height: BASE_ICON_SIZE }
        }
        className="flex items-center justify-center"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export { Dock, DockIcon };
export type { DockProps, DockIconProps };
