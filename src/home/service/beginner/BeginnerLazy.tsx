import { lazy, Suspense } from "react";

const Beginner = lazy(() => import("./beginner"));
const BeginnerLazy = () => (
    <Suspense fallback={"Loading..."}>
        <Beginner />
    </Suspense>
);

export default BeginnerLazy;
