import NavBar from "./NavBar";

export default function NavLayout({ children }: any) {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
} 