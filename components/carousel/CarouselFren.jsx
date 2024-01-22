import React, { useEffect, useState, useRef } from "react";

const mediaItems = [
  {
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/VideosCarrucel%2Fmecanica%20torres.mp4?alt=media&token=a41a91a7-d1a0-4026-aef3-3e133ebd9c9d",
  },
  {
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/VideosCarrucel%2Fvs.mp4?alt=media&token=fcb4b1af-f3c7-4d3b-93ab-2bfdebdd0747",
  },
  {
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/VideosCarrucel%2FDe%20tu%20mano.mp4?alt=media&token=8d94f618-3314-47fe-a647-1ba73a803b63",
  },
  {
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/VideosCarrucel%2Fcasacampo.mp4?alt=media&token=e47994a1-ef32-47e0-a02a-d61a4b9e6d1c",
  },
  {
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/VideosCarrucel%2FLa%20Flopi.mp4?alt=media&token=c62541b0-411c-4454-9f00-7cb69f7f2ddd",
  },
  {
    type: "video",
    url: "https://firebasestorage.googleapis.com/v0/b/grupostart-fd312.appspot.com/o/VideosCarrucel%2Flarereina.mp4?alt=media&token=6aca7cef-db85-446c-b144-3961447e9884",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  },
  
  // Agrega más elementos según sea necesario
];

const Carousel = ({
  slides = mediaItems,
  autoSlide = true,
  autoSlideInterval = 3000,
  title = "Mi Negocio",
  subtitle = "Soluciones creativas, resultados creativos.",
  marginTop = 80,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopAutoSlide, setStopAutoSlide] = useState(false);
  const videoRef = useRef(null);

  const prevSlide = () =>
    setCurrentIndex((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const nextSlide = () =>
    setCurrentIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const handleVideoEnded = () => {
    if (stopAutoSlide) {
      nextSlide();
    }
  };

  const playCurrentVideo = () => {
    if (slides[currentIndex].type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {
        setStopAutoSlide(true);
      });
    }
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(() => {
      playCurrentVideo();
    }, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, autoSlide]);

  useEffect(() => {
    playCurrentVideo();
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleVideoPlaying = () => {
        setTimeout(() => {
          if (!stopAutoSlide) {
            nextSlide();
          }
        }, videoElement.duration * 1000);
      };

      videoElement.addEventListener("ended", handleVideoEnded);
      videoElement.addEventListener("playing", handleVideoPlaying);

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnded);
        videoElement.removeEventListener("playing", handleVideoPlaying);
      };
    }
  }, [currentIndex, stopAutoSlide]);

  return (
    <div
      className={`h-[450px] sm:h-[550px] md:h-[650px] bg-cover bg-no-repeat bg-center bg-origin-border mt-[${marginTop}px]`}
    >
      <div className="h-[450px] sm:h-[550px] md:h-[650px] w-full m-auto relative group">
        <div className="relative w-full h-full bg-center bg-cover bg-origin-border duration-500">
          {slides[currentIndex].type === "image" ? (
            <img
              onContextMenu={(e) => e.preventDefault()}
              onTouchStart={() => setStopAutoSlide(true)}
              onTouchEnd={() => setStopAutoSlide(false)}
              src={slides[currentIndex]?.url}
              alt=""
              className="absolute hover:cursor-pointer w-full h-full object- object-center duration-500"
            />
          ) : (
            <video
              ref={videoRef}
              onContextMenu={(e) => e.preventDefault()}
              onTouchStart={() => setStopAutoSlide(true)}
              onTouchEnd={() => setStopAutoSlide(false)}
              src={slides[currentIndex]?.url}
              alt=""
              className="absolute hover:cursor-pointer w-full h-full object- object-center duration-500"
              controls={false}
            />
          )}
        </div>
        {/* Left Arrow */}
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        {/* Right Arrow */}
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel
