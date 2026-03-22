export default function Loading() {
    return (
        <div className="p-6 space-y-6">

        {/* Top */}
        <div className="space-y-2">
            <div className="h-4 w-40 skeleton rounded"></div>
            <div className="h-2 w-full skeleton rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left */}
            <div className="card space-y-5">
            <div className="h-6 w-32 skeleton rounded"></div>

            <div className="grid grid-cols-2 gap-4">
                <div className="h-10 skeleton rounded-xl"></div>
                <div className="h-10 skeleton rounded-xl"></div>
                <div className="h-10 skeleton rounded-xl"></div>
                <div className="h-10 skeleton rounded-xl"></div>
            </div>

            <div className="h-10 skeleton rounded-xl"></div>
            <div className="h-10 skeleton rounded-xl"></div>
            </div>

            {/* Right */}
            <div className="col-span-2 space-y-6">
            <div className="grid grid-cols-3 gap-4">
                <div className="card h-24 skeleton"></div>
                <div className="card h-24 skeleton"></div>
                <div className="card h-24 skeleton"></div>
            </div>

            <div className="card h-64 skeleton"></div>
            </div>

        </div>
        </div>
    );
}