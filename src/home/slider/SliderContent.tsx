"use client";
import React, { useState, lazy, Suspense } from "react";
import useT from "../../hook/useTimeoutWorker";

import SliderIntro from "./SliderContentIntro";

const ClientSldProvider = lazy(() => import("./ClientSldProvider"));

const SliderContent = () => {
    const [showSlider, setShowSlider] = useState(false);

    useT(() => {
        setShowSlider(true);
    }, 2600);

    if (!showSlider) {
        return <SliderIntro />;
    }

    return (
        <Suspense fallback={<SliderIntro />}>
            <ClientSldProvider />
        </Suspense>
    );
};

export default SliderContent;
