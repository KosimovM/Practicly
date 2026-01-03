 interface Cadr {
  name: string;
  description: string;
  id: number;
 }

 export interface CadrState {
  data: Cadr[];
 }

 export interface CadrPost {
  name: string;
  description: string;
 };

  export interface CadrPut {
  id: number;
  name: string;
  description: string;
 }
 
