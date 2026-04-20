export default function AutomaticEnrichment() {
    return (
        <div className="bg-amber-300/20 border border-amber-300 rounded-[2rem] p-8 lg:p-10 flex flex-col relative ">
            
            <div className="mb-8 w-full md:w-5/6">
                <h2 className="text-xl font-bold tracking-tight text-amber-900 mb-2">
                    Automatic enrichment
                </h2>
                <p className="text-amber-700 text-sm leading-relaxed">
                    Automatically enrich your customers profiles and their users powered by GPT
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 relative">
                
                {/* AI Header */}
                <div className="flex items-center gap-2 mb-5">
                    <span className="text-amber-500 text-lg">✨</span>
                    <span className="font-semibold text-gray-800 text-sm">Enriched with AI</span>
                </div>

                {/* The 2-Column Data Grid */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs">
                    
                    {/* Data Rows */}
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-1.5"><span className="text-[10px]">🌐</span> Website</span>
                        <span className="text-gray-800 font-medium">intercom.io</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-1.5"><span className="text-[10px]">📍</span> Location</span>
                        <span className="text-gray-800 font-medium">Dublin, Ireland</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-1.5"><span className="text-[10px]">👥</span> Employees</span>
                        <span className="text-gray-800 font-medium">800</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-1.5"><span className="text-[10px]">🐦</span> Twitter</span>
                        <span className="text-gray-800 font-medium">@intercom</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-1.5"><span className="text-[10px]">💰</span> Funding</span>
                        <span className="text-gray-800 font-medium">$241M</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-1.5"><span className="text-[10px]">✅</span> Qualified</span>
                        <span className="text-orange-500 font-semibold">true</span>
                    </div>
                </div>

                {/* Floating Map/Logo Badge on the right edge */}
                <div className="absolute -right-4 top-0 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center z-10 overflow-hidden">
                    {/* Using a subtle pattern to fake the map, and an icon on top */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-white"></div>
                    <div className="w-8 h-8 bg-[#0B1A28] rounded-md flex items-center justify-center relative z-10">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="6" width="3" height="12" rx="1" fill="white"/>
                            <rect x="10.5" y="4" width="3" height="16" rx="1" fill="white"/>
                            <rect x="17" y="6" width="3" height="12" rx="1" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}