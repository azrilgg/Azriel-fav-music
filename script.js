/*
 * ═══════════════════════════════════════════════════════════════
 * RIEL FAV MUSIC - PREMIUM 3D SPOTIFY PLAYLIST WEBSITE
 * JavaScript - Interactions, Animations & Dynamic Features
 * ═══════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════
// MUSIC DATA
// ═══════════════════════════════════════════════════════════════
const musicData = [
  {
    id: 1,
    judul: "Paris",
    penyanyi: "The Chainsmokers",
    embed: "https://open.spotify.com/track/72jbDTw1piOOj770jWNeaG",
    duration: "3:42",
    mood: "romantic"
  },
  {
    id: 2,
    judul: "Closer",
    penyanyi: "The Chainsmokers, Halsey",
    embed: "https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw",
    duration: "4:04",
    mood: "romantic"
  },
  {
    id: 3,
    judul: "Alone",
    penyanyi: "Marshmello",
    embed: "https://open.spotify.com/track/3MEYFivt6bilQ9q9mFWZ4g",
    duration: "3:20",
    mood: "energetic"
  },
  {
    id: 4,
    judul: "Happier",
    penyanyi: "Marshmello, Bastille",
    embed: "https://open.spotify.com/track/2dpaYNEQHiRxtZbfNsse99",
    duration: "3:35",
    mood: "sad"
  },
  {
    id: 6,
    judul: "2002",
    penyanyi: "Anne-Marie",
    embed: "https://open.spotify.com/track/2BgEsaKNfHUdlh97KmvFyo?si=d94bdfaf1f114db1",
    duration: "3:07",
    mood: "happy"
  },
  {
    id: 7,
    judul: "Perfect Strangers",
    penyanyi: "Jonas Blue, JP Cooper",
    embed: "https://open.spotify.com/track/3P3pw6C19j31Rnzgo3JG7o?si=d56a50f584b24",
    duration: "3:16",
    mood: "energetic"
  },
  {
    id: 8,
    judul: "Waiting For Love",
    penyanyi: "Avicii",
    embed: "https://open.spotify.com/track/2P4OICZRVAQcYAV2JReRfj?si=3f781268cde14abf",
    duration: "3:48",
    mood: "energetic"
  },
  {
    id: 9,
    judul: "By Your Side",
    penyanyi: "Jonas Blue, RAYE",
    embed: "https://open.spotify.com/track/4QTuyRQshEZYurtIDfE6g0?si=2a07627e3cfe41f1",
    duration: "3:21",
    mood: "happy"
  },
  {
    id: 10,
    judul: "8 Letters",
    penyanyi: "Why Don't We",
    embed: "https://open.spotify.com/track/4zRZAmBQP8vhNPf9i9opXt?si=422662284f5b4bfb",
    duration: "3:10",
    mood: "focus"
  },
  {
    id: 11,
    judul: "Wake Me Up",
    penyanyi: "Avicii",
    embed: "https://open.spotify.com/track/0nrRP2bk19rLc0orkWPQk2?si=171b86a8157a4afb",
    duration: "4:09",
    mood: "energetic"
  },
  {
    id: 12,
    judul: "All Night",
    penyanyi: "The Vamps, Matoma",
    embed: "https://open.spotify.com/track/0dXNQ8dckG4eYfEtq9zcva?si=167155c8c1d94cb2",
    duration: "3:16",
    mood: "focus"
  },
  {
    id: 13,
    judul: "Ava",
    penyanyi: "Famy",
    embed: "https://open.spotify.com/track/30CkdHzQnMEI8JvQLkWlP3?si=55132a737c404c7e",
    duration: "3:58",
    mood: "focus"
  },
  {
    id: 14,
    judul: "Rise",
    penyanyi: "Jonas Blue, Jack & Jack",
    embed: "https://open.spotify.com/track/5ZSl6gDoV6bPPxzmLeneV9?si=8d93a6f478884f8b",
    duration: "3:13",
    mood: "focus"
  },
  {
    id: 15,
    judul: "This One's For You",
    penyanyi: "David Guetta, Zara Larsson",
    embed: "https://open.spotify.com/track/46NBoIAHrmR7qcUGCIFEjR?si=96fc6c5002684fdc",
    duration: "3:27",
    mood: "focus"
  },
  {
    id: 16,
    judul: "Lush Life",
    penyanyi: "Zara Larsson",
    embed: "https://open.spotify.com/track/1rIKgCH4H52lrvDcz50hS8?si=e237ca81bc374cab",
    duration: "3:21",
    mood: "happy"
  },
  {
    id: 17,
    judul: "Sorry",
    penyanyi: "Justin Bieber",
    embed: "https://open.spotify.com/track/0JBq4P9Jpp37F1PteCgGL1?si=4bb5f0b23be645d5",
    duration: "3:20",
    mood: "energetic"
  },
  {
    id: 18,
    judul: "Beauty and a Beat",
    penyanyi: "Justin Bieber, Nicki Minaj",
    embed: "https://open.spotify.com/track/190jyVPHYjAqEaOGmMzdyk?si=d6bfef3b87a74b48",
    duration: "3:48",
    mood: "energetic"
  },
  {
    id: 19,
    judul: "The Ocean",
    penyanyi: "Mike Perry, Shy Martin",
    embed: "https://open.spotify.com/track/2CPqh63wRVscbceKcPxwvv?si=ad2f98f5e79a4908",
    duration: "3:03",
    mood: "chill"
  },
  {
    id: 20,
    judul: "Something Just Like This",
    penyanyi: "The Chainsmokers, Coldplay",
    embed: "https://open.spotify.com/track/6RUKPb4LETWmmr3iAEQktW?si=0a2c60c853a8472f",
    duration: "4:07",
    mood: "happy"
  },
  {
    id: 21,
    judul: "Without You",
    penyanyi: "Avicii, Sandro Cavazza",
    embed: "https://open.spotify.com/track/6Pgkp4qUoTmJIPn7ReaGxL?si=99825a9442fe4b9c",
    duration: "3:01",
    mood: "energetic"
  },
  {
    id: 22,
    judul: "It Ain't Me",
    penyanyi: "Kygo, Selena Gomez",
    embed: "https://open.spotify.com/track/3eR23VReFzcdmS7TYCrhCe?si=ee4f4284e5a745c5",
    duration: "3:40",
    mood: "chill"
  },
  {
    id: 23,
    judul: "I Wanna Be Yours",
    penyanyi: "Arctic Monkeys",
    embed: "https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n?si=bdacc097d90d4219",
    duration: "3:03",
    mood: "romantic"
  },
  {
    id: 24,
    judul: "Silence",
    penyanyi: "Marshmello, Khalid",
    embed: "https://open.spotify.com/track/7vGuf3Y35N4wmASOKLUVVU?si=59071944b2d44e49",
    duration: "3:00",
    mood: "sad"
  },
  {
    id: 25,
    judul: "Perfect",
    penyanyi: "Ed Sheeran",
    embed: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v?si=b87a56ed51744539",
    duration: "4:23",
    mood: "romantic"
  }
];

// ═══════════════════════════════════════════════════════════════
// DOM ELEMENTS
// ═══════════════════════════════════════════════════════════════
const DOM = {
  preloader: document.getElementById('preloader'),
  navbar: document.getElementById('navbar'),
  themeToggle: document.getElementById('themeToggle'),
  mobileMenuBtn: document.getElementById('mobileMenuBtn'),
  mobileMenu: document.getElementById('mobileMenu'),
  searchInput: document.getElementById('searchInput'),
  tracksGrid: document.getElementById('tracksGrid'),
  nowPlayingSection: document.getElementById('nowPlayingSection'),
  nowPlayingTitle: document.getElementById('nowPlayingTitle'),
  nowPlayingArtist: document.getElementById('nowPlayingArtist'),
  nowPlayingEmbed: document.getElementById('nowPlayingEmbed'),
  vinyl: document.querySelector('.vinyl'),
  moodCards: document.querySelectorAll('.mood-card'),
  statsNumbers: document.querySelectorAll('.stats-number'),
  revealElements: document.querySelectorAll('.reveal')
};

// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════
let state = {
  currentlyPlaying: null,
  lastScrollY: 0,
  isNavHidden: false,
  activeMood: null,
  statsAnimated: false
};

// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════
const utils = {
  getSpotifyEmbedUrl: (url) => {
    const match = url.match(/track\/([a-zA-Z0-9]+)/);
    return match ? `https://open.spotify.com/embed/track/${match[1]}?utm_source=generator&theme=0` : null;
  },

  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  throttle: (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  animateValue: (element, start, end, duration) => {
    const startTime = performance.now();
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);
      element.textContent = current.toLocaleString() + (element.dataset.suffix || '');
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  }
};

// ═══════════════════════════════════════════════════════════════
// PRELOADER
// ═══════════════════════════════════════════════════════════════
const preloader = {
  init: () => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        if (DOM.preloader) {
          DOM.preloader.classList.add('hidden');
          document.body.classList.remove('no-scroll');
        }
      }, 1500);
    });
  }
};

// ═══════════════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════════════
const navbar = {
  init: () => {
    window.addEventListener('scroll', utils.throttle(navbar.handleScroll, 100));
  },

  handleScroll: () => {
    const currentScrollY = window.scrollY;

    // Add/remove scrolled class
    if (currentScrollY > 50) {
      DOM.navbar?.classList.add('scrolled');
    } else {
      DOM.navbar?.classList.remove('scrolled');
    }

    // Hide/show on scroll direction
    if (currentScrollY > state.lastScrollY && currentScrollY > 200) {
      if (!state.isNavHidden) {
        DOM.navbar?.classList.add('hidden');
        state.isNavHidden = true;
      }
    } else {
      if (state.isNavHidden) {
        DOM.navbar?.classList.remove('hidden');
        state.isNavHidden = false;
      }
    }

    state.lastScrollY = currentScrollY;
  }
};

// ═══════════════════════════════════════════════════════════════
// THEME TOGGLE
// ═══════════════════════════════════════════════════════════════
const theme = {
  init: () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      theme.updateIcon(true);
    }

    DOM.themeToggle?.addEventListener('click', theme.toggle);
  },

  toggle: () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    theme.updateIcon(isLight);
  },

  updateIcon: (isLight) => {
    if (DOM.themeToggle) {
      DOM.themeToggle.innerHTML = isLight
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// MOBILE MENU
// ═══════════════════════════════════════════════════════════════
const mobileMenu = {
  init: () => {
    DOM.mobileMenuBtn?.addEventListener('click', mobileMenu.toggle);

    // Close menu when clicking links
    DOM.mobileMenu?.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', mobileMenu.close);
    });
  },

  toggle: () => {
    DOM.mobileMenuBtn?.classList.toggle('active');
    DOM.mobileMenu?.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  },

  close: () => {
    DOM.mobileMenuBtn?.classList.remove('active');
    DOM.mobileMenu?.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
};

// ═══════════════════════════════════════════════════════════════
// TRACKS RENDERING
// ═══════════════════════════════════════════════════════════════
const tracks = {
  init: () => {
    tracks.render(musicData);
    DOM.searchInput?.addEventListener('input', utils.debounce(tracks.search, 300));
  },

  render: (data) => {
    if (!DOM.tracksGrid) return;

    DOM.tracksGrid.innerHTML = data.map((track, index) => `
      <div class="track-card reveal reveal-delay-${(index % 5) + 1}" data-track-id="${track.id}">
        <div class="track-number">${index + 1}</div>
        <div class="track-icon">
          <i class="fa-solid fa-music"></i>
        </div>
        <h4 class="track-title">${track.judul}</h4>
        <p class="track-artist">${track.penyanyi}</p>
        <div class="track-progress">
          <div class="track-progress-bar" style="width: ${Math.random() * 60 + 30}%;"></div>
        </div>
        <div class="track-meta">
          <span class="track-duration">${track.duration}</span>
          <button class="track-play" onclick="tracks.play(${track.id})" aria-label="Play ${track.judul}">
            <i class="fa-solid fa-play"></i>
          </button>
        </div>
      </div>
    `).join('');

    // Re-init reveal for new elements
    scrollReveal.observe();
  },

  search: (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      tracks.render(musicData);
      return;
    }

    const filtered = musicData.filter(track =>
      track.judul.toLowerCase().includes(query) ||
      track.penyanyi.toLowerCase().includes(query)
    );

    tracks.render(filtered);
  },

  play: (id) => {
    const track = musicData.find(t => t.id === id);
    if (!track) return;

    const embedUrl = utils.getSpotifyEmbedUrl(track.embed);
    if (!embedUrl) return;

    // Update now playing section
    if (DOM.nowPlayingTitle) DOM.nowPlayingTitle.textContent = track.judul;
    if (DOM.nowPlayingArtist) DOM.nowPlayingArtist.textContent = track.penyanyi;
    if (DOM.nowPlayingEmbed) {
      DOM.nowPlayingEmbed.innerHTML = `
        <iframe src="${embedUrl}" width="100%" height="352" frameborder="0" 
                allow="encrypted-media" loading="lazy"></iframe>
      `;
    }

    // Show section
    if (DOM.nowPlayingSection) {
      DOM.nowPlayingSection.classList.remove('hidden');
      DOM.nowPlayingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Animate vinyl
    if (DOM.vinyl) {
      DOM.vinyl.classList.add('playing');
    }

    // Update button states
    document.querySelectorAll('.track-play').forEach(btn => {
      btn.innerHTML = '<i class="fa-solid fa-play"></i>';
      btn.classList.remove('playing');
    });

    const currentCard = document.querySelector(`[data-track-id="${id}"]`);
    if (currentCard) {
      const btn = currentCard.querySelector('.track-play');
      if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        btn.classList.add('playing');
      }
    }

    state.currentlyPlaying = id;
  }
};

// Make tracks.play accessible globally
window.tracks = tracks;

// ═══════════════════════════════════════════════════════════════
// MOOD SELECTOR
// ═══════════════════════════════════════════════════════════════
const moodSelector = {
  init: () => {
    DOM.moodCards.forEach(card => {
      card.addEventListener('click', () => moodSelector.select(card));
    });
  },

  select: (card) => {
    const mood = card.dataset.mood;

    // Toggle active state
    DOM.moodCards.forEach(c => c.classList.remove('active'));

    if (state.activeMood === mood) {
      state.activeMood = null;
      tracks.render(musicData);
    } else {
      card.classList.add('active');
      state.activeMood = mood;

      // Filter tracks by mood
      const filtered = musicData.filter(t => t.mood === mood);
      if (filtered.length > 0) {
        tracks.render(filtered);
      } else {
        tracks.render(musicData);
      }
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════════════════════════════
const scrollReveal = {
  observer: null,

  init: () => {
    scrollReveal.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    scrollReveal.observe();
  },

  observe: () => {
    document.querySelectorAll('.reveal').forEach(el => {
      scrollReveal.observer?.observe(el);
    });
  }
};

// ═══════════════════════════════════════════════════════════════
// STATS COUNTER
// ═══════════════════════════════════════════════════════════════
const statsCounter = {
  init: () => {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !state.statsAnimated) {
          statsCounter.animate();
          state.statsAnimated = true;
        }
      });
    }, { threshold: 0.3 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }
  },

  animate: () => {
    DOM.statsNumbers.forEach(stat => {
      const target = parseInt(stat.dataset.target || '0');
      utils.animateValue(stat, 0, target, 2000);
    });
  }
};

// ═══════════════════════════════════════════════════════════════
// PARALLAX EFFECT
// ═══════════════════════════════════════════════════════════════
const parallax = {
  init: () => {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;

    document.addEventListener('mousemove', utils.throttle((e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;

      heroContent.style.transform = `translate(${x}px, ${y}px)`;
    }, 50));
  }
};

// ═══════════════════════════════════════════════════════════════
// PARTICLES
// ═══════════════════════════════════════════════════════════════
const particles = {
  init: () => {
    const container = document.querySelector('.hero-particles');
    if (!container) return;

    const particleCount = window.innerWidth < 768 ? 15 : 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${10 + Math.random() * 10}s`;
      container.appendChild(particle);
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// FLOATING NOTES (Footer)
// ═══════════════════════════════════════════════════════════════
const floatingNotes = {
  init: () => {
    const container = document.querySelector('.floating-notes');
    if (!container) return;

    const notes = ['♪', '♫', '♬', '♩', '🎵', '🎶'];
    const noteCount = 8;

    for (let i = 0; i < noteCount; i++) {
      const note = document.createElement('div');
      note.className = 'floating-note';
      note.textContent = notes[Math.floor(Math.random() * notes.length)];
      note.style.left = `${Math.random() * 100}%`;
      note.style.animationDelay = `${Math.random() * 10}s`;
      note.style.animationDuration = `${8 + Math.random() * 7}s`;
      container.appendChild(note);
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// SMOOTH SCROLL
// ═══════════════════════════════════════════════════════════════
const smoothScroll = {
  init: () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
};

// ═══════════════════════════════════════════════════════════════
// VINYL INTERACTION
// ═══════════════════════════════════════════════════════════════
const vinylInteraction = {
  init: () => {
    if (!DOM.vinyl) return;

    DOM.vinyl.addEventListener('click', () => {
      DOM.vinyl.classList.toggle('playing');
    });
  }
};

// ═══════════════════════════════════════════════════════════════
// INITIALIZE ALL
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Add no-scroll for preloader
  document.body.classList.add('no-scroll');

  // Initialize all modules
  preloader.init();
  navbar.init();
  theme.init();
  mobileMenu.init();
  tracks.init();
  moodSelector.init();
  scrollReveal.init();
  statsCounter.init();
  parallax.init();
  particles.init();
  floatingNotes.init();
  smoothScroll.init();
  vinylInteraction.init();

  console.log('🎵 Riel Fav Music - Initialized Successfully!');
});

// ═══════════════════════════════════════════════════════════════
// CLEANUP ON PAGE UNLOAD
// ═══════════════════════════════════════════════════════════════
window.addEventListener('beforeunload', () => {
  scrollReveal.observer?.disconnect();
});
