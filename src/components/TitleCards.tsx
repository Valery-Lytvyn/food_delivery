import { LazyLoadImage } from "react-lazy-load-image-component";
import { cardsInscriptions, ORDER_BUTTON_LABEL } from "../constants/constants";

function TitleCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {cardsInscriptions.map(({ cardTitle, cardSubTitle, imgURL, imgAlt }) => (
        <div className="rounded-xl relative overflow-hidden" key={imgURL}>
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{cardTitle}</p>
            <p className="px-2">{cardSubTitle}</p>
            <button
              className="border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-600 hover:text-white hover:duration-1000"
              aria-label="order now"
            >
              {ORDER_BUTTON_LABEL}
            </button>
          </div>
          <LazyLoadImage
            src={imgURL}
            alt={imgAlt}
            height={"max-h-[160px] md:max-h-[200px]"}
          />
        </div>
      ))}
    </div>
  );
}

export default TitleCards;
