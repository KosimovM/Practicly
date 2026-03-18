 interface Cadr {
  name: string;
  description: string;
  id: number;
 }

 export interface CadrState {
  data: Cadr[];
  card: Cadr | null;
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
 
