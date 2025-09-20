interface Libro {
    titulo: string;
    autor?: {
        nombre?: string;
        pais?: string;
    };
    anioPublicacion?: number;
}

function mostrarLibro(libro: Libro): void {
    console.log(`Título: ${libro.titulo}`);
    console.log(`Autor: ${libro.autor?.nombre ?? "Autor desconocido"}`);
    console.log(`País del autor: ${libro.autor?.pais ?? "País desconocido"}`);
    console.log(`Año de publicación: ${libro.anioPublicacion ?? "Año no disponible"}`);
    console.log("---");
}

const libroCompleto: Libro = {
    titulo: "El Quijote",
    autor: {
        nombre: "Miguel de Cervantes",
        pais: "España"
    },
    anioPublicacion: 1605
};

const libroSinAutor: Libro = {
    titulo: "Cuentos populares",
    anioPublicacion: 1800
};

const libroSinAnio: Libro = {
    titulo: "Poemas modernos",
    autor: {
        nombre: "Gabriel García Márquez",
        pais: "Colombia"
    }
};

console.log("=== BIBLIOTECA DIGITAL ===\n");

console.log("1. Libro completo:");
mostrarLibro(libroCompleto);

console.log("2. Libro sin autor:");
mostrarLibro(libroSinAutor);

console.log("3. Libro sin año de publicación:");
mostrarLibro(libroSinAnio);

const libroAutorParcial: Libro = {
    titulo: "Ficciones",
    autor: {
        nombre: "Jorge Luis Borges"
    },
    anioPublicacion: 1944
};

console.log("4. Libro con autor parcial (sin país):");
mostrarLibro(libroAutorParcial);
