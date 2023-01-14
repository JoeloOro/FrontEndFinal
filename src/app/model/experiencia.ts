export class Experiencia {
    id: number;
    nombre: string;
    lugar: string;
    jornada: string;
    inicio: string;
    fin: string;
    domicilio: string;
    urlImagen: string;

    constructor(id: number, nombre: string, lugar: string, jornada: string, inicio: string, fin: string, domicilio: string, urlImagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.lugar = lugar;
        this.jornada = jornada;
        this.inicio = inicio;
        this.fin = fin;
        this.domicilio = domicilio;
        this.urlImagen = urlImagen;
    }
}
