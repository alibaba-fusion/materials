'use strict';

/**
 * abc-xyz => AbcXyz
 * @param {String} str
 */
export const varCase = str =>
  str
    .replace(/-[a-z]/g, m => m[1].toUpperCase())
    .replace(/^.{1}/, m => m.toUpperCase());
/**
 * AbcXyz => abc-xyz
 * @param {String} str
 */
export const lowCase = str =>
  str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).replace(/^-/, '');
/**
 * get value of name from location.search
 * @param {String} name search name
 * @returns {String} value of name
 */
export const getUrlParam = name => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = decodeURIComponent(window.location.search.substr(1)).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

/**
 * ?a=1&b=2  => {a:'1',b:'2'}
 * @param {String} lsearch =location.search
 */
export const search2obj = lsearch => {
  const search = (lsearch && lsearch.substr(1)) || '';
  if (!search) {
    return {};
  }
  const paramsList = search.split('&');
  const params = {};
  paramsList.forEach(i => {
    if (!i) {
      return;
    }

    const p = i.split('=');
    if (p.length === 1) {
      params[p[0]] = '';
    } else {
      params[p[0]] = p[1];
    }
  });

  return params;
};

/**
 * {a:'1',b:'2'} => ?a=1&b=2
 * @param {Object} obj like {a:'1',b:'2'}
 */
export const obj2search = obj => {
  const search = Object.keys(obj)
    .map(i => `${i}=${obj[i]}`)
    .join('&');
  if (!search) {
    return '';
  }
  return `?${search}`;
};

/**
 * {a:'1',b:'2'} => http://xxxxxxx?a=1&b=2
 * @param {Object} obj like {a:'1',b:'2'}
 */
export const getUrlWithSearchObj = obj => {
  const params = search2obj(location.search);
  Object.assign(params, obj);

  return `${location.pathname}${obj2search(params)}`;
};

/**
 * get value of name from cookie
 * @param {String} name cookie name
 */
export function getCookie(name) {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);
  if (arr) {
    return unescape(arr[2]);
  }
  return null;
}
