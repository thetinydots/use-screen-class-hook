import {
  useEffect,
  useState,
  RefObject,
} from "react";
import {
  getBreakpoints,
  setBreakpoints,
} from "./breakpoints";

type screenClass =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl";
export const screenClasses: screenClass[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
];

const getViewPort = <T>(
  sourceRef?: RefObject<T & HTMLElement>
) => {
  if (
    sourceRef &&
    sourceRef &&
    sourceRef.current!.clientWidth
  ) {
    return sourceRef.current!.clientWidth;
  }
  if (
    typeof window !== "undefined" &&
    window.innerWidth
  ) {
    return window.innerWidth;
  }
  return null;
};

const useScreenClass = <T>(
  sourceRef?: RefObject<T & HTMLElement>,
  defaultClass?: screenClass
) => {
  const getClass = (): screenClass => {
    let breakpoints = getBreakpoints();
    let newClass = defaultClass;

    const viewport = getViewPort(sourceRef);

    if (viewport) {
      newClass = "xs";
      if (
        breakpoints[0] &&
        viewport >= breakpoints[0]
      )
        newClass = "sm";
      if (
        breakpoints[1] &&
        viewport >= breakpoints[1]
      )
        newClass = "md";
      if (
        breakpoints[2] &&
        viewport >= breakpoints[2]
      )
        newClass = "lg";
      if (
        breakpoints[3] &&
        viewport >= breakpoints[3]
      )
        newClass = "xl";
      if (
        breakpoints[4] &&
        viewport >= breakpoints[4]
      )
        newClass = "xxl";
    } else if (defaultClass) {
      newClass = defaultClass;
    }

    const newScreenClassIndex = screenClasses.indexOf(
      newClass!
    );
    const maxScreenClassIndex = screenClasses.indexOf(
      newClass!
    );
    if (
      maxScreenClassIndex >= 0 &&
      newScreenClassIndex > maxScreenClassIndex
    ) {
      newClass =
        screenClasses[maxScreenClassIndex];
    }

    return newClass!;
  };

  const [screenClass, setScreenClass] = useState(
    getClass()
  );

  useEffect(() => {
    const handleWindowResized = () =>
      setScreenClass(getClass());

    window.addEventListener(
      "resize",
      handleWindowResized,
      false
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleWindowResized,
        false
      );
    };
  }, []);

  return screenClass;
};

export {
  useScreenClass,
  getBreakpoints,
  setBreakpoints,
};
