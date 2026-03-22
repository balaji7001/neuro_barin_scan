import Link from "next/link";

export default function Navbar() {
    return (
        <div className="topbar">
        
        {/* Left */}
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#3B6F8E] rounded-xl flex items-center justify-center text-white">
            🧠
            </div>
            <h1 className="text-xl font-bold text-[#3B6F8E]">
            EmotiWave <span className="text-[#56B79A]">Insight</span>
            </h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-8">
            <Link href="/" className="nav-link">MONITOR</Link>
            <Link href="/methodology" className="nav-link">METHODOLOGY</Link>
            <Link href="/access" className="nav-link">ACCESS PORTAL</Link>

            <div className="badge">Live Neural Feed</div>
        </div>

        </div>
    );
}