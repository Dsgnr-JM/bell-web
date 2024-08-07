Bell is a library to create modern and elegant alerts, it is based on the Sonner library but compatible in environments that run with vanilla JavaScript, this library is lightweight in terms of weight, fits your design, has a good performance and does not need dependecies. You can find more information about the project and its development [here](https://github.com/Dsgnr-JM/bell)

## Installation

There are two ways to use BellJs, from a CDN on Github or from our NPM package. If you use the CDN, we recommend that you download the library directly and use it locally. BellJs is now stable and can be used in production without any problem.

**Use with NPM(recommended):**

```bash
npm i bell-alert
```

**Using CDN of JsDelivr:**

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

**Using CDN of UNPKG:**

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

After this, the procedure to use Bell is the same whether from `CDN` or `NPM`:

## Getting started

These are the first steps to start. Bell works by class instances, this means we must create one in order to launch an alert. The first thing we need is to link our Bell files.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Bell</title>
    <link type="stylesheet" rel="https://cdn.jsdelivr.net/npm/bell-alert/dist/bell.min.css"/>
</head>
<body>
    <script src="https://cdn.jsdelivr.net/npm/bell-alert/dist/bell.min.js"></script>
</body>
</html>

```

> If you use Bell from the *CDN* you should also imort the CSS.

Now the next thing we must do is create a Bell instance with necessary parameters for its operation between which we have. The first parameter is an object with the `title`: properties refers to the title of the alert and `description`: refers to the description or secondary text, the second parameters refers to the alert type (`info`,`check`,`error`,`warning`) and finally an object with different configuration properties.

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

> We pass as parameters the `options` file, this is just a way to pass the parameters

If we review the page, nothing will be showing to launch the alert, you only need to use the `launch` method that refers to the alert being displayed.


```js

bell.launch()

```
Ready now you can use Bell to create your modern and personalized alerts, which work fast and without loss of performance

> You must keep in mind that Bell is destroyed after the execution time or `timescreen` of the same ends.

## Parameters

These are some of the parameters that Bell currently accepts with a description and the values it accepts. If you use an LSP you can have autocomplete in the code.

|Name|Description|Values|
|---|---|---|
|`title`:|Indicates the primary text or title|`string`|
|`description`:|Indicates the secondary text or subtitle|`string`|
|`type`:|Indicates the type of alert| info check error warning |
|`animate`?:|Signals whether the animation is activated (false by default)|`boolean`|
|`isColored`?:|Activates coloring of alerts (default false)|`boolean`|
|`position`:|Differs the position in which the alert is displayed|`bottom-right` `bottom-left` `top-right` `top-left`|
|`typeAnimation`:|indicates the way in which the alert is animated|`fade-in`|
|`timescreen`?:|Differs the time in which the alert is displayed on the screen|`number`|
|`expand`?:|Indicates if the alert has the animation of expand|`true`|

Many more configuration options are coming soon, so you can fully customize Bell.
