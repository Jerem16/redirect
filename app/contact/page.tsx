import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact",
};
const ContactHome = lazy(() => import("../../src/home/contact-section"));
export default function Page() {
    return (
        <section className="section">
            <div className="fixed-menu"></div>
            <Suspense fallback={"<HeaderGhost />"}>
                <ContactHome />
            </Suspense>
        </section>
    );
}
