export const person = {
	name: 'Salman A',
	title: 'Senior Full Stack Engineer',
	location: 'Kochi, Kerala · IN',
	email: 'hello@salman.dev',
	github: '#',
	linkedin: '#'
} as const;

export const typingPhrases = [
	'Senior Full Stack Engineer',
	'React Native Developer',
	'Frontend Architect',
	'TypeScript Enthusiast'
];

export const tickerTech = [
	'React Native', 'TypeScript', 'Next.js', 'Node.js', 'Spring Boot', 'Prisma', 'tRPC', 'Redux',
	'Zustand', 'Tailwind', 'Reanimated', 'Fastlane', 'CodePush', 'PostgreSQL', 'MySQL', 'GraphQL',
	'Java', 'Kotlin', 'Python', 'Docker', 'GitHub Actions', 'Jest', 'Expo', 'ElysiaJS'
];

export interface Stat {
	value: number;
	suffix: string;
	label: string;
}

export const stats: Stat[] = [
	{ value: 4, suffix: '+', label: 'years\nexperience' },
	{ value: 2, suffix: '', label: 'production\napps shipped' },
	{ value: 10, suffix: '+', label: 'technologies\nin active use' }
];

export interface ExperienceEntry {
	period: string;
	role: string;
	company: string;
	highlights: string[];
}

export const experience: ExperienceEntry[] = [
	{
		period: 'JUL 2021 — PRESENT · ~5 YRS',
		role: 'Software Development Engineer',
		company: 'Hatio Innovation Pvt Ltd',
		highlights: [
			'Tech Lead for 2 concurrent product teams, shipping to production every cycle',
			'Owned the full lifecycle of a greenfield React Native app (iOS + Android)',
			'Set up Fastlane + CodePush pipelines for automated OTA releases',
			'Migrated a legacy Angular admin portal to React and redesigned the UX end-to-end',
			'Re-architected the theme provider to support Dark Mode and a full visual redesign',
			'Built REST APIs with Spring Boot in Java and Kotlin',
			'Led the engineering-graduate training program for new hires'
		]
	}
];

export interface Project {
	icon: string;
	type: string;
	name: string;
	stack: string[];
	points: string[];
}

export const projects: Project[] = [
	{
		icon: 'DW',
		type: 'web · component lib',
		name: 'DendroWeb',
		stack: ['Next.js', 'tRPC', 'Tailwind', 'NextAuth', 'Prisma', 'MySQL', 'Vue.js'],
		points: [
			'Feature-rich plotting surface with zoom, pan, drag and custom tooltips',
			'Published a reusable Vue.js component library on npm via Vite',
			'80% improvement in page load times through IndexedDB query caching',
			'Email / password plus Discord OAuth via NextAuth'
		]
	},
	{
		icon: 'MC',
		type: 'web3 · healthcare',
		name: 'MedChain',
		stack: ['React', 'Solidity', 'Node.js', 'IPFS', 'Ethereum'],
		points: [
			'Decentralized health-record system on Ethereum + IPFS',
			'Delivered MVP in 3 months leading a team of 4',
			'Secure blockchain-verified file upload and retrieval flow',
			'Contract-level access control per patient / provider'
		]
	},
	{
		icon: '∞',
		type: 'work · in progress',
		name: 'More in the forge',
		stack: ['React Native', 'Reanimated', 'Expo'],
		points: [
			'Shipping mobile + admin tooling for two Hatio product lines',
			'Deeper experiments with Reanimated gestures and haptics',
			'Case studies coming soon — ping me if you want a walkthrough'
		]
	}
];

export interface SkillGroup {
	group: string;
	items: [string, number][];
}

export const skills: SkillGroup[] = [
	{ group: 'Mobile', items: [['React Native', 95], ['Expo', 88], ['Reanimated', 82], ['Fastlane', 85], ['CodePush', 88]] },
	{ group: 'Languages', items: [['TypeScript', 94], ['JavaScript', 96], ['Java', 82], ['Kotlin', 78], ['Python', 72], ['SQL', 80], ['C++', 65]] },
	{ group: 'Frontend', items: [['React', 95], ['Next.js', 90], ['Redux / Zustand', 88], ['Tailwind CSS', 92], ['Accessibility', 82]] },
	{ group: 'Backend', items: [['Node.js', 88], ['Spring Boot', 82], ['Express.js', 85], ['tRPC', 80], ['ElysiaJS', 70]] },
	{ group: 'Databases', items: [['MySQL', 88], ['PostgreSQL', 85], ['Prisma', 90], ['Oracle', 70]] },
	{ group: 'DevOps', items: [['Git', 95], ['GitHub Actions', 85], ['GitLab CI', 80], ['Docker', 78], ['Jest', 85], ['JUnit', 72]] }
];

export const education = {
	degree: 'B.Tech in Computer Science & Engineering',
	college: 'Govt. Model Engineering College, Kochi',
	cgpa: '8.49',
	year: 2021
} as const;
