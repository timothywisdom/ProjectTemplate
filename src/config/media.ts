export const mobileBreakpointStart = 320;
export const mobileBreakpointEnd = 767;
export const tabletBreakpointStart = mobileBreakpointEnd + 1;
export const tabletBreakpointEnd = 1365;
export const desktopBreakpointStart = tabletBreakpointEnd + 1;
export const appContainerPadding = 10;
export const appContainerDesktopWidth = 1200;

const media = {
	mobile: `@media (min-width: ${mobileBreakpointStart}px) and (max-width: ${mobileBreakpointEnd}px)`,
	tablet: `@media (min-width: ${tabletBreakpointStart}px) and (max-width: ${tabletBreakpointEnd}px)`,
	desktop: `@media (min-width: ${desktopBreakpointStart}px)`,
	upToAndIncludingMobile: `@media (min-width: 1px) and (max-width: ${mobileBreakpointEnd}px)`,
	tabletAndDesktop: `@media (min-width: ${tabletBreakpointStart}px)`,
	tabletAndMobile: `@media (min-width: ${mobileBreakpointStart}px) and (max-width: ${tabletBreakpointEnd}px)`,
	tabletPortraitAndMobile: `@media (min-width: ${mobileBreakpointStart}px) and (max-width: ${tabletBreakpointStart}px)`,
};

export default media;
