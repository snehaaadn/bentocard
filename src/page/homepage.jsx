import CompanyActivation from '../components/companyActivation.jsx';
import CelebrateMilestones from '../components/celebrateMilestone.jsx';
import AutomaticEnrichment from '../components/automaticEnrichment.jsx';
import CrmIntegration from '../components/CRMIntegration.jsx';

export default function homepage() {
    return (
        <div className=" bg-white px-4 sm:px-6 lg:px-8 flex items-center justify-center">

            <div className="max-w-7xl w-full mx-auto">
                <div className="lg:col-span-2">
                    <CompanyActivation />
                </div>
                <div className="absolute grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
                    <div className="lg:col-span-1 mt-5">
                        <CelebrateMilestones />
                    </div>

                    <div className='flex sm:flex-col flex-row gap-6 lg:gap-8'>

                        <div className="lg:col-span-1 mt-15">
                            <AutomaticEnrichment />
                        </div>

                        <div className="lg:col-span-2">
                            <CrmIntegration />
                        </div>
                    </div>

                    {/* Floating Pill 1: Last Seen */}
                <div className="absolute bottom-40 right-130 bg-white rounded-full shadow-md border border-gray-100 py-1.5 px-3 flex items-center gap-2 z-20">
                    <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                    <span className="text-xs font-semibold text-gray-700">Last seen</span>
                    <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-1.5 py-0.5 rounded-md">today</span>
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 right-full w-4 md:w-12 h-[1px] bg-gray-200"></div>
                </div>

                {/* Floating Pill 2: Activated */}
                <div className="absolute bottom-15  right-120 bg-white rounded-full shadow-md border border-gray-100 py-1.5 px-3 flex items-center gap-2 z-20">
                    <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                    <span className="text-xs font-semibold text-gray-700">Activated</span>
                    <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-1.5 py-0.5 rounded-md">true</span>
                     {/* Connecting Line */}
                     <div className="absolute top-1/2 right-full w-4 md:w-8 h-[1px] bg-gray-200"></div>
                </div>
                </div>
            </div>
        </div>
    )
}