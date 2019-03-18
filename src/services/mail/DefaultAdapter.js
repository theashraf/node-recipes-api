import path from "path"
import { createTransport } from "nodemailer"
import ejs from "../../modules/ejs"
import appConfig from "../../../config"

class MailAdapter {
	constructor(options) {
		this.options = options
		this.transporter = createTransport({
			host: options.host,
			port: options.port
		})
	}

	sendMail = async ({ to, subject, text, html }) => {
		return this.transporter.sendMail({
			from: this.options.from,
			to,
			subject,
			text,
			html
		})
	}

	sendResetPasswordMail = async ({ to, data }) => {
		try {
			const ResetPasswordTemplate = await ejs.renderFile(
				path.join(__dirname, "./templates/ResetPasswordTemplate.ejs"),
				data
			)
			const mailOptions = {
				to,
				data,
				subject: `Reset Password for ${appConfig.appName}`,
				html: ResetPasswordTemplate
			}

			return await this.sendMail(mailOptions)
		} catch (err) {
			throw err
		}
	}

	sendVerificationMail = async ({ to, data }) => {
		try {
			const VerifyEmailTemplate = await ejs.renderFile(
				path.join(__dirname, "./templates/VerifyEmailTemplate.ejs"),
				data
			)

			const mailOptions = {
				to,
				data,
				subject: `Verify Email for ${appConfig.appName}`,
				html: VerifyEmailTemplate
			}

			return await this.sendMail(mailOptions)
		} catch (err) {
			throw err
		}
	}
}

export default MailAdapter
