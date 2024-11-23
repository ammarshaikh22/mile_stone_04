import mongoose from "mongoose";
interface Blogs {
    title: string;
    content: string;
    image: string;
    date: Date;
}

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
    blogs: Blogs[];
}
const blogSchema = new mongoose.Schema<Blogs>({
    title: { type: String },
    content: { type: String },
    image: { type: String },
    date: { type: Date },
});

const userSchema = new mongoose.Schema<UserType>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String, default: "/avatar.png" },
    isVerified: { type: Boolean, default: false },
    isLogin: { type: Boolean, default: false },
    blogs: [blogSchema],
    isAdmin: { type: Boolean, default: false },
    verifyToken: { type: String },
    verifyTokenExpiry: { type: Date },
    forgotPassword: { type: String },
    forgotPasswordExpiry: { type: Date },
});

const User = mongoose.models.usersinfos || mongoose.model("usersinfos", userSchema);
export default User;
