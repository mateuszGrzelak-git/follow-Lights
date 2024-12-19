import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { login, password } = await req.json();

    if (!login || !password) {
        return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
    }

    const json = JSON.stringify({ Login: login, Password: password }, null, 2);
    const filePath = path.join(process.cwd(), "../json/UserLogin.json");

    try {
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(filePath, json);
        return NextResponse.json({ message: "File saved successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error saving file:", error);
        return NextResponse.json({ error: "Failed to save file" }, { status: 500 });
    }
}
