export const root = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "./dark/" : "./";

export const socials = [
	{
		id: "github",
		url: "https://github.com/taml5",
		imagePath: root + "github.svg",
		name: "GitHub"
	},
	{
		id: "linkedin",
		url: "https://www.linkedin.com/in/dexter-tam/",
		imagePath: "./linkedin.png",
		name: "LinkedIn"
	}
];
export const blurb = (
	<>
		<p>
			I'm a rising third year in the University of Toronto, specialising in Computer Science with a minor in Philosophy.
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</p>
	</>
);
export const projects = [
	{
		id: "RSSReader",
		title: "Dingbat: RSS Reader",
		imagePath: "./rss.png",
		description: (<>An RSS reader, built using Python and SQLite for the backend and ReactJS (Typescript, SCSS) for the frontend.</>),
		url: "https://github.com/taml5/rss-reader"
	},
	{
		id: "website",
		title: "Personal Website",
		imagePath: root + "website.png",
		description: (<>A personal website built in React. Inspired by David Chuan-En Lin's <a href="https://chuanenlin.com/" target="_blank">website</a>.</>),
		url: "https://github.com/taml5/website"
	},
	{
		id: "game",
		title: "Text-Based Adventure Game",
		imagePath: "./game.png",
		description: (<>A game engine to render text-based adventure games in the style of <em>Zork</em> (1989) and Infocom games.</>),
		url: "https://github.com/taml5/adventure_game"
	},
	{
		id: "benson",
		title: "Healthcare Chatbot",
		imagePath: "./benson.png",
		description: (<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>),
		url: "https://github.com/Accusamus2065/Easy-Healthcare"
	}
];
