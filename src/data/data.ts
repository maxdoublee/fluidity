import pic_1 from "./pictures/pic_1.jpg";
import pic_2 from "./pictures/pic_2.jpg";
import pic_3 from "./pictures/pic_3.jpg";
import pic_4 from "./pictures/pic_4.jpg";
import pic_5 from "./pictures/pic_5.jpg";
import pic_6 from "./pictures/pic_6.jpg";
import pic_7 from "./pictures/pic_7.jpg";
import pic_8 from "./pictures/pic_8.png";

export type dataElem = {
	label: string,
	value: string,
}

export type linkGroup = {
	title: string;
	links: dataElem[];
}

export const links: linkGroup[] = [
	{
		title: "PRIMARY",
		links: [
			{
				label: "Bookmarks",
				value: "https://app.raindrop.io/my/0",
			},
			{
				label: "Drive",
				value: "https://drive.google.com/drive/my-drive",
			},
			{
				label: "Personal Email",
				value: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
			},
			{
				label: "SIS",
				value: "https://sis.rpi.edu/",
			},
			{
				label: "RPI Email",
				value: "https://outlook.office.com/mail/",
			},
			{
				label: "Current Courses",
				value: "https://app.raindrop.io/my/27202983",
			},
			{
				label: "ChatGPT",
				value: "https://chatgpt.com",
			},
		]
	},
	{
		title: "SECONDARY",
		links: [
			{
				label: "PHD",
				value: "https://app.raindrop.io/my/43781127",
			},
			{
				label: "Jobs",
				value: "https://app.raindrop.io/my/36380838",
			},
			{
				label: "Server",
				value: "http://52.6.69.170:8080/files/",
			},
			{
				label: "Day One",
				value: "https://dayone.me",
			},
			{
				label: "Portfolio",
				value: "https://portfolio-five-weld-48.vercel.app",
			},
			{
				label: "Previous Courses",
				value: "https://app.raindrop.io/my/24605419",
			},
			{
				label: "Other",
				value: "https://app.raindrop.io/my/24605403",
			},
		]
	},
]

export const images: dataElem[] = [
	{ label: "pic_1", value: pic_1 },
	{ label: "pic_2", value: pic_2 },
	{ label: "pic_3", value: pic_3 },
	{ label: "pic_4", value: pic_4 },
	{ label: "pic_5", value: pic_5 },
	{ label: "pic_6", value: pic_6 },
	{ label: "pic_7", value: pic_7 },
	{ label: "pic_8", value: pic_8 },
];

export const searchEngines: dataElem[] = [
	{
		label: "DuckDuckGo",
		value: "duckduckgo.com/",
	},
	{
		label: "Google",
		value: "google.com/search",
	},
	{
		label: "Qwant",
		value: "qwant.com/",
	},
	{
		label: "Ecosia",
		value: "ecosia.org/search",
	},
	{
		label: "Perplexity",
		value: "perplexity.ai/",
	},
];

export type FastForwards = {
	[key: string]: string,
}

export type Search = {
	engine: string,
	fastForward: FastForwards,
}

export const searchSettings: Search = {
	engine: searchEngines[4].value,
	fastForward: {
		"myflixer": "https://myflixer.to/",
		"maps": "https://google.de/maps/",
		"reddit": "https://reddit.com/",
		"github": "https://github.com/",
		"y": "https://youtube.com/",
		"youtube": "https://youtube.com/",
		"wolfram": "https://www.wolframalpha.com/",
		"foxsports": "https://www.foxsports.com/",
		"desmos": "https://www.desmos.com/calculator",
		"d": "https://www.doordash.com/",
		"a": "https://www.amazon.com/ref=nav_logo",
		"walmart": "https://www.walmart.com/",
		"apple": "https://www.apple.com/",
		"lms": "https://lms.rpi.edu/?new_loc=%2Fultra%2Fcourses%2F_14279_1%2Fcl%2Foutline",
		"gradescope": "https://www.gradescope.com/",
		"lrc": "https://app.raindrop.io/my/27720323",
		"bestbuy": "https://www.bestbuy.com/",
		"nsbe": "https://www.nsbe.org/",
		"eyebuydirect": "https://www.eyebuydirect.com/",
		"flagrant": "https://app.raindrop.io/my/29325935",
		"huberman": "https://hubermanlab.com/",
		"rogan": "https://www.youtube.com/@joerogan",
		"netflix": "https://www.netflix.com/browse",
		"adultswim": "https://www.adultswim.com/",
		"rick and morty": "https://www.adultswim.com/videos/rick-and-morty",
		"patreon": "https://www.patreon.com/home",
		"breaking points": "https://www.youtube.com/c/breakingpoints",
		"news": "https://news.google.com/home?hl=en-US&gl=US&ceid=US:en",
		"world cup": "https://www.fifa.com/fifaplus/en/home",
		"weather": "https://www.fifa.com/fifaplus/en/home",
		"cryto": "https://coinmarketcap.com/",
		"instagram": "https://www.instagram.com/",
		"twitter": "https://twitter.com/",
		"neuralink": "https://neuralink.com/",
		"elon": "https://app.raindrop.io/my/29326053",
		"snapchat": "https://web.snapchat.com/",
		"cashapp": "https://cash.app/account/activity",
		"sefcu": "https://online.sefcu.com/DashboardV2",
		"chase": "https://secure06ea.chase.com/web/auth/dashboard#/dashboard/overviewAccounts/overview/multiProduct", 
		"apple card": "https://card.apple.com/",
		"amazon card": "https://www.amazon.com/credit/rewardscard/member?ref_=dsk_mpo_bottom_inf_bx_rc",
		"genius": "https://genius.com/",
		"meal prep": "https://app.raindrop.io/my/29327058",
		"gym": "https://app.raindrop.io/my/29327078",
		"find my": "https://www.icloud.com/find/",
		"ebay": "https://www.ebay.com/",
		"uniqlo": "https://www.uniqlo.com/us/en/",
		"neurosky": "http://neurosky.com/",
		"litec car": "https://www.ti.com/tool/TIRSLK-EVM#order-start-development",
		"hbomax": "https://www.hbomax.com/",
		"lex": "https://www.youtube.com/@lexfridman",
		"books": "https://app.raindrop.io/my/28535329",
		"optimum": "https://www.optimum.net/",
		"rpi reddit": "https://www.reddit.com/r/RPI/",
		"brain dead": "https://wearebraindead.com/",
		"digikey": "https://www.digikey.com/",
		"tech news": "https://www.cnet.com/news//",
		"chegg": "https://www.chegg.com/",
		"secretlab": "https://secretlab.co/",
		"lofi": "https://www.youtube.com/watch?v=IjMESxJdWkg",
		"loupe": "https://www.loupeart.com/",
		"gasdrawls": "https://gasdrawls.com/",
		"target": "https://www.target.com/",
		"etsy": "https://www.etsy.com/",
		"thingiverse": "https://www.thingiverse.com/",
		"peacock": "https://www.peacocktv.com/watch/home",
		"soundcloud": "https://soundcloud.com/",
		"barber": "https://app.raindrop.io/my/29328702",
		"namecheap": "https://www.namecheap.com/",
		"nintendo": "https://www.nintendo.com/",
		"g2a": "https://www.g2a.com/",
		"espn": "https://www.espn.com/",
		"tnt": "https://www.tntdrama.com/",
		"gaming news": "https://gamerant.com/gaming/",
		"phd": "https://app.raindrop.io/my/43781127",
		"repo": "https://github.com/maxdoublee?tab=repositories",
		"doordash": "https://www.doordash.com",
		"og": "https://github.com/PrettyCoffee/fluidity",
		"startpage": "https://github.com/PrettyCoffee/fluidity",
		"live demo": "https://prettycoffee.github.io/fluidity/",
		"server": "http://www.maxdoublee.com/",
		"chat": "https://chatgpt.com",
		"chatgpt": "https://chatgpt.com",
		"linkedin": "https://www.linkedin.com/",
		"portfolio": "https://portfolio-five-weld-48.vercel.app",
		"dayone": "https://dayone.me",
		"c": "https://chatgpt.com",
	}
}

