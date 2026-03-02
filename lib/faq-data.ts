export interface FAQItem {
    question: string;
    answer: string | string[];
}

export interface FAQCategory {
    title: string;
    id: string;
    items: FAQItem[];
}

export const faqData: FAQCategory[] = [
    {
        title: "About Our Service",
        id: "about",
        items: [
            {
                question: "What services does Delta Software & Communication Ltd provide?",
                answer: "Delta Software & Communication Ltd provides high-speed broadband internet services for residential and corporate customers."
            },
            {
                question: "Which areas do you currently cover?",
                answer: "We provide service in selected coverage areas. Please contact our customer support to confirm availability in your location."
            },
            {
                question: "What types of internet connections do you offer?",
                answer: "We offer fiber-optic broadband connections ensuring stable speed, low latency, and reliable performance."
            }
        ]
    },
    {
        title: "Packages & Speed",
        id: "packages",
        items: [
            {
                question: "What internet packages do you offer?",
                answer: "We offer multiple packages based on speed and usage requirements. Please contact us or visit our official page for the latest package details."
            },
            {
                question: "Is the speed shared or dedicated?",
                answer: "Our residential packages are shared bandwidth, while dedicated bandwidth solutions are available for corporate clients."
            },
            {
                question: "Will I get the full speed mentioned in the package?",
                answer: "Yes, you will receive the subscribed speed within our network. However, international browsing speed may vary depending on external servers."
            }
        ]
    },
    {
        title: "Installation & Setup",
        id: "installation",
        items: [
            {
                question: "How long does installation take?",
                answer: "Installation is typically completed within 24–72 hours after confirmation, depending on area feasibility."
            },
            {
                question: "Is there any installation charge?",
                answer: "Installation charges may apply depending on package, location and promotional offers."
            },
            {
                question: "What documents are required for a new connection?",
                answer: [
                    "NID copy",
                    "Passport-size photo",
                    "Contact number",
                    "Full address",
                    "Others documents may required (if Applicable)"
                ]
            }
        ]
    },
    {
        title: "Billing & Payment",
        id: "billing",
        items: [
            {
                question: "When is my monthly bill due?",
                answer: "Bills are usually generated monthly and must be paid before the expiry date mentioned in your account."
            },
            {
                question: "What payment methods are available?",
                answer: [
                    "bKash",
                    "Nagad",
                    "Rocket"
                ]
            },
            {
                question: "What happens if I don’t pay on time?",
                answer: "Your connection may be temporarily suspended after the expiry date. Service will be restored once payment is confirmed."
            },
            {
                question: "Will my expiry date extend if I pay before expiry?",
                answer: "Yes. If you pay before your expiry date, your next billing cycle will start from the current expiry date, not the payment date (as per company recharge policy)."
            }
        ]
    },
    {
        title: "Technical Support",
        id: "support",
        items: [
            {
                question: "What should I do if my internet is not working?",
                answer: [
                    "1. Restart your router.",
                    "2. Check cable connections.",
                    "3. Contact our support team if the issue continues."
                ]
            },
            {
                question: "Do you provide 24/7 customer support?",
                answer: "Yes, for physical support our support team is available to assist you during service hours (additional charges may apply). For logical support we are available 24/7."
            },
            {
                question: "How can I contact customer support?",
                answer: [
                    "Hotline number",
                    "Facebook page",
                    "WhatsApp support",
                    "Office visit"
                ]
            }
        ]
    },
    {
        title: "Router & Equipment",
        id: "equipment",
        items: [
            {
                question: "Do you provide a router?",
                answer: "No, we can only recommend you for a good quality router."
            },
            {
                question: "Can I use my own router?",
                answer: "Yes, but it must support the required specifications for compatibility."
            },
            {
                question: "Who is responsible for router maintenance?",
                answer: "Customers are responsible for proper care of the router after installation."
            }
        ]
    },
    {
        title: "Corporate Services",
        id: "corporate",
        items: [
            {
                question: "Do you offer corporate internet solutions?",
                answer: [
                    "Dedicated bandwidth",
                    "Corporate packages",
                    "IP-based solutions",
                    "Customized enterprise solutions"
                ]
            },
            {
                question: "Do you provide public IP?",
                answer: "Yes, public IP services are available upon request (additional charges may apply)."
            }
        ]
    },
    {
        title: "Account & Policy",
        id: "policy",
        items: [
            {
                question: "How can I check my usage or account status?",
                answer: "Please contact customer support for account-related information."
            },
            {
                question: "Can I temporarily disconnect my service?",
                answer: "Yes, temporary hold options available upon request."
            },
            {
                question: "How can I cancel my connection?",
                answer: "You must inform our office formally before one month ago. Outstanding dues must be cleared."
            }
        ]
    }
];
