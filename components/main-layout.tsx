import React from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const MainLayout = () => {
  return (
    <div
      className="flex flex-col min-h-screen w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/background.webp')",
      }}
    >
      <Navbar />
      <main className="flex-grow">
        
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
