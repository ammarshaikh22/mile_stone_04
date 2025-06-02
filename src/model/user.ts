import mongoose from "mongoose";

interface UserType {
    name: string;
    email: string;
    password: string;
    profileImage: string;
    isVerified: boolean;
    verifyToken?: string;
    verifyTokenExpiry?: Date;
    forgotPassword?: string;
    forgotPasswordExpiry?: Date;
    isAdmin: boolean;
    isLogin?: boolean;
}


const userSchema = new mongoose.Schema<UserType>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String, default: "/avatar.png" },
    isVerified: { type: Boolean, default: false },
    isLogin: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    verifyToken: { type: String },
    verifyTokenExpiry: { type: Date },
    forgotPassword: { type: String },
    forgotPasswordExpiry: { type: Date },
});


const User = mongoose.models?.users || mongoose.model("users", userSchema);
export default User;
