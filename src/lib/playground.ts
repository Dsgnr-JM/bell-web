import Bell from "./";
 import { getLangFromUrl } from "../i18n/utils";
 import copyToClipBoard from "./copyToClipboard";
  const $title = document.getElementById("title") as HTMLInputElement
  const $description = document.getElementById("description") as HTMLInputElement
  const $type = document.getElementById("type") as HTMLSelectElement
  const $animate = document.getElementById("animate") as HTMLSelectElement
  const $isColored = document.getElementById("isColored") as HTMLSelectElement
  const $transitionDuration = document.getElementById("transitionDuration") as HTMLInputElement
  const $position = document.getElementById("position") as HTMLSelectElement
  const $typeAnimation = document.getElementById("typeAnimation") as HTMLSelectElement
  const $timeScreen = document.getElementById("timeScreen") as HTMLInputElement
  const $expand = document.getElementById("expand") as HTMLSelectElement
  document.querySelector("#launch").addEventListener("click", () => {
    let options = [
      {
        title: Boolean($title.value) ? $title.value : null,
        description: Boolean($description.value) ? $description.value : null
      },
      $type.value,
      {
        animate: Boolean(Number($animate.value)),
        isColored: Boolean(Number($isColored.value)),
        transitionDuration: Number($transitionDuration.value) > 300 ? Number($transitionDuration.value) : null,
        position: $position.value,
        typeAnimation: $typeAnimation.value,
        timeScreen: Number($timeScreen.value) >= 3000 ? Number($timeScreen.value) : null,
        expand: Boolean(Number($expand.value)),
      }
    ];
    new Bell(...options).launch()
  });
  document.querySelector("#copy").addEventListener("click",async () => {
    let options = JSON.stringify([
      {
        title: Boolean($title.value) ? $title.value : null,
        description: Boolean($description.value) ? $description.value : null
      },
      $type.value,
      {
        animate: Boolean(Number($animate.value)),
        isColored: Boolean(Number($isColored.value)),
        transitionDuration: Number($transitionDuration.value) > 300 ? Number($transitionDuration.value) : null,
        position: $position.value,
        typeAnimation: $typeAnimation.value,
        timeScreen: Number($timeScreen.value) >= 3000 ? Number($timeScreen.value) : null,
        expand: Boolean(Number($expand.value)),
      }
    ]);
    const textBellContructor = `const options = ${options};\nconst bell = new Bell(...options).launch();`
    const res = await copyToClipBoard(textBellContructor);
    const [_,lang] = window.location.pathname.split('/')
    if(res === "success"){
      new Bell({title: lang == "es" ? "Correcto" : "Success", description: lang == "es" ? "Texto copiado correctamente" : "Text copied correctly"},"check",{
        timeScreen: 5000,
        animate: true,
        expand: true
      }).launch()
    }else{
      new Bell({title: "Error", description: lang == "es" ? "El texto no se pudo copiar" : "The text could not be copied"},"error",{
        timeScreen: 5000,
        animate: true,
        expand: true
      }).launch()
    }
  })
