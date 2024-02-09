import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex justify-center items-center p-12">
      <Tabs defaultValue="account" className="w-[300px] flex flex-col">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="home" className="flex-grow flex justify-center items-center">
          {/* Separate container for the h1 text */}
          <div className="text-center p-28">
            <h1 className="text-8xl whitespace-nowrap">
              Kyle Parks
            </h1>
            <p className="text-4xl text-center p-6">
              Full Stack Developer
            </p>
          </div>
        </TabsContent>
        <TabsContent value="about">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
