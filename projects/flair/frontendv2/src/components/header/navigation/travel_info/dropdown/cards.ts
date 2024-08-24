
import { MenuLink } from "../../types"
export type TravelInfoCard = {
    header: MenuLink,
    icon: string,
    links: MenuLink[]
}

// fetch these from the backend
export const Cards:TravelInfoCard[] = [
    {
        header: {label:"baggage", link:"/"},
        icon: 'travel_info/baggage.svg',
        links: [
            {label: "baggage allowance", link: "/"},
            {label: "baggage services", link: "/"},
            {label: "restricted items", link: "/"},
            {label: "special items", link: "/"},
            {label: "sports equipment", link: "/"},
            {label: "pet in cabin", link: "/"},
        ]
    },
    {
        header: {label:"optional fees and charges", link:"/"},
        icon: 'travel_info/optional_fees.svg',
        links: [
            {label: "booking", link: "/"},
            {label: "baggage", link: "/"},
            {label: "bundles", link: "/"},
            {label: "cancellation and changes", link: "/"},
            {label: "travelflex", link: "/"},
            {label: "seating & boarding", link: "/"},
            {label: "on board", link: "/"}
        ]
    },
    {
        header: {label:"accessible travel", link:"/"},
        icon: 'travel_info/accessible_travel.svg',
        links: [
            {label: "accessible services", link: "/"}
        ]
    },
    {
        header: {label:"travel documents", link:"/"},
        icon: 'travel_info/travel_documents.svg',
        links: [
            {label: "id domestic", link: "/"},
            {label: "id international", link: "/"}
        ] 
    },
    {
        header: {label:"airport information", link:"/"},
        icon: 'travel_info/airport_information.svg',
        links: [
            {label: "check in", link: "/"},
            {label: "before you fly", link: "/"},
            {label: "security and safety", link: "/"},
            {label: "operational metrics", link: "/"}
        ]
    },
    {
        header: {label:"inflight services", link:"/"},
        icon: 'travel_info/inflight_services.svg',
        links: [
            {label: "entertainment", link: "/"},
            {label: "menu", link: "/"},
            {label: "partnership", link: "/"},
        ]
    },
    {
        header: {label:"families & children", link:"/"},
        icon: 'travel_info/families_children.svg',
        links: [
            {label: "travelling with kids", link: "/"}
        ]
    },
    {
        header: {label:"customer service", link:"/"},
        icon: 'travel_info/customer_service.svg',
        links: [
            {label: "reservation changes", link: "/"},
            {label: "flexibility policies", link: "/"},
            {label: "disruptions & recourses", link: "/"},
            {label: "flight disruption claims", link: "/"},
            {label: "forms", link: "/"},
            {label: "buy now pay later", link: "/"}
        ]
    },
    {
        header: {label:"sustainability", link:"/"},
        icon: '/travel_info/sustainability.png',
        links: [
            {label: "climate action", link: "/"}
        ]
    },
    {
        header: {label:"careers", link:"/"},
        icon: '/travel_info/careers.png',
        links: [
            {label: "flair cadet program", link: "/"}
        ]
    },
    {
        header: {label:"special services", link:"/"},
        icon: 'travel_info/special_services.svg',
        links: [
            {label: "group travel", link: "/"},
            {label: "safe passage", link: "/"}
        ]
    }
]