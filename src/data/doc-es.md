**Bell** es una libreria para crear alertas modernas y elegantes, la misma esta basada en la libreria Sonner pero compatible con entornos que se ejecutan con vanilla JavaScript, esta libreria es ligera en cuanto a peso, se ajusta a tu diseño, tiene un buen rendimiento y no necesita de instalar dependencias. Puedes encontrar mas infomacion sobre el proyecto y su desarrollo [aqui](https://github.com/Dsgnr-JM/bell). 

## Instalacion

Existen dos formas de usar BellJs, desde una CDN en Github o desde nuestro paquete de NPM. Si usas la CDN te recomendamos que descargues directamenete la libreria y la uses en local. BellJs ya es estable y puede ser usada en produccion sin ningun problema.

**Para usar con NPM(recomendado):**

```bash
npm i bell-alert
```

**Para usar con CDN desde JsDelivr:**

```html
<!-- Desarrollo -->
<link type="stylesheet" rel="https://cdn.jsdelivr.net/npm/bell-alert/dist/bell.js"/>

<!-- Produccion -->
<link type="stylesheet" rel="https://cdn.jsdelivr.net/npm/bell-alert/dist/bell.min.js"/>
```

```html
<!-- Desarrollo -->
<link type="stylesheet" rel="https://cdn.jsdelivr.net/npm/bell-alert/dist/bell.css"/>

<!-- Produccion -->
<link type="stylesheet" rel="https://cdn.jsdelivr.net/npm/bell-alert/dist/bell.min.css"/>
```

**Para usar con CDN desde UNPKG:**

```html
<!-- Desarrollo -->
<link type="stylesheet" rel="https://www.unpkg.com/bell-alert/dist/bell.js"/>

<!-- Produccion -->
<link type="stylesheet" rel="https://www.unpkg.com/bell-alert/dist/bell.min.js"/>
```

```html
<!-- Desarrollo -->
<link type="stylesheet" rel="https://www.unpkg.com/bell-alert/dist/bell.css"/>

<!-- Produccion -->
<link type="stylesheet" rel="https://www.unpkg.com/bell-alert/dist/bell.min.css"/>
```

Luego de esto el procedimiento para usar Bell son los mismos ya sea desde `CDN` o `NPM`.

## Primeros pasos

Estos son los primeros pasos para empezar a usar Bell. Esta libreria trabaja con instancias de clases, esto significa que debemos crear una y luengo lanzar la alerta. Primero que nada necesitamos vincular Bell.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba Bell</title>
    <link type="stylesheet" rel="https://cdn.jsdelivr.net/npm/bell-alert/dist/bell.min.css"/>
</head>
<body>
    <script src="https://cdn.jsdelivr.net/npm/bell-alert/dist/bell.min.js"></script>
</body>
</html>
```

> Si tu usas Bell desde una *CDN* deberas importar tambien el Css.

Lo siguiente sera crear una instancia Bell con los parametros necesarios para que funcione correctamente. El primer parametro es un objeto con el `title`: esta propiedad hace referencia a el titulo de la alerta y `description`: se refiere a la descripcion o el texto secundario, el segundo parametro se refiere al tipo de alerta entre los cuales tenemos (`info`,`check`,`error`,`warning`)  y finalmente un objeto con diferentes propiedades de configuracion.

```js
const options = [
    {
        title:"Hola",
        description:"mundindo"
    },
    "info",
    {
        animate: true,
        isColored:false,
        transitionDuration: 300,
        position: "bottom-right",
        typeAnimation: "fade-in",
        timeScreen: 10000,
        expand: true,
    }
]
const bell = new Bell(...options)
```

> Pasamos como parametros la constante `options` , esta es solo una forma de pasar parametros.

Si revisamos la pagina, no se estara mostrando nada sobre la alerta, para lanzarla solo necesitamos usar el metodo `launch` que se refiere a que la alerta se mostrara en pantalla.

```js
bell.launch()
```

Listo, ahora puedes usar Bell para crear tus alertas modernas y personalizables, de manera rapida y sin perdida de rendimiento.

> Ten en cuenta que la instancia de Bell es eliminada despues de que el `timescreen` llegue a su fin.

## Parametros

Estos son algunos de los parametros que acepta actualmente Bell con una descripcion y los valores que acepta. Si usas un LSP puedes tener autocomplete en el codigo.

|Nombre|Descripcion|Valores|
|---|---|---|
|`title`:|Señala el texto primario o titulo|`string`|
|`description`:|Señala el texto secundario o subtitulo|`string`|
|`type`:|Señala el tipo de alerta| info check error warning |
|`animate`?:|Señala si las animacion se activa(por defecto false)|`boolean`|
|`isColored`?:|Activa el coloreado de las alertas(por defecto false)|`boolean`|
|`position`:|Difiere la posicion en la que se muestra la alerta|`bottom-right` `bottom-left` `top-right` `top-left`|
|`typeAnimation`:|señala la forma en la que se anima la alerta|`fade-in`|
|`timescreen`?:|Difiere el tiempo en que la alerta se muestra en pantalla|`number`|
|`expand`?:|Señala si la alerta tiene la animacion de expand|`true`|

Muy pronto muchas mas opciones de configuracion, para que puedas personalizar al maximo Bell.