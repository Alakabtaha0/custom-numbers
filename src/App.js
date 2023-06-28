import "./css/master.css"
import NavBar from "./Components/navbar/navbar";
import Header from "./Pages/home/header/header";
import WhatWeDo from "./Pages/home/whatweoffer/whatwedo";
import HowItWorks from "./Pages/home/howitworks/howitworks";
import About from "./Pages/home/about/about";
import WhyUs from "./Pages/home/whyus/whyus";
import FAQs from "./Pages/home/FAQ/FAQ";
import Footer from './Components/footer/Footer';

function App() {
	return (
		<>
			<NavBar />
			<Header />
			<WhatWeDo />
			<HowItWorks />
			<About />
			<WhyUs />
			<FAQs />
			<Footer />
		</>
	);
}

export default App;
