import { Section } from "../types";
import Image from "next/image";

// fetch these from the backend
export const travelInfoDropdownSections: Section[] = [
    {
        header: {label:"baggage", link:"/"},
        links: [
            {label: "baggage allowance", link: "/"},
            {label: "baggage services", link: "/"},
            {label: "restricted items", link: "/"},
            {label: "special items", link: "/"},
            {label: "sports equipment", link: "/"},
            {label: "pet in cabin", link: "/"},
        ],
        icon: (<Image
            src='travel_info/baggage.svg'
            alt="baggage"
            sizes="100vw"
            width={30}
            height={27}
            priority={false}
            />)
    },
    {
        header: {label:"optional fees and charges", link:"/"},
        links: [
            {label: "booking", link: "/"},
            {label: "baggage", link: "/"},
            {label: "bundles", link: "/"},
            {label: "cancellation and changes", link: "/"},
            {label: "travelflex", link: "/"},
            {label: "seating & boarding", link: "/"},
            {label: "on board", link: "/"}
        ],
        icon: (<Image
            src='travel_info/optional_fees.svg'
            alt="optionsl fees and charges"
            sizes="100vw"
            width={30}
            height={27}
            priority={false}
            />)
    },
    {
        header: {label:"accessible travel", link:"/"},
        links: [
            {label: "accessible services", link: "/"}
        ],
        icon: (<Image
            src='travel_info/accessible_travel.svg'
            alt="accessible services"
            sizes="100vw"
            width={30}
            height={27}
            priority={false}
            />)
    },
    {
        header: {label:"travel documents", link:"/"},
        links: [
            {label: "id domestic", link: "/"},
            {label: "id international", link: "/"}
        ],
        icon: (<Image
            src='travel_info/travel_documents.svg'
            alt="travel documents"
            sizes="100vw"
            width={30}
            height={27}
            priority={false}
            />)
    },
    {
        header: {label:"airport information", link:"/"},
        links: [
            {label: "check in", link: "/"},
            {label: "before you fly", link: "/"},
            {label: "security and safety", link: "/"},
            {label: "operational metrics", link: "/"}
        ],
        icon: (<Image
            src='travel_info/airport_information.svg'
            alt="airport information"
            sizes="100vw"
            width={30}
            height={27}
            priority={false}
            />)
    },
    {
        header: {label:"inflight services", link:"/"},
        links: [
            {label: "entertainment", link: "/"},
            {label: "menu", link: "/"},
            {label: "partnership", link: "/"},
        ],
        icon: (<Image
            src='travel_info/inflight_services.svg'
            alt="inflight services"
            sizes="100vw"
            width={30}
            height={27}
            priority={false}
            />)
    },
    {
        header: {label:"families & children", link:"/"},
        links: [
            {label: "travelling with kids", link: "/"}
        ],
        icon: (<Image
            src='travel_info/families_children.svg'
            alt="families & children"
            sizes="100vw"
            width={30}
            height={27}
            priority={false}
            />)
    },
    {
        header: {label:"customer service", link:"/"},
        links: [
            {label: "reservation changes", link: "/"},
            {label: "flexibility policies", link: "/"},
            {label: "disruptions & recourses", link: "/"},
            {label: "flight disruption claims", link: "/"},
            {label: "forms", link: "/"},
            {label: "buy now pay later", link: "/"}
        ],
        icon: (<Image
            src='travel_info/customer_service.svg'
            alt="customer service"
            sizes="100vw"
            width={30}
            height={27}
            priority={false}
            />)
    },
    {
        header: {label:"sustainability", link:"/"},
        links: [
            {label: "climate action", link: "/"}
        ],
        icon: (<Image
            src='/travel_info/sustainability.png'
            alt="sustainability"
            sizes="100vw"
            width={30}
            height={27}
            priority={false}
            />)
    },
    {
        header: {label:"careers", link:"/"},
        links: [
            {label: "flair cadet program", link: "/"}
        ],
        icon: (<Image
            src='/travel_info/careers.png'
            alt="careers"
            sizes="100vw"
            width={30}
            height={27}
            priority={false}
            />)
    },
    {
        header: {label:"special services", link:"/"},
        links: [
            {label: "group travel", link: "/"},
            {label: "safe passage", link: "/"}
        ],
        icon: (<Image
            src='travel_info/special_services.svg'
            alt="special services"
            sizes="100vw"
            width={30}
            height={27}
            priority={false}
            />)
    }


]