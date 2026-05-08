(function () {
  const LABEL_PASSWORD = "manteo";
  const STORAGE_KEY = "croatoa_label_preview_unlocked";

  const audio = document.getElementById("player-audio");
  const playBtn = document.getElementById("player-play");
  const playIcon = document.getElementById("player-play-icon");
  const songEl = document.querySelector(".now-playing .song");
  const tinyEl = document.querySelector(".now-playing .tiny");
  const currentTimeEl = document.getElementById("player-current");
  const durationEl = document.getElementById("player-duration");
  const progressBar = document.getElementById("player-progress-bar");
  const progressFill = document.getElementById("player-progress-fill");
  const tracklistEl = document.getElementById("tracklist");
  const labelGate = document.getElementById("label-gate");
  const labelGateStatus = document.getElementById("label-gate-status");
  const labelPasswordInput = document.getElementById("label-password");
  const labelUnlockBtn = document.getElementById("label-unlock-btn");
  const labelGateError = document.getElementById("label-gate-error");

  if (!audio || !playBtn || !tracklistEl) {
    return;
  }

  /** @type {string | null} */
  let currentTrackTitle = null;

  function isLabelUnlocked() {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  }

  function setLabelUnlocked() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  function getAudioButtons() {
    return tracklistEl.querySelectorAll('button.track-row[data-audio]');
  }

  function applyLabelLockState() {
    const unlocked = isLabelUnlocked();
    if (labelGate) {
      labelGate.hidden = unlocked;
    }
    if (labelGateStatus) {
      labelGateStatus.hidden = !unlocked;
    }
    if (labelGateError && unlocked) {
      labelGateError.hidden = true;
      labelGateError.textContent = "";
    }

    getAudioButtons().forEach(function (btn) {
      const file = btn.getAttribute("data-audio");
      const isPublic = btn.getAttribute("data-public") === "true";
      const nameEl = btn.querySelector(".track-name");
      const badgeEl = btn.querySelector(".track-row-badge");
      const title = nameEl ? nameEl.textContent.trim() : "";

      if (!file) {
        return;
      }

      if (unlocked) {
        btn.disabled = false;
        btn.classList.add("track-row--playable");
        if (badgeEl) {
          badgeEl.textContent = "Play";
          badgeEl.classList.add("track-row-badge--action");
        }
      } else if (isPublic) {
        btn.disabled = false;
        btn.classList.add("track-row--playable");
        if (badgeEl) {
          badgeEl.textContent = "Play";
          badgeEl.classList.add("track-row-badge--action");
        }
      } else {
        btn.disabled = true;
        btn.classList.remove("track-row--playable");
        if (badgeEl) {
          badgeEl.textContent = "Coming soon";
          badgeEl.classList.remove("track-row-badge--action");
        }
      }

      btn.classList.toggle(
        "track-row--active",
        currentTrackTitle !== null && title === currentTrackTitle
      );
    });
  }

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "0:00";
    }
    const total = Math.floor(seconds);
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  }

  function setPlayingUi(isPlaying) {
    playBtn.setAttribute("aria-pressed", String(isPlaying));
    playBtn.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
    if (playIcon) {
      playIcon.textContent = isPlaying ? "❚❚" : "▶";
    }
  }

  function updateProgress() {
    const duration = audio.duration;
    const current = audio.currentTime;
    if (Number.isFinite(duration) && duration > 0) {
      const pct = (current / duration) * 100;
      progressFill.style.width = `${pct}%`;
      durationEl.textContent = formatTime(duration);
    } else {
      progressFill.style.width = "0%";
      durationEl.textContent = "—";
    }
    currentTimeEl.textContent = formatTime(current);
  }

  function loadTrack(audioFilename, title) {
    if (!audioFilename) {
      return;
    }
    audio.src = encodeURI(audioFilename);
    songEl.textContent = title;
    tinyEl.textContent = "Now Playing";
    currentTrackTitle = title;
    applyLabelLockState();
  }

  function tryUnlock() {
    const val = labelPasswordInput ? labelPasswordInput.value.trim() : "";
    if (val !== LABEL_PASSWORD) {
      if (labelGateError) {
        labelGateError.hidden = false;
        labelGateError.textContent = "Incorrect password.";
      }
      return;
    }
    if (labelGateError) {
      labelGateError.hidden = true;
      labelGateError.textContent = "";
    }
    setLabelUnlocked();
    if (labelPasswordInput) {
      labelPasswordInput.value = "";
    }
    applyLabelLockState();
  }

  playBtn.addEventListener("click", function () {
    if (!currentTrackTitle) {
      loadTrack("Clapback.mp3", "Clap Back");
    }

    if (audio.paused) {
      audio.play().catch(function () {
        setPlayingUi(false);
      });
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", function () {
    setPlayingUi(true);
    updateProgress();
  });

  audio.addEventListener("pause", function () {
    setPlayingUi(false);
  });

  audio.addEventListener("timeupdate", updateProgress);

  audio.addEventListener("loadedmetadata", updateProgress);

  audio.addEventListener("ended", function () {
    audio.currentTime = 0;
    setPlayingUi(false);
    progressFill.style.width = "0%";
    currentTimeEl.textContent = formatTime(0);
  });

  progressBar.addEventListener("click", function (event) {
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
      return;
    }
    const rect = progressBar.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    audio.currentTime = Math.min(Math.max(ratio, 0), 1) * audio.duration;
    updateProgress();
  });

  tracklistEl.addEventListener("click", function (event) {
    const btn = event.target.closest("button.track-row[data-audio]");
    if (!btn || btn.disabled) {
      return;
    }
    const file = btn.getAttribute("data-audio");
    const nameEl = btn.querySelector(".track-name");
    const title = nameEl ? nameEl.textContent.trim() : "";
    if (!file || !title) {
      return;
    }
    loadTrack(file, title);
    audio.play().catch(function () {
      setPlayingUi(false);
    });
  });

  tracklistEl.addEventListener("keydown", function (event) {
    const btn = event.target.closest("button.track-row[data-audio]");
    if (!btn || btn.disabled) {
      return;
    }
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    event.preventDefault();
    btn.click();
  });

  if (labelUnlockBtn) {
    labelUnlockBtn.addEventListener("click", tryUnlock);
  }
  if (labelPasswordInput) {
    labelPasswordInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        tryUnlock();
      }
    });
  }

  applyLabelLockState();
  setPlayingUi(false);
  currentTimeEl.textContent = "0:00";
  durationEl.textContent = "—";
})();
