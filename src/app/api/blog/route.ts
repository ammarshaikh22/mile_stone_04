import jwt, { JwtPayload } from "jsonwebtoken";
import connect from "@/db_connection/db_connection";
import User from "@/model/user";
import Blog from "@/model/blog";
import { NextRequest, NextResponse } from "next/server";

connect();

export const POST = async (req: NextRequest) => {
    try {
        const { title, content, image } = await req.json();
        const token = req.cookies.get("token")?.value || "";
        if (!token) {
            return NextResponse.json({ message: "No token provided" }, { status: 400 });
        }

        const decoded = jwt.verify(token, process.env.SECRET_TOKEN!) as JwtPayload;
        const userId = decoded?.id;

        if (!title || !content || !image) {
            return NextResponse.json({ message: "Invalid data provided", success: false }, { status: 400 });
        }

        const user = await User.findById(userId);
        if (!user || !user.isLogin || !user.isVerified) {
            return NextResponse.json({ message: "User not found or not verified", success: false }, { status: 404 });
        }

        const date = new Date();
        const blogData = {
            userId: userId,
            title: title,
            content: content,
            image: image,
            date: date,
            authorImage: user.profileImage,
            authorName: user.name,
        };
        const blog = new Blog(blogData);
        await blog.save()
        user.blogs.push({ title, content, image, date });
        await user.save()
        return NextResponse.json({ message: "Blog created successfully", success: true }, { status: 200 });
    } catch (error: any) {
       return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
