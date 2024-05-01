import isEmpty from 'lodash/isEmpty';
import appConfig from '@/pages/api/config/local-config.json';


export const getAppConfig = () => appConfig;
const URL = appConfig.endpoints.local;

type GetOptionType = {
    noCache?: boolean,
    isContentTypeJson?: boolean,
    requestOptions?: any,
}
type DefaultHeaderType = {
  'Content-Type': string,
  'Cache-Control'?: string,
  Accept?: string,
  Pragma?: string,
  Expires?: number,
}

export const get = async (path: string = '', params: string = '', options: GetOptionType = {}, headers: any = {}) => {
  const noCache = !isEmpty(options) && options.noCache ? options.noCache : false;
  const isContentTypeJson = !isEmpty(options) && options.isContentTypeJson ? options.isContentTypeJson : false;
  const requestOptions = !isEmpty(options) && options.requestOptions ? options.requestOptions : null;

  let defaultHeader: DefaultHeaderType = isContentTypeJson ? {
    'Content-Type': 'application/json',
  } : {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  };

  if (noCache) {
    defaultHeader = {
      ...defaultHeader,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0,
    };
  } else {
    defaultHeader = {
      ...defaultHeader,
      'Cache-Control': 'must-revalidate',
    };
  }

  if (!isEmpty(headers)) {
    defaultHeader = {
      ...defaultHeader,
      ...headers,
    };
  }
  const requestEndpoint = `${URL}${path}${params}`;

  const requestInit = {
    method: 'GET',
    headers: defaultHeader,
    options: requestOptions,
  };
  return fetchWithTimeout(requestEndpoint, requestInit);
}
export const post = async (path = '', data: any, header = {}, options = {}) => {
  const endpoint = URL + path;
  let basicHeaders = {
    'Content-Type': 'application/json',
  };
  if (header) {
    basicHeaders = {
      ...basicHeaders,
      ...header,
    }
  }

  const requestInit = {
    method: 'POST',
    credentials: 'same-origin',
    headers: basicHeaders,
    body: isEmpty(data) ? '' : JSON.stringify(data),
    options,
  }
  return fetchWithTimeout(endpoint, requestInit)
};

export async function fetchWithTimeout(url: string, requestInit = {}) {
  const { options }: any = requestInit;
  const { timeout = 12000 } = options || {};
  // eslint-disable-next-line no-undef
  const controller = new AbortController();
  const id = setTimeout(() => {
    controller.abort();
  }, timeout);
  const response = await fetch(url, {
    ...requestInit,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}