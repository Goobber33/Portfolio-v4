"use client"

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Home from "@/components/home";
import About from "@/components/about";

export default function Navbar() {
    const [currentTab, setCurrentTab] = useState('home');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        const storedTab = localStorage.getItem('currentTab');
        if (storedTab) {
            setCurrentTab(storedTab);
        }
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem('currentTab', currentTab);
        }
    }, [currentTab, isClient]);

    const handleTabChange = (newValue: string) => {
        setCurrentTab(newValue);
    };

    if (!isClient) {
        return null;
    }

    return (
        <div className="md:flex flex-col justify-center items-center px-4 py-8 sm:p-12 w-full">
            <Tabs value={currentTab} onValueChange={handleTabChange}>
                <TabsList className="text-sm sm:text-md flex justify-center whitespace-nowrap">
                    <TabsTrigger value="home" className="m-1 px-2 py-1 sm:px-4 sm:py-2 text-base sm:text-lg">Home</TabsTrigger>
                    <TabsTrigger value="about" className="m-1 px-2 py-1 sm:px-4 sm:py-2 text-base sm:text-lg">About</TabsTrigger>
                    <TabsTrigger value="projects" className="m-1 px-2 py-1 sm:px-4 sm:py-2 text-base sm:text-lg">Projects</TabsTrigger>
                    <TabsTrigger value="contact" className="m-1 px-2 py-1 sm:px-4 sm:py-2 text-base sm:text-lg">Contact</TabsTrigger>
                </TabsList>
                <TabsContent value="home" className="flex-grow flex justify-center items-center">
                    <Home />
                </TabsContent>
                <TabsContent value="about" className="">
                    <About />
                </TabsContent>
            </Tabs>
        </div>
    );
}
