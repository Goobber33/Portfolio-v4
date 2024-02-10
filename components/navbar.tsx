import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Home from "@/components/home";

export default function Navbar() {
    return (
        <div className="flex justify-center items-center p-12">
            <Tabs defaultValue="home" className="w-[450px] flex flex-col">
                <TabsList className="text-md">
                    <TabsTrigger value="home" className="px-4 py-1 text-lg">Home</TabsTrigger>
                    <TabsTrigger value="about" className="px-4 py-2 text-lg">About</TabsTrigger>
                    <TabsTrigger value="projects" className="px-4 py-2 text-lg">Projects</TabsTrigger>
                    <TabsTrigger value="contact" className="px-4 py-2 text-lg">Contact</TabsTrigger>
                </TabsList>
                <TabsContent value="home" className="flex-grow flex justify-center items-center">
                    <Home />
                </TabsContent>
                <TabsContent value="about">Hello World!</TabsContent>
            </Tabs>
        </div>
    );
}
