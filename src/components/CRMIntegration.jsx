export default function CrmIntegration() {
    return (
        <div className="bg-green-100 border border-green-200 rounded-[2rem] p-8 lg:p-10 flex flex-col relative h-full overflow-hidden md:overflow-visible">
            
            <div className="mb-8 w-full md:w-5/6">
                <h2 className="text-xl font-bold tracking-tight text-green-900 mb-2">
                    Integrated with your CRM
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Connect to your CRM and sync product usage data with your CS and sales teams
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-5 w-full md:w-[280px] ml-auto mt-auto relative z-10">
                
                <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-gray-900 text-sm">CRM</span>
                    <div className="flex gap-2">
                        <div className="w-4 h-4 bg-gray-800 rounded-sm rotate-45"></div>
                        <div className="w-4 h-4 border-2 border-orange-500 rounded-full"></div>
                    </div>
                </div>

                {/* List Header */}
                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">
                    <span>Company</span>
                    <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        Active seats
                    </span>
                </div>

                {/* List Items */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs bg-gray-50 p-2 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="w-3.5 h-3.5 bg-gray-800 rounded-[3px]"></div>
                            <span className="font-semibold text-gray-800">Intercom</span>
                        </div>
                        <span className="text-gray-600 font-medium">22 <span className="text-orange-500">(+3)</span></span>
                    </div>

                    <div className="flex justify-between items-center text-xs p-2">
                        <div className="flex items-center gap-2">
                            <div className="w-3.5 h-3.5 bg-pink-200 rounded-[3px]"></div>
                            <span className="font-semibold text-gray-800">Amie</span>
                        </div>
                        <span className="text-gray-600 font-medium">20 <span className="text-gray-400">(-2)</span></span>
                    </div>
                </div>
               
            </div>
        </div>
    );
}