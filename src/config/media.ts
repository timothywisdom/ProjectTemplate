export const mobileBreakpointStart = 320;
export const mobileBreakpointEnd = 767;
export const tabletBreakpointStart = mobileBreakpointEnd + 1;
export const tabletBreakpointEnd = 1365;
export const desktopBreakpointStart = tabletBreakpointEnd + 1;

const media = {
	watch: `@media (max-width: ${mobileBreakpointStart}px)`,
	mobile: `@media (min-width: ${mobileBreakpointStart}px) and (max-width: ${mobileBreakpointEnd}px)`,
	mobileAndWatch: `@media (max-width: ${mobileBreakpointEnd}px)`,
	tablet: `@media (min-width: ${tabletBreakpointStart}px) and (max-width: ${tabletBreakpointEnd}px)`,
	tabletAndMobile: `@media (min-width: ${mobileBreakpointStart}px) and (max-width: ${tabletBreakpointEnd}px)`,
	tabletAndWatch: `@media (max-width: ${tabletBreakpointEnd}px)`,
	desktop: `@media (min-width: ${desktopBreakpointStart}px)`,
	desktopAndTablet: `@media (min-width: ${tabletBreakpointStart}px)`,
};

export default media;
