import { Configuration } from '@midwayjs/decorator';

@Configuration({
  importConfigs: ['./config/'],
  imports: ['@midwayjs/faas-middleware-static-file'],
})
export class ContainerConfiguration {}
