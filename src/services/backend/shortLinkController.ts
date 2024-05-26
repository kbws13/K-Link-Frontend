// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加短链 POST /api/shortLink/add */
export async function addUrlRelateUsingPost(
  body: API.UrlRelateAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/shortLink/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除短链 POST /api/shortLink/delete */
export async function deleteUrlRelateUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/shortLink/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据 id 获取 GET /api/shortLink/get/vo */
export async function getUrlRelateVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUrlRelateVoByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUrlRelate_>('/api/shortLink/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据短链获取长链 GET /api/shortLink/getByShort */
export async function getUrlRelateVoByShortLinkUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUrlRelateVoByShortLinkUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUrlRelateVo_>('/api/shortLink/getByShort', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取列表（仅管理员） POST /api/shortLink/list/page */
export async function listUrlRelateByPageUsingPost(
  body: API.UrlRelateQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUrlRelate_>('/api/shortLink/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取列表（封装类） POST /api/shortLink/list/page/vo */
export async function listUrlRelateVoByPageUsingPost(
  body: API.UrlRelateQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUrlRelateVo_>('/api/shortLink/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** login POST /api/shortLink/login */
export async function loginUsingPost(
  body: API.UrlRelateAddRequest,
  options?: { [key: string]: any },
) {
  return request<string>('/api/shortLink/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页获取当前用户创建的资源列表 POST /api/shortLink/my/list/page/vo */
export async function listMyUrlRelateVoByPageUsingPost(
  body: API.UrlRelateQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUrlRelate_>('/api/shortLink/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /api/shortLink/update */
export async function updateUrlRelateUsingPost(
  body: API.UrlRelateUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/shortLink/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
