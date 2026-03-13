export default {
    content: [
        "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: '#f5f3ee',
                ink: '#1a1814',
                muted: '#888076',
                accent: '#c8502a',
                line: '#d8d4cb',
            },
             fontFamily: {
                'mono': ['DM Mono', 'monospace'],
            },
        },
    },
}