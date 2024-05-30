import { useState, useEffect } from "react";

function Carousel({ children, specialClasses }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slider();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const slider = (e) => {
    const name = e?.target?.name;
    if (name === "prev" || name === "next") e.preventDefault();

    if (name === "prev") {
      setActiveIndex(activeIndex <= 0 ? children.length - 1 : activeIndex - 1);
    } else {
      setActiveIndex(activeIndex >= children.length - 1 ? 0 : activeIndex + 1);
    }
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden flex justify-start items-center"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => {
        return (
          <div
            className={
              "box-border min-w-full overflow-hidden translate-x-0 transition-transform duration-1000 ease-in-out"
            }
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            key={index}
          >
            {item}
          </div>
        );
      })}
      <div className="absolute bottom-[5%] left-1/2 translate-x-[-50%]">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "w-[8px] h-[8px] p-0 rounded-full bg-black border-[1px] border-solid border-gray-500 transition-colors duration-1000 ease-in-out my-0 mx-[2px]"
                  : "w-[8px] h-[8px] p-0 rounded-full bg-white border-[1px] border-solid border-gray-500 transition-colors duration-1000 ease-in-out my-0 mx-[2px]"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>

      <button
        name="next"
        className="bg-transparent text-white text-5xl active:text-black absolute right-[8%] hover:opacity-75"
        onClick={slider}
      >
        {">"}
      </button>
      <button
        name="prev"
        className="bg-transparent text-white text-5xl active:text-black absolute left-[8%] hover:opacity-75"
        onClick={slider}
      >
        {"<"}
      </button>
    </div>
  );
}

export default Carousel;