export type colorsType = {
	[key: string]: string
	"--bg-color": string,
	"--default-color": string,
	"--accent-color": string,
	"--accent-color2": string,
}

export type Theme = {
	name: string;
	colors: colorsType;
	image: string;
}

export const themes: Theme[] = [
	{
		name: "CHROMAKOPIA",
		image: "https://pbs.twimg.com/media/GaGi6RrWUAAhuY8?format=jpg&name=small",
		colors: {
			"--bg-color": "#00843D",
			"--default-color": "#D2D0B6",
			"--accent-color": "#000000",
			"--accent-color2": "#F3BB56",
		},
	},
	{
		name: "DOOM",
		image: "https://f4.bcbits.com/img/a2625942251_65",
		colors: {
			"--bg-color": "#272B33",
			"--default-color": "#D1E589",
			"--accent-color": "#9A413D",
			"--accent-color2": "#CECCD7",
		},
	},
	{
		name: "Pinball",
		image: "https://media.pitchfork.com/photos/65e8e14d086a529f07f1fd76/master/pass/MIKE-Tony-Seltzer-Pinball.jpg",
		colors: {
			"--bg-color": "#FFFFFF",
			"--default-color": "#000000",
			"--accent-color": "#404040",
			"--accent-color2": "#BFBFBF",
		},
	},
	{
		name: "Burning Desire",
		image: "https://f4.bcbits.com/img/a2382337335_65",
		colors: {
			"--bg-color": "#B70F16",
			"--default-color": "#E8F3F5",
			"--accent-color": "#FF8C00",
			"--accent-color2": "#000000",
		},
	},
	{
		name: "Disco",
		image: "https://media.pitchfork.com/photos/60d1efd81302105f8cad0e34/1:1/w_1500,h_1500,c_limit/MIKE:%20Disco!.jpeg",
		colors: {
			"--bg-color": "#505054",
			"--default-color": "#FFFFFF",
			"--accent-color": "#BEC469",
			"--accent-color2": "#0D3876",
		},
	},
	{
		name: "EYES",
		image: "https://media.pitchfork.com/photos/627bb38d93f71d60359384f1/master/w_1280%2Cc_limit/Danger-Mouse-Black-Thought-Cheat-Codes-2022.jpg",
		colors: {
			"--bg-color": "#443C44",
			"--default-color": "#DCD6C8",
			"--accent-color": "#D63437",
			"--accent-color2": "#296643",
		},
	},
	{
		name: "Shake",
		image: "https://i.scdn.co/image/ab67616d0000b273a6dd9a81268761d323411303",
		colors: {
			"--bg-color": "#0E0D0D",
			"--default-color": "#FFFFFF",
			"--accent-color": "#B09982",
			"--accent-color2": "#664733",
		},
	},
	{
		name: "Walkin",
		image: "https://i.scdn.co/image/ab67616d0000b2735b924aa009b61b6b9d831eec",
		colors: {
			"--bg-color": "#FC8EAC",
			"--default-color": "#FFFFFF",
			"--accent-color": "#52AEAE",
			"--accent-color2": "#060D56",
		},
	}
]
