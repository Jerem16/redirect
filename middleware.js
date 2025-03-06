import { NextResponse } from "next/server";

export function middleware(req) {
    const url = req.nextUrl; // Utilisation correcte de nextUrl
    const userAgent = req.headers.get("user-agent") || "";
    const isMobile = /Mobi|Android/i.test(userAgent);

    if (isMobile) {
        return NextResponse.redirect(
            new URL(
                "https://mobile-peur-de-la-conduite.wii-design.com",
                req.url
            )
        );
    }

    return NextResponse.redirect(
        new URL("https://desktop-peur-de-la-conduite.wii-design.com", req.url)
    );
}

export const config = {
    matcher: "/",
};
