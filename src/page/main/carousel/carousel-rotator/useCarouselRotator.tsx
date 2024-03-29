import { useDispatch, useSelector } from "react-redux";
import { TCombinedStates } from "~/src/store";
import { setImageIndicatorCurIdx, } from "~/src/store/action/carousel";

type TRetUseCarouselRotator = (
  direction: "left" | "right"
) => (_: React.SyntheticEvent<HTMLDivElement>) => void;

const useCarouselRotator: TRetUseCarouselRotator = (
  direction: "left" | "right"
) => {
  const dispatch = useDispatch();
  const placerEl = useSelector((state: TCombinedStates) => state.carousel.ref);
  const _setImageIndicatorCurIdx = (idx: number) => dispatch(setImageIndicatorCurIdx(idx));
  const imgLen = useSelector((state: TCombinedStates) => state.carouselAsync.urls?.length);
  const curIdx = useSelector((state: TCombinedStates) => state.carousel.idx);
  const imgWidth = useSelector((state: TCombinedStates) => state.carousel.imgWidth);

  const fnBody = (_: React.SyntheticEvent<HTMLDivElement>) => {
    if (!placerEl?.current || imgLen === undefined || imgWidth === undefined)
      return;

    switch (direction) {
      case "left":
        if (curIdx === 0) {
          _setImageIndicatorCurIdx(imgLen - 1);
          placerEl.current!.style.transform = `translate(${
            -imgWidth * (imgLen - 1)
          }px, 0px)`;
        }
        else {
          _setImageIndicatorCurIdx(curIdx - 1);
          placerEl.current!.style.transform = `translate(${
            -imgWidth * (curIdx - 1)
          }px, 0px)`;
        }
        break;

      case "right":
        if (curIdx === imgLen - 1) {
          _setImageIndicatorCurIdx(0); // curIdx is 0
          placerEl.current!.style.transform = `translate(0px, 0px)`;
        }
        else {
          _setImageIndicatorCurIdx(curIdx + 1);
          placerEl.current!.style.transform = `translate(${
            -imgWidth * (curIdx + 1)
          }px, 0px)`;
        }
        break;

      default:
        throw new Error("Can't reach at here!");
    }
  };

  return fnBody;
};

export default useCarouselRotator;
