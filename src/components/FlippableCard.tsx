import { useReducer } from "react";
import { classNames } from "../util/classNames";

interface FlippableCardProps {
  frontImgSrc: string;
  backImgSrc: string;
}

export function FlippableCard({ frontImgSrc, backImgSrc }: FlippableCardProps) {
  const [isFlipped, flip] = useReducer((state) => !state, false);

  return (
    // Card
    <div
      className={classNames(
        "cursor-pointer",
        "rounded-xl",
        "[transform-style:preserve-3d]",
        "transition duration-200 ease-out",
        isFlipped ? "[transform:rotateY(180deg)]" : null
      )}
      onClick={flip}
    >
      {/* Card Backface */}
      <span
        className={classNames(
          "rounded-xl",
          "[transform:translateZ(-1px)]",
          "absolute top-0 left-0",
          "h-full w-full",
          "transition duration-200 ease-out"
        )}
      >
        <img
          src={backImgSrc}
          className={classNames(
            "rounded-xl",
            "h-full w-full",
            "[transform:rotateY(180deg)]"
          )}
        />
      </span>
      {/* Card Frontface */}
      <span
        className={classNames("rounded-xl", "transition duration-200 ease-out")}
      >
        <img src={frontImgSrc} className="rounded-xl" />
      </span>
    </div>
  );
}
