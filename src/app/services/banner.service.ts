import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay, map  } from 'rxjs/operators';

import { Banner } from '../sherad/models/banner.model';
import { BannerInterfaces } from '../sherad/interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private readonly API = 'http://localhost:3000/banners';

  constructor(private http: HttpClient) { }

  public create(banner: Banner): Observable<Banner> {
    return this.http.post<Banner>(`${this.API}/create`, banner);
  }

  public list() {
    return this.http.get<BannerInterfaces>(`${this.API}/list`)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  public update(banner: Banner, id: string): Observable<Banner> {
    return this.http.put<Banner>(`${this.API}/update/${id}`, banner);
  }

  public delete(id: string): Observable<{}> {
    return this.http.delete(`${this.API}/delete/${id}`);
  }

  public byId(id: string) {
    return this.http.get<Banner>(`${this.API}/${id}`);
  }
}
