$(function() {

	CMS.init({

		// Name of your site or location of logo file ,relative to root directory (img/logo.png)
		siteName: 'Recursos',

		// Tagline for your site
		siteTagline: 'para aprender',

		// Email address
		siteEmail: 'GersonLazaro@GersonLazaro.com',

		// Name
		siteAuthor: 'Gerson Lázaro',

		// Navigation items
		siteNavItems: [
			{ name: 'Github', href: 'https://github.com/GersonLazaro', newWindow: false},
			{ name: 'About'},
			{ name: 'Libros'},
			{ name: 'Cursos'},
			{ name: 'Otros'},
		],

		// Posts folder name
		postsFolder: 'posts',

		// Homepage posts snippet length
		postSnippetLength: 120,

		// Pages folder name
		pagesFolder: 'pages',

		// Site fade speed
		fadeSpeed: 300,

		// Site footer text
		footerText: '<a href="https://www.gersonlazaro.com" target="_blank">Gerson Lázaro</a> &copy; ' + new Date().getFullYear(),

		// Mode 'Github' for Github Pages, 'Apache' for Apache server. Defaults
		// to Github
		mode: 'Github',

		// If Github mode is set, your Github username and repo name. Defaults
		// to Github pages branch (gh-pages)
		githubUserSettings: {
			username: 'GersonLazaro',
			repo: 'recursos-para-aprender'
		}

	});

	// Markdown settings
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false
	});

});
