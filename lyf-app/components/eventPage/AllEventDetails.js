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

export function AllEventDetails(category) {
    const [activeTab, setActiveTab] = React.useState("Today");

    function getTab(tab) {
        let displayTab = "";

        switch(tab) {
            case "Today":
                displayTab = "Today"
                break;
            case "Tomorrow":
                displayTab = "Tomorrow"
                break;
            case "ThisWeek":
                displayTab = "This Week"
                break
            case "ThisMonth":
                displayTab = "This Month"
                break;
        }

        return displayTab;
    }

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
                        {getTab(tab)}
                    </Tab>
                ))}
            </TabsHeader>

            <div className="mt-6 rounded-t-[35px] bg-black text-white flex items-center justify-between pt-4 px-4">
                <h2 className="text-[20px] font-semibold text-center flex-1">Event Details</h2>
                <button className="text-white hover:text-gray-300 mr-2">
                    <SlidersHorizontal size={30}/>
                </button>
            </div>

            <TabsBody>
                <div className="bg-black min-h-screen p-4">
                    {EventDetails.some((item) => item.tab === activeTab && item.events.some((event) => event.category === category.category))
                        ? EventDetails.filter((item) => item.tab === activeTab)
                            .map((item) => (
                                <div key={item.tab}>
                                    {item.events.filter((event) => event.category === category.category)
                                        .map((subEvent, eventIndex) => (
                                            <EventDetailCard selectedTab={activeTab} key={eventIndex} event={subEvent} />
                                        ))}
                                </div>
                            ))
                        : <p className="text-white text-center">----- No events -----</p>
                    }
                </div>
            </TabsBody>

        </Tabs>
);

}