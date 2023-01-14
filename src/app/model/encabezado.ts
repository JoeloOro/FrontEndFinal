export class Encabezado {
  id: number;
  nombre: string;
  posicion: string;
  urlImagen: string;
  acercaDe: string;
  ubicacion: string;
  email: string;
  password: string;

  constructor(id: number, nombre: string, posicion: string, urlImagen: string, acercaDe: string, ubicacion: string, email: string, password: string) {
      this.id = id;
      this.nombre = nombre;
      this.posicion = posicion;
      this.urlImagen = urlImagen;
      this.acercaDe = acercaDe;
      this.ubicacion = ubicacion;
      this.email = email;
      this.password = password;
  }
}

