export class Educacion {
    id: number;
    nombre: string;
    titulo: string;
    inicio: string;
    fin: string;
    urlImagen: string;

    constructor(id: number, nombre: string, titulo: string, inicio: string, fin: string, urlImagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.titulo = titulo;
        this.inicio = inicio;
        this.fin = fin;
        this.urlImagen = urlImagen;
    }
}
