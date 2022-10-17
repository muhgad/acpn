// import { HeadersInterceptor } from './headers.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './headers.interceptor';
import { ErrorHandleInterceptor } from './error-handle.interceptor';

export const HttpInterceptorsProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorHandleInterceptor, multi: true },
];
