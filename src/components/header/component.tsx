import Image from "next/image";
import Link from "next/link";

type Route = {
  path: string;
  label: string;
};

const routes: Array<Route> = [
  {
    path: '/',
    label: 'the camp.',
  },
  {
    path: '/experience',
    label: 'the experience.',
  },
  {
    path: '/blog',
    label: 'the blog.',
  },
];

export const Header = () => (
  <header className="header">
    <Image
      className="header__logo"
      src="/logo.svg"
      alt="Surf Camp logo"
      width={125}
      height={190}
      priority
    />
    <ul className="header__nav">
      {routes.map(({ path, label }) => (
        <li key={path}>
          <Link href={path}>
            <h5>{label}</h5>
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/events">
      <button className="btn btn--black btn--small">BOOK NOW</button>
    </Link>
  </header>
);
