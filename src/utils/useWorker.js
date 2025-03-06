// src/hooks/useWorker.js
import { useEffect, useRef, useState } from "react";

const useWorker = (workerScript) => {
    const workerRef = useRef(null);
    const [workerResponse, setWorkerResponse] = useState(null);

    useEffect(() => {
        if (window.Worker) {
            workerRef.current = new Worker(workerScript);

            workerRef.current.onmessage = (event) => {
                setWorkerResponse(event.data);
            };
        }

        return () => {
            workerRef.current?.terminate();
        };
    }, [workerScript]);

    const postMessage = (data) => {
        workerRef.current?.postMessage(data);
    };

    return { workerResponse, postMessage };
};

export default useWorker;
