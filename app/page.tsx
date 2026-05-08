import Script from "next/script";
import { AlbumCoverFlip } from "./album-cover-flip";

const COVER_PATH = "/start%20a%20fire%20cover.png";
const BACK_FLIP_IMAGE_PATH = "/IMG_5541.png";

export default function HomePage() {
  return (
    <>
      <audio id="player-audio" preload="metadata" />

      <div className="page-bg" aria-hidden="true">
        <img
          className="page-bg-image"
          src={COVER_PATH}
          alt=""
          width={800}
          height={800}
        />
      </div>

      <main className="hf-layout">
        <div className="hf-shell">
          <div className="hf-gray-matte">
            <div className="hf-cover-stack">
              <div className="hf-cover-frame">
                <AlbumCoverFlip
                  coverSrc={COVER_PATH}
                  backSrc={BACK_FLIP_IMAGE_PATH}
                  showPhotoLabel="Flip to full-size photo"
                  showCoverLabel="Flip back to album cover"
                />
              </div>
            </div>
            <h1 className="hf-album-title" translate="no">
              Start a Fire
            </h1>
            <p className="hf-artist" translate="no">
              CROATOA
            </p>
            <div className="hf-date-outer">
              <div className="hyper-release-date">
                <i
                  className="fa-solid fa-calendar hf-release-icon"
                  aria-hidden="true"
                />
                <span className="hf-available-text">Available June 1, 2026</span>
                <a
                  className="hf-presave-link"
                  href="https://distrokid.com/hyperfollow/croatoa/start-a-fire-2?ref=release"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  presave now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="the-whole-thing">
          <section
            className="player-card hf-glass-panel hyper-shadow"
            aria-label="Album tracklist player"
          >
            <div className="player-card-pad">
              <div className="player-top">
                <div className="now-playing">
                  <p className="tiny">Preview</p>
                  <p className="song">Start a Fire</p>
                  <p className="artist">CROATOA</p>
                </div>
                <div className="label-gate" id="label-gate">
                  <span className="label-gate-hint" id="label-gate-hint">
                    Label preview
                  </span>
                  <input
                    type="password"
                    id="label-password"
                    className="label-gate-input"
                    autoComplete="current-password"
                    placeholder="Password"
                    aria-label="Label preview password"
                  />
                  <button
                    type="button"
                    className="label-gate-btn"
                    id="label-unlock-btn"
                  >
                    Unlock all tracks
                  </button>
                </div>
                <div className="transport">
                  <button
                    type="button"
                    id="player-play"
                    className="player-play"
                    aria-pressed="false"
                    aria-label="Play"
                  >
                    <span
                      id="player-play-icon"
                      className="player-play-icon"
                      aria-hidden="true"
                    >
                      ▶
                    </span>
                  </button>
                </div>
              </div>

              <div className="progress-wrap">
                <span id="player-current" className="time-label">
                  0:00
                </span>
                <button
                  type="button"
                  id="player-progress-bar"
                  className="progress-bar"
                  aria-label="Seek in track"
                >
                  <span
                    id="player-progress-fill"
                    className="progress-fill"
                  />
                </button>
                <span id="player-duration" className="time-label">
                  —
                </span>
              </div>

              <p className="label-gate-status" id="label-gate-status" hidden>
                All tracks unlocked
              </p>
              <p
                className="label-gate-error"
                id="label-gate-error"
                role="status"
                aria-live="polite"
                hidden
              />

              <ol className="tracklist" id="tracklist">
                <li>
                  <button
                    type="button"
                    className="track-row"
                    data-audio="Start A Fire.mp3"
                    data-public="false"
                    disabled
                  >
                    <span className="track-name">Start a Fire</span>
                    <span className="track-row-badge">Coming soon</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="track-row"
                    data-audio="Pete Davidson.mp3"
                    data-public="false"
                    disabled
                  >
                    <span className="track-name">Pete Davidson</span>
                    <span className="track-row-badge">Coming soon</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="track-row track-row--playable"
                    data-audio="Clapback.mp3"
                    data-public="true"
                  >
                    <span className="track-name">Clap Back</span>
                    <span className="track-row-badge">Play</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="track-row"
                    data-audio="Always Have To Win.mp3"
                    data-public="false"
                    disabled
                  >
                    <span className="track-name">Always Have to Win</span>
                    <span className="track-row-badge">Coming soon</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="track-row"
                    data-audio="Roanoke.mp3"
                    data-public="false"
                    disabled
                  >
                    <span className="track-name">Roanoke</span>
                    <span className="track-row-badge">Coming soon</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="track-row"
                    data-audio="All Alone And Tired.mp3"
                    data-public="false"
                    disabled
                  >
                    <span className="track-name">All Alone and Tired</span>
                    <span className="track-row-badge">Coming soon</span>
                  </button>
                </li>
                <li>
                  <div className="track-row track-row--static">
                    <span className="track-name">Dreamcatcher</span>
                    <span className="track-row-badge">Coming soon</span>
                  </div>
                </li>
                <li>
                  <div className="track-row track-row--static">
                    <span className="track-name">Humdrum #1</span>
                    <span className="track-row-badge">Coming soon</span>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </main>
      <Script src="/player.js" strategy="afterInteractive" />
    </>
  );
}
