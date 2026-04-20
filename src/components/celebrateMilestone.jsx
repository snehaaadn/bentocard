export default function CelebrateMilestones() {
    return (
        <div className="bg-purple-100 border border-gray-200 rounded-[2rem] p-8 lg:p-10 flex flex-col relative overflow-hidden ">
            
            {/* Header Text */}
            <div className="mb-10 w-full md:w-4/5">
                <h2 className="text-2xl font-bold tracking-tight text-purple-900 mb-3">
                    Celebrate milestones
                </h2>
                <p className="text-purple-700 text-sm leading-relaxed">
                    Instant alerts and weekly digests to keep your team aligned and celebrate wins
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-5 w-full max-w-[360px] mx-auto z-10">
                
                {/* Slack Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                        {/* Fake App Icon */}
                        <div className="w-5 h-5 bg-orange-500 text-white rounded-[4px] flex items-center justify-center text-[10px] font-bold">
                            J
                        </div>
                        <span className="font-bold text-sm text-gray-900 flex items-center gap-1.5">
                            June 
                            <span className="bg-gray-100 text-gray-500 text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider font-semibold">App</span>
                        </span>
                        <span className="text-gray-400 text-xs ml-1">10:36 AM</span>
                    </div>
                    {/* Fake Slack Hashtag Icon */}
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                    </svg>
                </div>

                {/* Slack Message Body */}
                <div className="mb-5 space-y-1.5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                        <span className="text-yellow-500">🎉</span> Qualified signup
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                        {/* Tiny avatar circle */}
                        <div className="w-4 h-4 bg-gray-800 rounded-full flex-shrink-0"></div>
                        <p className="truncate">
                            Eoghan McCabe <span className="text-orange-500 hover:underline cursor-pointer">eoghan@intercom.io</span>
                        </p>
                    </div>
                </div>

                {/* Data Grid inside the Slack Message */}
                {/* A simple 2-column grid lines everything up perfectly */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-4 border-l-2 border-gray-200 pl-3">
                    
                    <div className="space-y-0.5">
                        <p className="text-[11px] font-bold text-gray-900">Company name:</p>
                        <p className="text-[12px] text-gray-600">Intercom</p>
                    </div>
                    
                    <div className="space-y-0.5">
                        <p className="text-[11px] font-bold text-gray-900">Location:</p>
                        <p className="text-[12px] text-gray-600">Dublin, Ireland</p>
                    </div>
                    
                    <div className="space-y-0.5">
                        <p className="text-[11px] font-bold text-gray-900">Role:</p>
                        <p className="text-[12px] text-gray-600">CTO & Co-Founder</p>
                    </div>
                    
                    <div className="space-y-0.5">
                        <p className="text-[11px] font-bold text-gray-900">Company website:</p>
                        <p className="text-[12px] text-orange-500 hover:underline cursor-pointer">intercom.io</p>
                    </div>
                    
                    <div className="space-y-0.5">
                        <p className="text-[11px] font-bold text-gray-900">Company size:</p>
                        <p className="text-[12px] text-gray-600">800</p>
                    </div>
                    
                    <div className="space-y-0.5">
                        <p className="text-[11px] font-bold text-gray-900">LinkedIn:</p>
                        <p className="text-[12px] text-orange-500 hover:underline cursor-pointer">View profile</p>
                    </div>

                    <div className="space-y-0.5">
                        <p className="text-[11px] font-bold text-gray-900">Funding amount:</p>
                        <p className="text-[12px] text-gray-600">33M</p>
                    </div>

                    <div className="space-y-0.5">
                        <p className="text-[11px] font-bold text-gray-900">Crunchbase:</p>
                        <p className="text-[12px] text-orange-500 hover:underline cursor-pointer">View company</p>
                    </div>

                </div>
            </div>
        </div>
    );
}