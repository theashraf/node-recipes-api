import { Schema, model } from "mongoose"
import appConfig from "../../../config"

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			min: 2,
			max: 255,
			default: ""
		},
		lastName: {
			type: String,
			min: 2,
			max: 255,
			default: ""
		},
		emailVerified: {
			type: Boolean,
			default: false
		},
		profilePicture: {
			type: String
		},
		email: {
			type: String,
			unique: true,
			required: [true, "Email is required ..."]
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

userSchema.post("save", function(doc) {
	if (this.wasNew && appConfig.verifyEmail) {
		console.log("send verification email...")
	}
})

const User = model("user", userSchema)

export default User
