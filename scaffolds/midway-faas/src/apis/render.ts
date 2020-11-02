/* eslint-disable  @typescript-eslint/explicit-member-accessibility, class-methods-use-this */
// import { join } from 'path';
import { Provide, Func, Inject } from '@midwayjs/decorator';
import { FunctionHandler, FaaSContext } from '@midwayjs/faas';

@Provide()
@Func('render.handler', { event: 'HTTP', path: '/*', middleware: ['fmw:staticFile'] })
export class Render implements FunctionHandler {
  @Inject()
  ctx: FaaSContext;

  @Inject('baseDir')
  baseDir: string;

  async handler() {
    // const render = require(join(this.baseDir, '../build/server/index')).default;
    // const { html, error } = await render({
    //   pathname: this.ctx.request.path,
    //   initialData: {},
    // });

    // if (error) {
    //   console.log('SSR 失败，降级到 CSR', error);
    // } else {
    //   console.log('SSR 成功');
    // }
    // return html;
  }
}
