import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Sample data for the website
  const games = [
    {
      id: 1,
      title: "Battlefield V",
      image: "/img/games/bfv.jpg",
      description: "Join us at D-LAW and become part of our Battlefield V Platoon, where you can team up for epic battles, strategic gameplay, and uforgettable adventures in the battlfield!",
    },
    {
      id: 2,
      title: "GTA V CREW",
      image: "/img/games/gtav.jpg",
      description:
        "Join us at D-LAW and become part of our Rockstar Crew, where we team up fo thrilling heists, epic car meets, and uforgettable gaming adventures in GTA V!",
    },
  ];

  const events = [
    {
      id: 1,
      title: "D-LAW Valorant Invitational",
      location: "Online",
      image: "/placeholder-event1.jpg",
      date: { day: "15", month: "APR" },
      description:
        "Our biggest Valorant tournament of the year with a $5,000 prize pool and 16 teams competing.",
    },
    {
      id: 2,
      title: "Community Game Night",
      location: "Discord",
      image: "/placeholder-event2.jpg",
      date: { day: "22", month: "APR" },
      description:
        "Join us for a night of casual gaming, prizes, and a chance to play with our pro team members.",
    },
    {
      id: 3,
      title: "Apex Legends Bootcamp",
      location: "Online",
      image: "/placeholder-event3.jpg",
      date: { day: "05", month: "MAY" },
      description:
        "An intensive training session led by our Apex coaches to improve your gameplay and ranking.",
    },
  ];

  return (
    <>
      {/* Global Font Style */}
      <style jsx global>{`
        html,
        body {
          font-family: "Trebuchet MS", sans-serif;
        }
      `}</style>

      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/background.png")' }}
      ></div>

      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-neutral-950 bg-opacity-50 backdrop-blur-sm"
            : "bg-transparent"
        }`}
        style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="text-white text-2xl font-bold uppercase tracking-wider bg-gradient-to-r bg-clip-text"
            >
              <img
                src="/logo dlaw.png"
                alt="D-LAW"
                className="w-12 h-12 mr-6 inline-block"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
              D - LAW
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            {/* Desktop Menu */}
            <div
              className="hidden md:flex space-x-8"
              style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
            >
              <a
                href="#home"
                className="text-white hover:text-yellow-400 relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-yellow-300 after:to-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-yellow-400 relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-yellow-300 after:to-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </a>
              <a
                href="#events"
                className="text-white hover:text-yellow-400 relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-yellow-300 after:to-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Events
              </a>
              <a
                href="#contact"
                className="text-white hover:text-yellow-400 relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-yellow-300 after:to-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              className="md:hidden mt-4 space-y-4 bg-black bg-opacity-90 p-4 rounded-md"
              style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
            >
              <a
                href="#home"
                className="block text-white hover:text-yellow-400 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-white hover:text-yellow-400 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#events"
                className="block text-white hover:text-yellow-400 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="#contact"
                className="block text-white hover:text-yellow-400 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-4"
      >
        <div className="max-w-5xl">
          <h1
            className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-white mb-6 animate-[fadeIn_1s_ease_forwards]"
            style={{
              fontFamily: '"Trebuchet MS", sans-serif',
            }}
          >
            <div className="flex justify-center mb-4">
              <img
                src="/logo dlaw.png"
                alt="D-LAW"
                className="w-10 h-9"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            Gaming Hub for Events, Meets & Fun | Join Community & Stay
            Connected!
          </h1>
          <p
            className="text-xl md:text-2xl text-white opacity-80 mb-8 animate-[fadeIn_1s_ease_forwards_0.2s]"
            style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
          >
            Team Up & Dominate
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-[fadeIn_1s_ease_forwards_0.4s]">
            {/* <a
              href="#about"
              className="px-8 py-2 bg-gradient-to-r from-yellow-400 to-yellow-800 rounded-full font-bold uppercase tracking-wide text-white transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/50"
              style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
            >
              Learn More
            </a> */}
            <a
              href="#contact"
              className="px-8 py-2 bg-transparent border-3 border-yellow-400 font-bold uppercase tracking-wide text-yellow-600 transition-all duration-300 hover:bg-black hover:text-yellow-400"
              style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
            >
              Join Us
            </a>
          </div>
          <div className="mt-4 animate-[fadeIn_1s_ease_forwards_0.6s]">
            <img
              src="/D-LAW Websites.png"
              alt="Gaming event"
              className="mx-auto"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </section>

      <div className="w-120 h-1 bg-white opacity-80 mx-auto"></div>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12 mt-8 text-white uppercase tracking-wider"
            style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
          >
            About Us
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full">
              <p
                className="mb-6 text-white text-2xl"
                style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
              >
                Welcome to D-LAW, a Malaysia-based ultimate hub designed for
                gamers, community seekers, and anyone looking for a place to
                unwind after a long day. Here, we believe that life is more than
                just work; it's about finding balance, building connections, and
                enjoying moments of pure, unfiltered fun. With D-LAW, you're not
                just joining a gaming platform- you're becoming part of a
                vibrant community that prioritizes mental wellness and supports
                one another.
              </p>
              <p
                className="mb-6 text-white text-2xl"
                style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
              >
                Our hub is crafted to bring people together through exciting
                events, casual meet-ups, and immersive game sessions, whether
                you're casual gamer or a seasoned pro. At D-LAW, there's always
                something new to explore, from the latest trending games to
                unique challenges and tournaments. It's a place where you can
                kick back, relax, and bond with others who share your love for
                gaming and a balanced life.
              </p>
              <p
                className="mb-6 text-white text-2xl"
                style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
              >
                So, come join us! Connect with like-minded individuals,
                participate in our events, and find your escapre from the daily
                grind in a community that values the important of recharging,
                having fun, and staying connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-120 h-1 bg-white opacity-80 mx-auto"></div>

      {/* Games Section - NEW SECTION */}
      <section id="games" className="py-20">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12 text-white uppercase tracking-wider"
            style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
          >
            Our Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-neutral-900 bg-opacity-70 rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-yellow-500/20"
              >
                <div className="h-95 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2 text-yellow-400"
                    style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
                  >
                    {game.title}
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
                  >
                    {game.description}
                  </p>
                  <div className="mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 text-center">
        <div className="container mx-auto">
          <a
            href="#home"
            className="text-3xl font-bold uppercase tracking-wider bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
            style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
          >
            D - LAW
          </a>
          <div
            className="flex justify-center gap-5 mt-6 text-gray-400"
            style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
          >
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              {" "}
              Events
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              {" "}
              Contact
            </a>
          </div>
          <p
            className="mt-6 text-gray-500 text-sm"
            style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
          >
            &copy; {new Date().getFullYear()} D-LAW Gaming. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
