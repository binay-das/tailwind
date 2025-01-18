const NoMatch = () => {
    return <div className="bg-mainbg h-screen text-maintext flex flex-col items-center text-center">
        <h1 className="text-4xl mt-[20%] mb-10">404: Page Not Found</h1>
        <p className="opacity-90 mb-20">The page you're looking for may have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/" className="border px-4 py-3 rounded-xl hover:bg-neutral-950 transition-all ">Go back to Home</a>
        <p className="absolute bottom-10 opacity-70">If you believe this to be an error, please contact support.</p>
    </div>
}

export default NoMatch;