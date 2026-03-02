export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: 'Technology' | 'Company' | 'Guides' | 'News';
    image: string;
    author: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'The Future of Fiber-Optic Internet in Bangladesh',
        excerpt: 'Exploring the massive infrastructure shift and how it will transform connectivity for home and business.',
        content: 'Long form content here...',
        date: 'Oct 15, 2023',
        category: 'Technology',
        image: '/images/banner1.webp',
        author: 'Admin'
    },
    {
        id: '2',
        title: 'How to Optimize Your Home Wi-Fi for Peak Performance',
        excerpt: 'Simple tips and tricks to reduce latency and boost speeds throughout your house.',
        content: 'Long form content here...',
        date: 'Nov 02, 2023',
        category: 'Guides',
        image: '/images/banner2.webp',
        author: 'Support Team'
    },
    {
        id: '3',
        title: 'Delta ISP Expand Coverage to 10 New Districts',
        excerpt: 'We are proud to announce our latest expansion, bringing high-speed internet to thousands of more families.',
        content: 'Long form content here...',
        date: 'Dec 10, 2023',
        category: 'Company',
        image: '/images/banner3.webp',
        author: 'PR Dept'
    },
    {
        id: '4',
        title: 'Understanding Bandwidth: Shared vs Dedicated',
        excerpt: 'Which connection is right for you? A comprehensive breakdown for residential and corporate users.',
        content: 'Long form content here...',
        date: 'Jan 20, 2024',
        category: 'Guides',
        image: '/images/banner4.webp',
        author: 'Tech Expert'
    }
];

export const blogCategories = ['All', 'Technology', 'Company', 'Guides', 'News'];
