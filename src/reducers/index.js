import Service1 from '../images/services1.svg';
import Service2 from '../images/services2.svg';
import Service3 from '../images/services3.svg';
import Service4 from '../images/services4.svg';
import Service5 from '../images/services5.svg';
import Service6 from '../images/services6.svg';
// ---
import Price1 from '../images/price1.svg';
import Price2 from '../images/price2.svg';
import Price3 from '../images/price3.svg';
// ---
import About1 from '../images/about1.png';
import About2 from '../images/about2.png';


export const INITIAL_STATE = {
    myFeatures: [
        {
            id: 1,
            title : "Employee Owned",
            img : Service1,
            content: "Supercharge your WordPress hosting with detailed website analytics, marketing tools. "
        },
        {
            id: 2,
            title : "Commitment To Security",
            img : Service2,
            content: "Supercharge your WordPress hosting with detailed website analytics, marketing tools. "
        },
        {
            id: 3,
            title : "Passion For Privacy",
            img : Service3,
            content: "Supercharge your WordPress hosting with detailed website analytics, marketing tools. "
        },
        {
            id: 4,
            title : "Employee Owned",
            img : Service4,
            content: "Supercharge your WordPress hosting with detailed website analytics, marketing tools. "
        },
        {
            id: 5,
            title : "24/7 Support",
            img : Service5,
            content: "Supercharge your WordPress hosting with detailed website analytics, marketing tools. "
        },
        {
            id: 6,
            title : "100% Uptime Guaranteed",
            img : Service6,
            content: "Supercharge your WordPress hosting with detailed website analytics, marketing tools. "
        },
    ],
    faq: [
        {
            id: 1,
            title: "Why can't people connect to the web server on my PC?",
            content: "We operate one of the most advanced 100 Gbit networks in the world, complete with Anycast support and extensive DDoS protection."
        },
        {
            id: 2,
            title: "What domain name should I choose for my site?",
            content: "We operate one of the most advanced 100 Gbit networks in the world, complete with Anycast support and extensive DDoS protection." 
        },
        {
            id: 3,
            title: "How can I make my website work without www. in front?",
            content: "We operate one of the most advanced 100 Gbit networks in the world, complete with Anycast support and extensive DDoS protection." 
        },
        {
            id: 4,
            title: "Why does Internet Information Server want a password?",
            content: "We operate one of the most advanced 100 Gbit networks in the world, complete with Anycast support and extensive DDoS protection." 
        }
    ],
    packages: [
        {
            id: 1,
            img: Price1,
            title : "Shared Hosting",
            price: "4.67",
            packList: [
                {
                    id: 1,
                    pcList_1: "2 TB of space",
                    pcList_2: "unlimited bandwidth",
                    pcList_3: "full backup systems" ,
                    pcList_4: "free domain",
                    pcList_5: "unlimited database"
                }
            ]
        },
        {
            id: 2,
            img: Price2,
            title : "Dedicated Hosting",
            price: "4.67",
            packList: [
                {
                    id: 2,
                    pcList_1: "2 TB of space",
                    pcList_2: "unlimited bandwidth",
                    pcList_3: "full backup systems" ,
                    pcList_4: "free domain",
                    pcList_5: "unlimited database"
                }
            ]
        },
        {
            id: 3,
            img: Price3,
            title : "Cloud Hosting",
            price: "4.67",
            packList: [
                {
                    id: 3,
                    pcList_1: "2 TB of space",
                    pcList_2: "unlimited bandwidth",
                    pcList_3: "full backup systems" ,
                    pcList_4: "free domain",
                    pcList_5: "unlimited database"
                }
            ]
        }
    ],
    abouts : [
        {
            id: 1,
            title : "Global server location",
            paragraph: "Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!",
            img: About1,
            packageList : [
                {
                    id: 1,
                    pcList_1: "WordPress hosting with detailed website",
                    pcList_2: "Our experts are just part of the reason",
                    pcList_3: "Detailed website analytics"
                }
            ]
        },
        {
            id: 2,
            title : "Dedicated support",
            paragraph: "Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!",
            img: About2,
            packageList : [
                {
                    id: 2,
                    pcList_1: "WordPress hosting with detailed website",
                    pcList_2: "Our experts are just part of the reason",
                    pcList_3: "Detailed website analytics"
                }
            ]
        }
    ]

}


export const reducer = (state = INITIAL_STATE, action) => {
    return state
}