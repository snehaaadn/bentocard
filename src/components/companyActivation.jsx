export default function CompanyActivation() {
    return (
        <div className="relative bg-cyan-50 border border-cyan-100 rounded-[2rem] p-10 min-h-[400px] overflow-hidden md:overflow-visible">
            
            <div className="w-full md:w-5/12">
                <h2 className="text-3xl font-bold tracking-tight text-cyan-800 leading-snug">
                    We automatically generate reports for each of your customers
                </h2>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-20 lg:right-50 w-150 max-h-[400px] z-10 hidden md:block">
                
                <div className="bg-gray-100/50 rounded-3xl p-4 border border-gray-100 shadow-sm w-100 h-full">
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-50">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-12 h-12 bg-[#0B1A28] rounded-xl flex items-center justify-center shadow-inner">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="6" width="3" height="12" rx="1.5" fill="white" />
                                    <rect x="10.5" y="4" width="3" height="16" rx="1.5" fill="white" />
                                    <rect x="17" y="6" width="3" height="12" rx="1.5" fill="white" />
                                    <path d="M6 20C9.5 21.5 14.5 21.5 18 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-orange-500 border-2 border-white rounded-full"></div>
                            </div>
                            <div>
                                <h3 className="text-gray-900 font-bold text-[17px] leading-tight">Intercom</h3>
                                <p className="text-gray-400 text-xs mt-0.5">Joined 9 Feb 2023</p>
                            </div>
                        </div>

                        <div className="space-y-3.5">
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2.5 text-gray-500">
                                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                    Total seats
                                </div>
                                <span className="font-semibold text-gray-800">50</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2.5 text-gray-500">
                                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                    Active seats
                                </div>
                                <span className="font-semibold text-gray-800">22</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2.5 text-gray-500">
                                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                    Active last 7 days
                                </div>
                                <span className="font-semibold text-gray-800">True</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-10 -right-40 -rotate-5 bg-white rounded-2xl p-7 w-[280px] shadow-2xl border border-gray-50 z-20">
                    <h3 className="text-gray-600 text-sm font-medium mb-1">Company activation</h3>
                    <div className="text-[40px] font-bold text-gray-900 leading-none mb-6">40%</div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 w-24">
                                <span className="text-yellow-500 text-sm">👋</span>
                                <span className="text-gray-600 font-medium">Signed up</span>
                            </div>
                            <div className="flex-1 mx-3 h-1.5 bg-orange-50 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-full rounded-full"></div>
                            </div>
                            <span className="text-orange-500 font-medium w-8 text-right">100%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 w-24">
                                <span className="text-gray-400 text-[10px]">⚙️</span>
                                <span className="text-gray-600 font-medium">Setup</span>
                            </div>
                            <div className="flex-1 mx-3 h-1.5 bg-orange-50 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[80%] rounded-full"></div>
                            </div>
                            <span className="text-orange-500 font-medium w-8 text-right">80%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 w-24">
                                <span className="text-orange-400 text-sm">💡</span>
                                <span className="text-gray-600 font-medium">Aha moment</span>
                            </div>
                            <div className="flex-1 mx-3 h-1.5 bg-orange-50 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[60%] rounded-full"></div>
                            </div>
                            <span className="text-orange-500 font-medium w-8 text-right">60%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 w-24">
                                <span className="text-gray-400 text-sm">🌓</span>
                                <span className="text-gray-600 font-medium">Activated</span>
                            </div>
                            <div className="flex-1 mx-3 h-1.5 bg-orange-50 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[40%] rounded-full"></div>
                            </div>
                            <span className="text-orange-500 font-medium w-8 text-right">40%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 w-24">
                                <span className="text-gray-400 text-sm">🏃</span>
                                <span className="text-gray-600 font-medium">Active</span>
                            </div>
                            <div className="flex-1 mx-3 h-1.5 bg-orange-50 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[80%] rounded-full"></div>
                            </div>
                            <span className="text-orange-500 font-medium w-8 text-right">80%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}