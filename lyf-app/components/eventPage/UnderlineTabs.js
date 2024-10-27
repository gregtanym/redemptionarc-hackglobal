import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
} from "@material-tailwind/react";
import EventDetails from "../../data/SampleEventDetails.json";
import {SlidersHorizontal} from "@phosphor-icons/react";
import EventDetailCard from "@/components/eventPage/EventDetailCard";

export function UnderlineTabs() {
    const [activeTab, setActiveTab] = React.useState("Today");
    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none bg-transparent p-0 mt-2"
                indicatorProps={{
                    className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    style: {marginTop: '8px'}
                }}
            >
                {EventDetails.map(({tab}) => (
                    <Tab
                        key={tab}
                        value={tab}
                        onClick={() => setActiveTab(tab)}
                        className={activeTab === tab ? "text-gray-900" : "text-gray-500"}
                    >
                        {tab}
                    </Tab>
                ))}
            </TabsHeader>

            <div className="mt-6 rounded-t-[30px] bg-black text-white flex items-center justify-between pt-4 px-4">
                <h2 className="text-[20px] font-semibold text-center flex-1">Event Details</h2>
                <button className="text-white hover:text-gray-300 mr-2">
                    <SlidersHorizontal size={30}/>
                </button>
            </div>

            <TabsBody>
                <div className="bg-black p-4 min-h-screen pb-52">
                    {EventDetails.filter((item) => item.tab === activeTab)
                        .map((item) => (
                            <div key={item.tab}>
                                {item.events.map((event, eventIndex) => (
                                    <EventDetailCard key={eventIndex} event={event}/>
                                ))}
                            </div>
                        ))}
                </div>
            </TabsBody>
        </Tabs>
    );

}