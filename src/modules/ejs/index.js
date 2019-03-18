import ejs from "ejs"

exports.renderFile = (...args) =>
	new Promise((resolve, reject) => {
		ejs.renderFile(...args, (err, str) => {
			if (err) {
				reject(err)
			} else {
				resolve(str)
			}
		})
	})
