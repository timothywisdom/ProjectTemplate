import ttiPolyfill from "../scripts/contributed/ttiPolyfill/tti-polyfill.js";

const recordTTI = () => {
	ttiPolyfill.getFirstConsistentlyInteractive().then((tti: number | null) => {
		console.log(`Time to Interactive: ${tti && Math.round(tti)}ms`);
	});
};

export default recordTTI;
