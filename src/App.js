import './App.css';
import HeroPart from './components/HeroPart';
import Navbar from './components/Navbar';
import SocialIcons from './components/SocialIcons';
import bgBanner from './Images/bg-banner.jpg'

function App() {
  return (
    <div style={{backgroundImage: `url(${bgBanner})`,backgroundSize: 'cover'}}className='h-screen text-white'>
      <Navbar/>
      <HeroPart/>
      <SocialIcons/>
    </div>
  );
}

export default App;
