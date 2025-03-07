import { NextResponse } from "next/server";

export function middleware(req) {
    const userAgent = req.headers.get("user-agent") || "";
    const isMobile = /Mobi|Android/i.test(userAgent);

    const response = NextResponse.redirect(
        new URL(
            isMobile
                ? "https://mobile-peur-de-la-conduite.wii-design.com"
                : "https://desktop-peur-de-la-conduite.wii-design.com",
            req.url
        )
    );

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
