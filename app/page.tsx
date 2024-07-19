import './globals.css';
import Navbar from "./navbar";
import Footer from "./footer";
import HeroSection from "./herosection";
import MyExperience from "./myexperience";
import MyProjects from "./myprojects";
import MySkills from "./myskills";


export default function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <div className='hero--transition'>
          <div className='scroll--down'></div>
        </div>
        <MySkills />
        <MyExperience />
        <MyProjects />
        <Footer />
    </>
  );
}
