import { Injectable } from '@angular/core';

@Injectable()
export abstract class StorageService{
  constructor(protected readonly storage: Storage){}

  get length(): number {
    return this.storage.length;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  getArray(key: string): string[] {
    const item = this.getItem(key);

    return item?.split(',') ?? [];
  }

  getObject<T>(key: string): T | null {
    const item = this.getItem(key);

    try {
      return item ? JSON.parse(item) as T : null;
    } catch (error) {
      return null;
    }
  }

  getMap<K, V>(key: string): Map<K, V> | null {
    const item = this.getItem(key);

    if (!item) {
      return null;
    }
    
    const obj = JSON.parse(item);
    return new Map<K, V>(Object.entries(obj) as Iterable<[K, V]>);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem(key: string, data: string): void {
    this.storage.setItem(key, data);
  }

  setArray(key: string, data: string[]): void {
    this.setItem(key, data.join(','));
  }

  setObject(key: string, data: unknown): void {
    this.setItem(key, JSON.stringify(data));
  }

  setMap<K, V>(key: string, data: Map<K, V>): void {
    this.setItem(key, JSON.stringify(Array.from(data.entries())));
  }
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService extends StorageService {
  constructor() {
    super(localStorage);
  }
}


@Injectable({
  providedIn: 'root'
})
export class SessionStorageService extends StorageService {
  constructor() {
    super(sessionStorage);
  }
}
