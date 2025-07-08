import Navbar from "@/Components/Navbar/Navbar";
import Navbar2 from "@/Components/Navbar2/Navbar2";
import SpecialSectorsGrid from "@/Components/Iconspart/IconParts";
import DynamicTabsSection from "@/Components/NoticeRelease/Noticerelease";
import MediaSection from "@/Components/MediaSection/MediaSection";
import TodoFetcher from "@/Components/API/API";
import Footer from "@/Components/Footer/Footer"
import ImageCarousel from "@/Components/Carasoul/Carasoul";
export default function Home() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <ImageCarousel/>
      <SpecialSectorsGrid />
        <DynamicTabsSection /> 
      <MediaSection /> 
       {/* <TodoFetcher/>  */}
      <Footer/>
    </>
  );
}
