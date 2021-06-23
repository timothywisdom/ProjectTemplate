module.exports = (
	/** @type {import('plop').NodePlopAPI} */
	plop
) => {
	plop.setGenerator("component", {
		description: "Component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "Component name please",
			},
		],
		actions: [
			{
				type: "add",
				path: "./src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
				templateFile: "plop-templates/Component/Component.tsx.hbs",
			},
			{
				type: "add",
				path: "./src/components/{{pascalCase name}}/index.ts",
				templateFile: "plop-templates/Component/index.ts.hbs",
			},
			{
				type: "add",
				path: "./src/components/{{pascalCase name}}/styles.ts",
				templateFile: "plop-templates/Component/styles.ts.hbs",
			},
		],
	});
	plop.setGenerator("scene", {
		description: "Scene",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "Scene name please",
			},
		],
		actions: [
			{
				type: "add",
				path: "./src/scenes/{{pascalCase name}}/{{pascalCase name}}.tsx",
				templateFile: "plop-templates/Scene/SceneComponent.tsx.hbs",
			},
			{
				type: "add",
				path: "./src/scenes/{{pascalCase name}}/index.ts",
				templateFile: "plop-templates/Scene/index.ts.hbs",
			},
			{
				type: "add",
				path: "./src/scenes/{{pascalCase name}}/styles.ts",
				templateFile: "plop-templates/Scene/styles.ts.hbs",
			},
		],
	});
};
