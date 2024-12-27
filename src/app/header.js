
export default function Header() {
    const basePath = "/gh-pages";
    return (
        <header className="bg-cyan-600 text-white
        p-2 px-4 min-w-[100vw];
        flex flex-row items-center justify-between"
        >
            <h1 className="text-3xl font-bold">
                hiiii
            </h1>

            <nav >
                <a className="text-2xl m-2
                    hover:brightness-125 ease-in duration-100"
                    href="https://ttb3ar.github.io/website/">
                    🧸
                </a>
                <a className="text-2xl m-2
                    hover:brightness-125 ease-in duration-100"
                    href="https://sunnyyou3.github.io/Website">
                    🌞
                </a>
            </nav>
        </header>
    );
}