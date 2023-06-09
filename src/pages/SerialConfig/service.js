/*
 * @Author: zp
 * @Date:   2020-02-02 11:57:24
 * @Last Modified by: zp
 * @Last Modified time: 2020-05-09 11:12:29
 */
import { utils } from 'suid';
import { constants } from '@/utils';

const { request } = utils;

const { SERVER_PATH } = constants;

/** 获取列表 */
export async function getList(data = {}) {
  const url = `${SERVER_PATH}/sei-serial/serialNumberConfig/findAll`;
  return request({
    url,
    method: 'POST',
    data,
  });
}

/** 保存 */
export async function save(data) {
  const url = `${SERVER_PATH}/sei-serial/serialNumberConfig/save`;
  return request({
    url,
    method: 'POST',
    data,
  });
}
/** 保存 */
export async function updateCurrent(data) {
  let url = `${SERVER_PATH}/sei-serial/serialNumberConfig/refreshCurrentNumber?className=${data.className}&current=${data.current}`
  if(data.isolation){
     url = `${url}&isolation=${data.isolation}`;
  }
  return request({
    url,
    method: 'POST',
  });
}
/** 保存 */
export async function queryCurrent(data) {
  let url = `${SERVER_PATH}/sei-serial/serialNumberConfig/getCurrentNumber?className=${data.className}`
  if(data.isolation){
     url = `${url}&isolation=${data.isolation}`;
  }
  return request({
    url,
    method: 'POST',
  });
}

/** 删除 */
export async function del(params) {
  const url = `${SERVER_PATH}/sei-serial/serialNumberConfig/delete/${params.id}`;
  return request({
    url,
    method: 'POST',
  });
}
