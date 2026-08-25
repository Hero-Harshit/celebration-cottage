export const celebrationConfig = {
  // Theme Settings
  theme: "chocolate", // Options: "midnight", "sunset", "rose", "ocean", "inferno", "forest", "olive", "lime", "pride", "cosmic", "desert", "chocolate"

  // Recipient Details
  recipient: {
    name: "Alex",
    nameColor: "",
    introduction: "To my amazing best friend,",
    introductionColor: "",
  },

  // Main Content
  content: {
    heading: "Happy Birthday!",
    headingColor: "",
    subheading: "Today is all about celebrating you.",
    subheadingColor: "",
    message: "Thank you for being such an incredible part of my life. I hope this year brings you as much joy, laughter, and success as you bring to everyone around you. Let's make today unforgettable!",
    messageColor: "",
    closing: "With all my love, Sam",
    closingColor: "",
    buttonText: "A Little Something For You",
    buttonTextColor: "",
    buttonLink: "https://example.com/gift",
  },

  // Gallery Photos
  photos: [
    {
      src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1000&auto=format&fit=crop",
      alt: "A joyful celebration moment",
      caption: "That time we celebrated all night long",
    },
    {
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop",
      alt: "Party decorations",
      caption: "Making memories together",
    },
    {
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1000&auto=format&fit=crop",
      alt: "A beautiful cake",
      caption: "The sweetest moments",
    }
  ],

  // Features & Toggles
  features: {
    // Options: "none", "hearts", "cakes", "stars", "balloons", "gifts", "music", "crowns", "grass", "moons", "fish", "fire", "rocket", "combined" or any other combination you like
    graffiti: ["rocket"],
    graffitiColor: "#ffffff", // Default graffiti color (hex code)
    enableScratchCard: true, // Wrap the final button in a scratch-off surprise
    scratchCardText: "Scratch to reveal your gift!", // Text shown on the scratch card
    enableCursorTrail: true, // Magical fairy dust that follows cursor/touch
    cursorTrailColor: "#ffffff",
    enableRippleEffect: true, // Glassy ripple effect on click
    rippleColor: "rgba(255, 255, 255, 0.4)",
    showPhotos: true,
    showButton: true,
  },
};
