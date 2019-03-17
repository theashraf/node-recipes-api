import { Schema, model } from "mongoose"

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		profilePicture: {
			type: String
		},
		email: {
			type: String,
			unique: true,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		recipes: [
			{
				type: Schema.Types.ObjectId,
				ref: "recipe"
			}
		],
		likedRecipes: [
			{
				type: Schema.Types.ObjectId,
				ref: "recipe"
			}
		]
	},
	{ timestamps: true }
)

const User = model("user", userSchema)

export default User
