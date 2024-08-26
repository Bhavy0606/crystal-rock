import Facilities from "@/components/facilities/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Restoring from "@/components/restoring/page";
import Slider from "@/components/slider/page";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Restoring />
      <Facilities />
      <Footer />
    </>
  );
}
