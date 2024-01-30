import Image from "next/image";
import Link from "next/link";
import { routes } from "@/routes/constants";

export const Header = () => (
  <header className="header">
    <Image
      src="/logo.svg"
      alt="Surf Camp logo"
      width={50}
      height={80}
      priority
    />
    <nav>
      <ul className="header__nav">
        {routes.map(({ path, label }) => (
          <li key={path}>
            <Link href={path}>
              <h5>{label}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <Link href="/events">
      <button className="btn btn--black btn--small">BOOK NOW</button>
    </Link>
  </header>
);
