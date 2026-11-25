
import Link from "next/link";

const categories = [
  "All Books",
  "Romance",
  "Drama",
  "Adventure",
  "Mystery",
  "Fantasy",
  "Education",
  "Short Stories"
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <Link href="/" className="brand">
          <span className="brand-icon">P</span>
          PULSE
        </Link>

        <nav className="nav-links">
          <Link href="/">Explore</Link>
          <Link href="/login">Sign in</Link>
          <Link href="/signup" className="button">
            Join PULSE
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            YOUR NEXT STORY STARTS HERE
          </span>

          <h1>
            Stories worth
            <br />
            <span>getting lost in.</span>
          </h1>

          <p>
            Discover incredible digital novels, support
            independent writers and share your own stories
            with the world.
          </p>

          <div className="hero-actions">
            <a href="#discover" className="button">
              Explore books
            </a>

            <Link href="/signup" className="secondary-button">
              Become a seller
            </Link>
          </div>
        </div>

        <div className="book-art">
          <strong>P.</strong>
          <h3>A WORLD OF STORIES</h3>
          <span>PULSE ORIGINAL</span>
        </div>
      </section>

      <section className="section" id="discover">
        <span className="eyebrow">THE PULSE LIBRARY</span>
        <h2>Discover your next read.</h2>

        <div className="categories">
          {categories.map((category, index) => (
            <button
              key={category}
              className={
                index === 0
                  ? "category active"
                  : "category"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="empty-library">
          <h3>Your next favourite book awaits.</h3>
          <p>
            Approved books from independent writers
            will appear here.
          </p>
        </div>
      </section>

      <section className="seller-banner">
        <div>
          <span className="eyebrow">
            HAVE A STORY TO TELL?
          </span>

          <h2>Turn your words into something valuable.</h2>

          <p>
            Apply to become a PULSE seller and share
            your work with readers.
          </p>
        </div>

        <Link href="/signup" className="button">
          Start selling
        </Link>
      </section>

      <footer>
        <strong>PULSE</strong>
        <span>Enjoy The Script.</span>
        <span>© 2026 PULSE</span>
      </footer>
    </main>
  );
}
