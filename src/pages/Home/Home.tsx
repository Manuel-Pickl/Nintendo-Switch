import "./Home.scss"
import Apps from "../../components/Apps/Apps";
import Footer from "../../components/Footer/Footer";
import Games from "../../components/Games/Games";
import Header from "../../components/Header/Header";

const Home = () => (
    <div className="Home">
        <Header />
        <Games />
        <Apps />
        <Footer />
    </div>
)

export default Home;