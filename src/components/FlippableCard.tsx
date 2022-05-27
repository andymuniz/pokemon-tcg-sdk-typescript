import { useReducer } from "react";
import { classNames } from "../util/classNames";
import "./FlippableCard.css";

interface FlippableCardProps {
  frontImgSrc: string;
  backImgSrc: string;
}

export function FlippableCard({ frontImgSrc, backImgSrc }: FlippableCardProps) {
  const [isFlipped, flip] = useReducer((state) => !state, false);

  return (
    <div
      className={classNames("card", isFlipped ? "flipped" : null)}
      onClick={flip}
    >
      <span className="card-backface">
        <img src={backImgSrc} />
      </span>
      <span className="card-frontface">
        <img src={frontImgSrc} />
        <span className="glare"></span>
      </span>
    </div>
  );
}
