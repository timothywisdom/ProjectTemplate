export enum Environment { // These MUST match the "environment" values insert into /Server/environment.json by Octo
	Dev = "Development",
	QA = "QA",
	Staging = "Staging",
	Prod = "Production",
}

export interface Configuration {
	env: Environment;
}
