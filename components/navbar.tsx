import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Home from "@/components/home";

export default function Navbar() {
    return (
        <div className="flex justify-center items-center px-4 py-8 sm:p-12">
            <Tabs defaultValue="home" className="w-full sm:w-[450px] flex flex-col">
                <TabsList className="text-sm sm:text-md flex justify-center whitespace-nowrap">
                    <TabsTrigger value="home" className="m-1 px-2 py-1 sm:px-4 sm:py-2 text-base sm:text-lg">Home</TabsTrigger>
                    <TabsTrigger value="about" className="m-1 px-2 py-1 sm:px-4 sm:py-2 text-base sm:text-lg">About</TabsTrigger>
                    <TabsTrigger value="projects" className="m-1 px-2 py-1 sm:px-4 sm:py-2 text-base sm:text-lg">Projects</TabsTrigger>
                    <TabsTrigger value="contact" className="m-1 px-2 py-1 sm:px-4 sm:py-2 text-base sm:text-lg">Contact</TabsTrigger>
                </TabsList>
                <TabsContent value="home" className="flex-grow flex justify-center items-center">
                    <Home />
                </TabsContent>
                <TabsContent value="about">Hello World!</TabsContent>
            </Tabs>
        </div>
    );
}
