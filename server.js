const { createBundleRenderer } = require('vue-server-renderer');

const renderer = createBundleRenderer(serverBundle, {
	runInNewContext: false, // 推荐
	template, // （可选）页面模板
	clientManifest, // （可选）客户端构建 manifest
});

// 在服务器处理函数中……
server.get('*', (req, res) => {
	const context = { url: req.url };
	// 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
	// 现在我们的服务器与应用程序已经解耦！
	renderer.renderToString(context, (err, html) => {
		// 处理异常...
		res.end(html);
	});
});
// const { createBundleRenderer } = require('vue-server-renderer');
// const createApp = require('./src/app');

// server.get('*', (req, res) => {
// 	const context = { url: req.url };
// 	const app = createApp(context);

// 	createBundleRenderer.renderToString(app, (err, html) => {
// 		// 处理错误
// 		res.end(html);
// 	});
// });

// const createApp = require('/path/to/build/built-server-bundle.js');

// server.get('*', (req, res) => {
// 	const context = { url: req.url };

// 	createApp(context).then((app) => {
// 		createBundleRenderer.renderToString(app, (err, html) => {
// 			if (err) {
// 				if (err.code === 404) {
// 					res.status(404).end('Page not found');
// 				} else {
// 					res.status(500).end('Internal Server Error');
// 				}
// 			} else {
// 				res.end(html);
// 			}
// 		});
// 	});
// });

// const devServer = require('./build/dev-server');
// const express = require('express');
// const app = express();
// const vueRender = require('vue-server-renderer');

// app.get('*', (request, response) => {
// 	response.status(200);
// 	response.setHeader('Content-Type', 'text/html;charset=utf-8;');
// 	devServer((serverBundle, clientBundle, template) => {
// 		let render = vueRender.createBundleRenderer(serverBundle, {
// 			template,
// 			clientManifest: clientBundle.data,
// 			// 每次创建一个独立的上下文
// 			renInNewContext: false,
// 		});
// 		render
// 			.renderToString({
// 				url: request.url,
// 			})
// 			.then((html) => {
// 				response.end(html);
// 			})
// 			.catch((error) => {
// 				response.end(JSON.stringify(error));
// 			});
// 	});
// });

// app.listen(5001, () => {
// 	console.log('服务已开启 :>> ');
// });
// const express = require('express');
// const app = express();
// // const Vue = require('vue');
// const App = require('./src/entry-server.js');
// let path = require('path');
// const template = require('fs').readFileSync(
// 	path.join(__dirname, './index.template.html'),
// 	'utf-8'
// );

// const renderer = require('vue-server-renderer').createRenderer({
// 	template,
// });

// const context = {
// 	title: 'vue ssr',
// 	metas: `
//         <meta name="keyword" content="vue,ssr">
//         <meta name="description" content="vue srr demo">
//     `,
// };

// app.get('*', async (request, response) => {
// 	// const vueApp = new Vue({
// 	// 	data: {
// 	// 		message: 'Hello ssr ~',
// 	// 	},
// 	// 	template: `<h1> {{message }} </h1>`,
// 	// });
// 	response.status(200);
// 	response.setHeader('Content-type', 'text/html;charset=urf-8');

// 	let { url } = request;
// 	let vm = await App({ url });

// 	renderer
// 		.renderToString(vm, context)
// 		.then((html) => {
// 			console.log('html :>> ', html);
// 			response.end(html);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });

// app.listen(3001, () => {
// 	console.log('服务已开启 :>> ');
// });
