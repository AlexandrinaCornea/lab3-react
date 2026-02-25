import { useNavigation } from "@hooks/useNavigation";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Homepage, About, Contact } from "@pages";

const PAGES = ["home", "about", "contact"];

function App() {
    const { currentPage, navigate } = useNavigation(PAGES);

    let page;
    if (currentPage === "home") {
        page = <Homepage />;
    } else if (currentPage === "about") {
        page = <About />;
    } else if (currentPage === "contact") {
        page = <Contact />;
    }

    return (
        <>
            <Navbar navigate={navigate} currentPage={currentPage} />
            {page}
            <Footer />
        </>
    );
}

export default App;
