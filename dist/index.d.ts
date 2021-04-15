import { RefObject } from "react";
import { getBreakpoints, setBreakpoints } from "./breakpoints";
declare type screenClass = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export declare const screenClasses: screenClass[];
declare const useScreenClass: <T>(sourceRef?: RefObject<T & HTMLElement> | undefined, defaultClass?: screenClass | undefined) => "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export { useScreenClass, getBreakpoints, setBreakpoints, };
