
export type MenuLink = {
    label: string,
    link: string
}

export type Section = {
    header: MenuLink,
    links: MenuLink[],
    icon: JSX.Element
}