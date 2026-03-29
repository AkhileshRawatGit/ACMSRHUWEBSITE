'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoadingContextType {
    isLoading: boolean;
    finishLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType>({
    isLoading: true,
    finishLoading: () => { },
});

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
    };

    return (
        <LoadingContext.Provider value={{ isLoading, finishLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);
