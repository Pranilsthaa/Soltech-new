const pricingData = [
    {
        id: 1,
        title: "Free",
        bestFor: 'Best for personal use',
        price: '$0',
        features: [
            'Task Management',
            'Project Planning',
            'Team Collaboration',
            'Notifications and Reminders',
            'What you get'
        ]
    },
    {
        id: 2,
        title: "Starter",
        bestFor: 'Best for personal use',
        price: '$8',
        features: [
            'Kanban Boards',
            'Gantt Charts',
            'Resource Allocation',
            'Calendar Integration',
            'Progress Tracking'
        ]
    },
    {
        id: 3,
        title: "Business",
        bestFor: 'Best for personal use',
        price: '$16',
        features: [
            'Customizable Workflows',
            'Reporting and Analytics',
            'Document Management',
            'Agile Methodology Support',
            'Issue Tracking'
        ],
        popular: true
    },
    {
        id: 4,
        title: "Enterprise",
        bestFor: 'Best for personal use',
        price: 'Custom',
        features: [
            'SSO',
            'All integrations',
            'Client Collaboration with 2FA',
            'Advanced Project Planning',
            'Mobile App Integration'
        ],
        custom: true
    },
]

export default pricingData;