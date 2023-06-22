import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

interface LazyImageProps {
  src: string;
  alt: string;
  height: string;
}
const LazyImage = ({ src, alt, height }: LazyImageProps) => (
  <LazyLoadImage
    alt={alt}
    src={src}
    effect="opacity"
    width={"100%"}
    className={`object-cover rounded-t-lg  ${height}`}
  />
);

export default LazyImage;
