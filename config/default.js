import DefaultAdapter from "../src/services/mail/DefaultAdapter"

const config = {
	appName: "Recipe",
	PORT: 3000,
	mail: {
		options: {
			host: "localhost",
			port: 1025,
			from: "app@gmail.com"
		},
		adapter: DefaultAdapter
	}
}

export default config
