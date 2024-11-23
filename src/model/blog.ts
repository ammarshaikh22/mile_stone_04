import mongoose from "mongoose";
interface Blogs {
    userId: string;
    title: string;
    content: string;
    image: string;
    date: Date;
    authorImage: string;
    authorName: string;
}

const blogSchema = new mongoose.Schema<Blogs>({
    userId: { type: String },
    title: { type: String },
    content: { type: String },
    image: { type: String },
    date: { type: Date },
    authorImage: { type: String },
    authorName: { type: String },
});

const Blog = mongoose.models.blogs || mongoose.model("blogs", blogSchema);
export default Blog;
