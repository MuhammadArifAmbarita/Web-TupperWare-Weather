import Gempa from "../pages/gempa.js";
import Cuaca from "../pages/cuaca.js";
import AboutUs from "../pages/about-us.js";
import Home from "../pages/home.js";

const routes = {
    '/': Home,
    '/home': Home,
    '/gempa': Gempa,
    '/cuaca': Cuaca,
    '/about-us': AboutUs,
}

export default routes;