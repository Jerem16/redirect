import { lazy, Suspense } from "react";

const Confirmed = lazy(() => import("./confirmed"));
const ConfirmedLazy = () => (
    <Suspense fallback={"Loading..."}>
        <Confirmed />
    </Suspense>
);

export default ConfirmedLazy;
