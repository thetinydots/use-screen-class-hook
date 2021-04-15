import { RefObject } from 'react';

declare const setBreakpoints: (breaks: [number, number, number, number, number]) => void;
declare const getBreakpoints: () => [number, number, number, number, number];

declare type screenClass = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
declare const screenClasses: screenClass[];
declare const useScreenClass: <T>(sourceRef?: RefObject<T & HTMLElement> | undefined, defaultClass?: screenClass | undefined) => "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export { getBreakpoints, screenClasses, setBreakpoints, useScreenClass };
