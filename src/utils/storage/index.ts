
interface ProxyStorage {
  getItem( key: string ): any;
  setItem( Key: string, value: string ): void;
  removeItem( key: string ): void;
  clear(): void;
}

class StorageProxy implements ProxyStorage {
  protected storage: ProxyStorage

  constructor( storageModel : ProxyStorage ) {
    this.storage = storageModel
  }

  setItem( key : string, value : any ) {
    const storage = this.storage
    if ( key ) {
      const data = JSON.stringify( value )
      storage.setItem( key, data )
    }
  }

  getItem( key: string ) {
    const storage = this.storage
    if ( key ) {
      let data = storage.getItem( key )
      if ( data == '' || data == null || JSON.stringify( data ) == '{}' ) {
        data = ''
      } else {
        data = JSON.parse( data )
      }
      return data
    } else {
      return null
    }
  }

  removeItem( key: string, isAll = false ) {
    const storage = this.storage
    if ( key ) {
      if ( isAll ) {
        this.clear()
      } else {
        storage.removeItem( key )
      }
    }
  }

  clear() {
    this.storage.clear()
  }
}

class LocalStorageProxy extends StorageProxy implements ProxyStorage {
  // eslint-disable-next-line no-useless-constructor
  constructor( localStorage : ProxyStorage ) {
    super( localStorage )
  }
}

export const sessionStorageHandle = new StorageProxy( sessionStorage )

export const localStorageHandle = new LocalStorageProxy( localStorage )
