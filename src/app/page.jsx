import { Category } from "./category/page";
import { Container } from "./contenedor/page";
import { Footer } from "./footer/page";
import { MoreProducst } from "./moreProducts/page";


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

