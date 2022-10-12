
import './App.scss';
import Coinmarket from './Components/Elements/Coinmarket';
import Comparisontable from './Components/Elements/Comparisontable';
import Deflatationary from './Components/Elements/Deflatationary';
import Governance from './Components/Elements/Governance';
import Hero from './Components/Elements/Hero';
import Plateform from './Components/Elements/Plateform';
import Roadmap from './Components/Elements/Roadmap';
import Token from './Components/Elements/Token';
import Utils from './Components/Elements/Utils';
import Yahoo from './Components/Elements/Yahoo';
import Youtube from './Components/Elements/Youtube';
import Footer from './Components/Layouts/Footer';
import Header from './Components/Layouts/Header';
import FAQ from './Components/Utils/FAQ';






function App() {
  return (
    <div >
      <Header/>
      <Hero/>
      <Yahoo/>
      <Deflatationary/>
      <Coinmarket/>
      <Youtube/>
      <Plateform/>
      <Roadmap/>
      <Governance/>
      <Utils/>
      <Comparisontable/>
      <Token/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
