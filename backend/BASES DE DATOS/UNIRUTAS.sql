CREATE TABLE usuarios (
    cod_usuario VARCHAR(10) NOT NULL,
    contraseña VARCHAR(20) NOT NULL, 
    nombre VARCHAR(20) NOT NULL, 
    apellido VARCHAR(20) NOT NULL, 
    rol VARCHAR(3),
    PRIMARY KEY (cod_usuario)
);

CREATE TABLE rutas (
    cod_ruta VARCHAR(10) NOT NULL,
    nombre VARCHAR(20) NOT NULL,  
    PRIMARY KEY (cod_ruta),
);

CREATE TABLE paradas (
    cod_parada VARCHAR(10) NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    coordenadas VARCHAR(20) NOT NULL,
    cod_ruta VARCHAR(10) NOT NULL,
    PRIMARY KEY (cod_parada),
    FOREIGN KEY (cod_ruta) REFERENCES rutas(cod_ruta)
);

CREATE TABLE horarios (
    cod_horario VARCHAR(10) NOT NULL,
    hora VARCHAR(20) NOT NULL,
    PRIMARY KEY (cod_horario),
);

CREATE TABLE horarios_rutas (
    cod_horario VARCHAR(10) NOT NULL,
    cod_ruta VARCHAR(10) NOT NULL,
    FOREIGN KEY (cod_horario) REFERENCES horarios(cod_horario),
    FOREIGN KEY (cod_ruta) REFERENCES rutas(cod_ruta)
);

