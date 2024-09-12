let categories = ["About", "FAQ", ["Black Holes", 
    { id: 1, cx: 100, cy: 300, r: 5, title: 'Types' },
    { id: 2, cx: 200, cy: 200, r: 5, title: 'Formation' },
    { id: 3, cx: 300, cy: 220, r: 5, title: 'Hawking Radiation' },
    { id: 4, cx: 400, cy: 120, r: 5, title: 'Event Horizon' },
    { id: 5, cx: 500, cy: 180, r: 5, title: 'Detection' }
]];

export function load() {
    return {
        cats: categories
    };
}