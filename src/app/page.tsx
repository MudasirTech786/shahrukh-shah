import { Container } from "@/components/Container/Container";
import { Gallery } from "@/components/Gallery/Gallery";
import { galleryPhotos } from "@/data/gallery";

export default function HomePage() {
  return (
    <Container className="py-10 sm:py-16">
      <Gallery photos={galleryPhotos} />
    </Container>
  );
}
