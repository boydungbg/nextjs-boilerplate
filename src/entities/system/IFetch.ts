type UnfetchFn = (
  host: string,
  path: string,
  method?: string,
  data?: object | FormData,
  token?: string,
  options?: RequestInit
) => Promise<ApiResponse>;
type BuildUrlFn = (
  host: string,
  path: string,
  method?: string,
  params?: object | FormData
) => string;
type BuildQsFn = (params?: BodyInit | object) => string;
type GetBodyFn = (method?: string, data?: object | FormData) => any;
type BuildOptionsFn = (
  defaultOptions?: RequestInit,
  method?: string,
  body?: BodyInit | null,
  token?: string,
  isFormData?: boolean
) => RequestInit;

interface ApiResponse {
  ok: boolean;
  status: number;
  redirectedUrl?: string;
  data: any;
}
