import ListItem from "@/components/ListItem/ListItem";
import Navbar from "@/components/Navbar/Navbar";
import SearchInput from "@/components/SearchInput/SearchInput";
import React from "react";

interface HomeProps {
  children: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-4 p-8">
      <Navbar />
      <div className="w-1/2">
        <SearchInput />
      </div>
      <div className="flex justify-center">
        <p>4 Hasil Ditemukan</p>
      </div>
      <div className="w-full h-full flex flex-row justify-between">
        <ListItem className="flex-[1]" />
        <div className="flex-[1]">{children}</div>
      </div>
    </main>
  );
};

export default Home;
