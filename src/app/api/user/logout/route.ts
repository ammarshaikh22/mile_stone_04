import connect from '@/db_connection/db_connection';
import User from '@/model/user';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";
connect();

export const POST = async (req: NextRequest) => {
    try {
        const token = req.cookies.get('token')?.value || ''
        if (!token) {
            return NextResponse.json({ message: 'No token provided' }, { status: 400 });
        }
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN!) as JwtPayload;
        const userId = decoded?.id;
        const user: any = await User.findOne({ _id: userId });
        user.isLogin = false;
        await user.save();
        const response = NextResponse.json({
            message: "Logout successfully",
            success: true
        }, {
            status: 200
        });
        response.cookies.set('token', '', {
            expires: new Date(0),
        });
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
