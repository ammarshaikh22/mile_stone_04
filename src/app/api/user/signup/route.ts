import connect from "@/db_connection/db_connection";
import sendMail from "@/helper/mailer";
import User from "@/model/user";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
connect()

export const POST = async (req: Request) => {
    try {
        const { name, email, password } = await req.json()
        const alreadyEmail = await User.findOne({ email })
        if (alreadyEmail) {
            return NextResponse.json({ message: "user already exist" }, { status: 200 })
        }
        const hashedPassword = await bcryptjs.hash(password, 10)
        const user = new User({ name, email, password: hashedPassword })
        await user.save()
        await sendMail({ email: email, emailType: 'VERIFY', userId: user._id.toString() })
        return NextResponse.json({ message: "user created successfully", success: true }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message + 'try again' }, { status: 500 })
    }
}