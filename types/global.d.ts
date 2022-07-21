import type {
  ComponentRenderProxy,
  VNode,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType
} from "vue"

declare const BMap: any
declare const BMapGL: any

declare global {
  // window
  declare interface Window {
    tinymce : any;
    baiduMap : any;
  }
  // vue
  declare type PropType<T> = VuePropType<T>;
  type VueNode = VNodeChild | JSX.Element;
  
  declare type Writable<T> = {
    -readonly [P in keyof T]: T[P];
  };
  
  declare type Nullable<T> = T | null;
  declare type NonNullable<T> = T extends null | undefined ? never : T;
 type Recordable<T = any> = Record<string, T>;
  declare type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };
  declare type Indexable<T = any> = {
    [key: string]: T;
  };
  declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };
  declare type TimeoutHandle = ReturnType<typeof setTimeout>;
  declare type IntervalHandle = ReturnType<typeof setInterval>;
  
  declare interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }
  
  declare interface WheelEvent {
    path?: EventTarget[];
  }
  declare interface ImportMetaEnv extends ViteEnv {
    __: unknown;
  }

  declare interface ViteEnv {
    VITE_PORT: number;
    VITE_PUBLIC_PATH: string;
    VITE_PROXY_DOMAIN: string;
    VITE_PROXY_DOMAIN_REAL: string;
    VITE_ROUTER_HISTORY: string;
    VITE_LEGACY: boolean;
  }
  
  declare function parseInt(s: string | number, radix?: number): number;
  
  declare function parseFloat(string: string | number): number;

  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = ComponentRenderProxy;
    interface ElementAttributesProperty {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface IntrinsicAttributes {
      [elem: string]: any;
    }
  }
}

declare module "vue" {
  export type JSXComponent<Props = any> =
      | { new (): ComponentPublicInstance<Props> }
      | FunctionalComponent<Props>;
}
