"use client";

import { useCallback, useState } from "react";

export type AlbumCoverFlipProps = {
  coverSrc: string;
  backSrc: string;
  showPhotoLabel: string;
  showCoverLabel: string;
};

export function AlbumCoverFlip({
  coverSrc,
  backSrc,
  showPhotoLabel,
  showCoverLabel,
}: AlbumCoverFlipProps) {
  const [flipped, setFlipped] = useState(false);

  const toggle = useCallback(() => {
    setFlipped((value) => !value);
  }, []);

  return (
    <button
      type="button"
      className="hf-cover-flip"
      onClick={toggle}
      aria-pressed={flipped}
      aria-label={flipped ? showCoverLabel : showPhotoLabel}
    >
      <span
        className={`hf-cover-flip-track${flipped ? " is-flipped" : ""}`}
        aria-hidden="true"
      >
        <span className="hf-cover-face hf-cover-face--front">
          <img
            className="art-cover hyper-shadow"
            src={coverSrc}
            alt=""
            width={800}
            height={800}
            draggable={false}
          />
        </span>
        <span className="hf-cover-face hf-cover-face--back">
          <img
            className="art-cover hyper-shadow"
            src={backSrc}
            alt=""
            width={800}
            height={800}
            draggable={false}
          />
        </span>
      </span>
    </button>
  );
}
