import React from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex flex-col min-h-screen max-w-screen bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url('/background.jpg')"
      }}
    >
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
