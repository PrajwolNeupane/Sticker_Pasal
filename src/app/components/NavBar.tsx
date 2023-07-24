import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar sticky-top px-5 py-3 bg-body-secondary">
      <h1 className="fs-3 text-dark" style={{fontWeight:700}}>Sticker Nepal</h1>
      <div className="d-flex gap-5">
        <Link href={"/"} className="fs-5 fw-normal navbar-brand text-dark">
          Home
        </Link>
        <Link href={"/profile"} className="fs-5 fw-normal navbar-brand text-dark">
          Profile
        </Link>
        <Link href={"/cart"} className="fs-5 fw-normal navbar-brand text-dark">
          Cart <span className="badge bg-success">0</span>
        </Link>
      </div>
    </nav>
  );
}
