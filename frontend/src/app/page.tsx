import EEGGraph from "../components/EEGGraph";

/* ===== TEMP LOADER TEST (REMOVE LATER) ===== */
async function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

    export default async function Home() {
    // 👇 REMOVE THIS AFTER TESTING LOADER
    await wait(1500);

    return (
        <div className="p-6 space-y-6">

        {/* ===== SYSTEM PROGRESS ===== */}
        <div>
            <div className="flex justify-between mb-2">
            <h2 className="text-sm font-semibold text-[#3B6F8E]">
                SYSTEM PROGRESS
            </h2>
            <span className="text-sm">70%</span>
            </div>

            <div className="h-2 bg-[#E6EDF2] rounded-full overflow-hidden">
            <div
                className="h-2 bg-[#56B79A]"
                style={{ width: "70%" }}
            />
            </div>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* ===== LEFT PANEL ===== */}
            <div className="card col-span-1">
            <h2 className="text-lg font-semibold mb-4 text-[#3B6F8E]">
                Signal Config
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <input className="input" placeholder="CH1" />
                <input className="input" placeholder="CH2" />
                <input className="input" placeholder="CH3" />
                <input className="input" placeholder="CH4" />
            </div>

            <button className="btn-secondary w-full mb-3">
                ▶ Start Feed
            </button>

            <button className="btn-secondary w-full">
                ⚡ Initiate Inference
            </button>
            </div>

            {/* ===== RIGHT PANEL ===== */}
            <div className="col-span-2 space-y-6">

            {/* PROCESS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="card hover:scale-105 transition">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-[#3B6F8E]">
                    Signal Preprocessing
                </h3>
                <p className="text-sm text-gray-500">
                    Noise reduction & filtering
                </p>
                </div>

                <div className="card hover:scale-105 transition">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-semibold text-[#3B6F8E]">
                    Feature Extraction
                </h3>
                <p className="text-sm text-gray-500">
                    Wavelet transform analysis
                </p>
                </div>

                <div className="card hover:scale-105 transition">
                <div className="text-2xl mb-2">🧠</div>
                <h3 className="font-semibold text-[#3B6F8E]">
                    Hybrid Model Inference
                </h3>
                <p className="text-sm text-gray-500">
                    BiLSTM & BiGRU integration
                </p>
                </div>

            </div>

            {/* EEG GRAPH */}
            <div className="card">
                <h2 className="text-lg mb-4 text-[#3B6F8E] font-semibold">
                Dynamic Streams
                </h2>

                <EEGGraph />
            </div>

            </div>
        </div>

        </div>
    );
}