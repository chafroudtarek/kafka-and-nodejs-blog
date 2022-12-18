import mongoose from "mongoose"

const { Schema } = mongoose;

const fileSchema = Schema(
    {
        userRef: { type: String, maxLength: 100 },
        userId: {
            type: mongoose.Schema.Types.ObjectId
        },
        
        username: {
            type: String,
        },
        enabled: {
            type: Boolean,
            default: true,
        }
    },
    { timestamps: true }
);


export const File = mongoose.model('File', fileSchema);


