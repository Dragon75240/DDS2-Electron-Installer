export type Config = {
	gamePath: string;
};

import { app } from "electron";
import fs from "fs-extra";

export class ConfigWriter {
	private static instance: ConfigWriter;

	private constructor() {}

	public static getInstance(): ConfigWriter {
		if (!ConfigWriter.instance) {
			ConfigWriter.instance = new ConfigWriter();
		}
		return ConfigWriter.instance;
	}

	public async getConfig(): Promise<Config> {
		const configDir = await this.getConfigDirectory();
		const filePath = `${configDir}/config.json`;

		try {
			const data = await fs.readJson(filePath);
			return data as Config;
		} catch (error) {
			console.warn("No config file found. Returning default values.");
			return {} as Config;
		}
	}

	public async saveConfig(config: Config): Promise<void> {
		const configDir = await this.getConfigDirectory();
		const filePath = `${configDir}/config.json`;

		try {
			const jsonString = JSON.stringify(config, null, 2);

			await fs.writeFile(filePath, jsonString);
			console.log("Config saved successfully");
		} catch (error) {
			console.error("Error saving config:", error);
			throw error;
		}
	}

	private async getConfigDirectory(): Promise<string> {
		const userDataPath = app.getPath("userData");
		const configDir = `${userDataPath}/config`;

		await fs.ensureDir(configDir);

		return configDir;
	}
}
