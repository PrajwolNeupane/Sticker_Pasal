import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar px-5 py-3 bg-body-tertiary">
      <h1 className="fs-3 fw-bolder">Sticker Nepal</h1>
      <div className="d-flex gap-5">
        <Link href={"/"} className="fs-5 fw-normal navbar-brand">
          Home
        </Link>
        <Link href={"/profile"} className="fs-5 fw-normal navbar-brand">
          Profile
        </Link>
        <Link href={"/cart"} className="fs-5 fw-normal navbar-brand">
          Cart <span className="badge bg-danger">0</span>
        </Link>
      </div>
    </nav>
  );
}
