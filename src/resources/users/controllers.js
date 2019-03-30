import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"
import User from "./User"

export const createUser = async (req, res) => {
	const { body: userData } = req

	const { email, password } = userData

	const foundUser = await User.findOne({ email }).exec()
	if (foundUser) {
		throw new Error("email already used")
	}

	const hashedPassword = await bcrypt.hash(password, 12)

	const createdUser = await User.create({
		...userData,
		password: hashedPassword
	})

	const token = await JWT.sign({ id: createdUser.id }, "secret")

	res.status(201).json({ ...createdUser.toJSON(), password: null, token })
}

export const readUser = async (req, res) => {
	const { id: userId } = req.params
	const user = await User.findById(userId).exec()
	res.status(200).json(user)
}

export const readUsers = async (req, res) => {
	const users = await User.find({}).exec()
	res.status(200).json(users)
}

export const updateUser = async (req, res) => {
	const {
		params: { id: userId },
		body: userData
	} = req

	const updatedUser = await User.findByIdAndUpdate(
		userId,
		{ $set: userData },
		{ new: true }
	).exec()
	res.status(200).json(updatedUser)
}

export const deleteUser = async (req, res) => {
	const { id: userId } = req.params
	const deletedUser = await User.findByIdAndRemove(userId).exec()
	res.status(200).json(deletedUser)
}
