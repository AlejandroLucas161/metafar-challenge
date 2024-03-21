# _LiveStockCheck_

Interfaz web para graficar cotizaciones en tiempo real, desarrollado con **React TS**, **Vite**, **TypeScript**

## Instalación Zip

Pueden descargar el repositorio en formato zip

- Ir a "Code" -> "Download Zip"

- Descomprimir el archivo

- En la carpeta donde se encuentra en "package.json" ejecutar en una terminal:

```
npm install
```

- Para abrir el proyecto de manera local en el browser:

```
npm run dev
```

## Instalación Git Clone

Otra manera de acceder al proyecto es clonarlo, ejecutando en la consola:

```
git clone https://github.com/AlejandroLucas161/metafar-challenge.git
```

Y ejecutar como en la manera anterior:

```
npm install
--------------
npm run dev
```

## Variables de Entorno

Crearse una cuenta en https://twelvedata.com/ para obtener la apikey (es gratuita con 800 request por día)

Crear un archivo _.env_ en la raíz del proyecto y agregar una key de la siguiente manera

```
VITE_TWELVEDATA_API_KEY=YOUR_API_KEY
```
