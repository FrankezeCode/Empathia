
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/> 
      <Main/>
      <Footer/> 
    </div>
  );
}
