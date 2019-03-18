import ejs from "ejs"

const renderFile = (...args) =>
	new Promise((resolve, reject) => {
		ejs.renderFile(...args, (err, str) => {
			if (err) {
				reject(err)
			} else {
				resolve(str)
			}
		})
	})

export default { renderFile }
