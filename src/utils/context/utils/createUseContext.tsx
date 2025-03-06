/* eslint-disable @typescript-eslint/no-explicit-any */ import { useContext } from "react";
export const createUseContext = <T,>(
    context: React.Context<T | any>,
    name: string
) => {
    return () => {
        const ctx = useContext(context);
        if (ctx === undefined) {
            throw new Error(
                `${name} must be used within a ${name.replace(
                    "use",
                    ""
                )}Provider`
            );
        }
        return ctx;
    };
}; /* eslint-enable @typescript-eslint/no-explicit-any */
