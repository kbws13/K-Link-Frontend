// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取所有短链标签 GET /api/tags */
export async function getAllTagsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListUrlTagCategoryVo_>('/api/tags', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 添加短链标签 POST /api/tags */
export async function addTagUsingPost(
  body: API.UrlTagAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUrlTagVo_>('/api/tags', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
