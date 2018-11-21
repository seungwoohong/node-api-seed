const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'root';
});

router.get('/sub', (ctx, next) => {
    ctx.body = 'sub';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Server is listening to port 4000!');
});;
