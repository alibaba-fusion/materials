/* eslint-disable react-hooks/rules-of-hooks */
import { useMethod } from '../hook/useMethod';

export async function hello() {
  return {
    message: 'Hello ICE & Midway Serverless & Aliyun!',
    method: useMethod(),
  };
}

export async function getList() {
  return {
    method: useMethod(),
    list: [
      {
        name: '@midwayjs/faas-cli',
        info: 'FaaS 本地研发工具包',
      },
      {
        name: '@midwayjs/faas',
        info: '函数IoC框架',
      },
      {
        name: '@midwayjs/runtime-engine',
        info: '函数运行时引擎',
      },
    ],
  };
}

export async function sendMessage(message: string) {
  return {
    answer: `Your message is ${message}`,
    method: useMethod(),
  };
}
