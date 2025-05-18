import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;
  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await axios.get<T>(url);
      return data;
    } catch (error) {
      throw new Error('This is an error from AxiosAdapter - Check logs');
    }
  }
  /*post(url: string, data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  patch(url: string, data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(url: string): Promise<any> {
    throw new Error('Method not implemented.');
  }*/
}
