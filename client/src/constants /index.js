import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];


export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];


export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping of your certficates",
        subtext: "Enjoy seamless lessons with our complimentary online service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];



export const footerLinks = [
    {
        title: "Courses",
        links: [
            { name: "Django", link: "/" },
            { name: "React", link: "/" },
            { name: "Next-Generation", link: "/" },
            { name: "Python", link: "/" },
            { name: "Codelovers", link: "/" },
            { name: "Chris", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "codelovers@exam.com", link: "codelovers" },
            { name: "+27548672354", link: "tel:+275548623546" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
