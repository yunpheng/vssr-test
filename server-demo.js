const Vue = require('vue');
const server = require('express')();
const path = require('path');
const template = require('fs').readFileSync(
	path.join(__dirname, './index.template.html'),
	'utf-8'
);

const renderer = require('vue-server-renderer').createRenderer({
	template,
});

const context = {
	title: 'vue ssr',
	metas: `
        <meta name="keyword" content="vue,ssr"/>
        <meta name="description" content="vue srr demo"/>
    `,
};

server.get('*', (req, res) => {
	const app = new Vue({
		data: {
			url: req.url,
		},
		template: `<div>访问的 URL 是： {{ url }}</div>`,
	});

	renderer.renderToString(app, context, (err, html) => {
		res.setHeader('Content-Type', 'text/html;charset=utf-8;');
		if (err) {
			console.log('err :>> ', err);
			res.status(500).end('Internal Server Error');
			return;
		}
		res.end(html);
	});
});

server.listen(8080);
