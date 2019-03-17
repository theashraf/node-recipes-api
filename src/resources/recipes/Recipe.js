import { Schema, model } from "mongoose"

const recipeSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		steps: [String],
		ingredients: [String],
		category: {
			type: String,
			required: true
		},
		picture: {
			type: String
		},
		published: {
			type: Boolean,
			default: false
		},
		likes: {
			type: Number,
			default: 0
		},
		creator: {
			type: Schema.Types.ObjectId,
			ref: "user",
			required: true
		}
	},
	{ timestamps: true }
)

const Recipe = model("recipe", recipeSchema)

export default Recipe
