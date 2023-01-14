export class ExperienciaEdit {
    id: number;
    nombre: string;
    lugar: string;
    jornada: string;
    inicio: string;
    fin: string;
    ubicacion: string;
    urlImagen: string;

    constructor(id: number, nombre: string, lugar: string, jornada: string, inicio: string, fin: string, ubicacion: string, urlImagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.lugar = lugar;
        this.jornada = jornada;
        this.inicio = inicio;
        this.fin = fin;
        this.ubicacion = ubicacion;
        this.urlImagen = urlImagen;
    }
}
