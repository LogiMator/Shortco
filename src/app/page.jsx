import { Category } from "./components/category/page";
import { Container } from "./components/contenedor/page";
import { Footer } from "./components/footer/page";
import { MoreProducst } from "./components/moreProducts/page";


export default function Home() {
  return (
    <>
    <Container />
    <Category />
    <MoreProducst />
    <Footer />
    </>
  );
}

