import contact from "@/models/contact";
import ConnDB from "@/utils/ConnDb";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const payload = await req.json();
        console.log(payload)
        await ConnDB();
        await contact.create(payload)
        // console.log(payload)
        return NextResponse.json({ success: true })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, })
    }

}