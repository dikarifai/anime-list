import ListItem from "@/components/ListItem/ListItem";
import Navbar from "@/components/Navbar/Navbar";
import SearchInput from "@/components/SearchInput/SearchInput";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-4 p-8">
      <Navbar />
      <div className="w-1/2">
        <SearchInput />
      </div>
      <div className="flex justify-center">
        <p>4 Hasil Ditemukan</p>
      </div>
      <div className="w-3/4 h-full">
        <ListItem />
      </div>
    </main>
  );
}
