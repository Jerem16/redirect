import { NextResponse } from "next/server";

export function middleware(req) {
    const userAgent = req.headers.get("user-agent") || "";
    const isMobile = /Mobi|Android/i.test(userAgent);

    // Créer une instance de NextResponse
    const response = NextResponse.next();

    // Définir le cookie correctement
    response.cookies.set("deviceType", isMobile ? "mobile" : "desktop", {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });

    return response;
}

export const config = {
    matcher: "/",
};
