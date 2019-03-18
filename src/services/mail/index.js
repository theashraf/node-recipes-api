import appConfig from "../../../config"

const MailService = appConfig.mail.adapter
const mailconfig = appConfig.mail.options

export default new MailService(mailconfig)
