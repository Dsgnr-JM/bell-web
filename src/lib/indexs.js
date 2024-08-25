/* Iconos disponibles para el Bell.js*/

import './bell.css';

const $icons = {
  promise: `<svg width="20px" height="20px" style="fill:currentColor !important" class="bell" viewBox="0 0 24 24" fill="currentColor" hexmlns="http://www.w3.org/2000/svg"><path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"/></svg>`,
  info: `<svg width="40" height="40" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"/></svg>`,
  error: `<svg width="40" height="40" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 42.667c117.803 0 213.333 95.53 213.333 213.333S373.803 469.333 256 469.333 42.667 373.803 42.667 256 138.197 42.667 256 42.667Zm48.917 134.25L256 225.835l-48.917-48.918-30.166 30.166L225.835 256l-48.918 48.917 30.166 30.166L256 286.165l48.917 48.918 30.166-30.166L286.165 256l48.918-48.917-30.166-30.166Z" fill="currentColor" fill-rule="evenodd"/></svg>`,
  warning: `<svg width="40" height="40" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M30.555 25.219 18.036 3.783a2.675 2.675 0 0 0-3.782 0L1.734 25.219a2.674 2.674 0 0 0 0 3.781h28.82a2.671 2.671 0 0 0 .001-3.781zM14.992 11.478a1.5 1.5 0 1 1 3 0v7a1.5 1.5 0 0 1-3 0v-7zm1.509 13.508a1.5 1.5 0 1 1-.001-2.999 1.5 1.5 0 0 1 .001 2.999z"/></svg>`,
  success: `<svg width="40" height="40" viewBox="0 0 1024 1024" fill="currentColor" class="icon" xmlns="http://www.w3.org/2000/svg"><path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>`,
};

/**
 * Estado del Bell mantiene la conconrdancia entre elementos desde tiempo y posicion.
 * @param {Number | Null} bellState.timeScreen
 * @param {String | Null} bellState.position
 * */
const bellState = {
  timeScreen: null,
  position: null,
  num: 0,
  withDescription: false,
  timeBetween: 0,
  maxHeight: 1000
};

class Bell {
  $bellContainer;
  $bellNums;
  $bellParent;
  timer;

  /**
   * Bell.js es un proyecto OpenSource creado por JotaDev, para crear de manera rapida alertas parecidas a Sonner en cualquier proyectos vanilla y sin necesidad de React.
   * @author JotaDev <https://jotade0.vercel.app>
   * @param {Object} text - Objeto con las propiedades title y description
   * @param {String} text.title - Titulo de la alerta
   * @param {String} text.description - Descripcion de la alerta
   * @typedef {'info' | 'warning' | 'success' | 'error'} TipoAlerta
   * @typedef {'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'top-center' | 'bottom-center'} TipoPosition
   * @typedef {'ease-in' | 'ease-in-out' | 'bound' | 'bound-2' } TipoAnimacion
   * @param {TipoAlerta} type - Se indica el tipo de alerta
   * @param {Object} options - Opciones adicionales para la alerta
   * @param {Boolean} options.animate - Animacion para la alerta
   * @param {Boolean} options.isColored - Coloreado de alertas
   * @param {Number} options.transitionDuration - Duracion de las transiciones
   * @param {TipoPosition} options.position - Posicion de la alerta
   * @param {TipoAnimacion} options.typeAnimation - Tipo de animacion
   * @param {Number} options.timeScreen - Tiempo en pantalla
   * @param {Boolean} options.expand - Efecto de Expansion
   * @param {|'colors','default'} options.theme - Tema de la alerta
   * @param {|'none','default' | 'full'} options.borderRadius - Border radius del contenedor de la alerta
   * @param {Boolean} options.timeline - Linea de tiempo
   * @returns {Bell} - Clase Bell
   */
  constructor(text, type, options) {
    this.text = text;
    this.type = type;
    this.animate = options?.animate ?? false;
    this.isColored = options?.isColored ?? false;
    this.transitionDuration = options?.transitionDuration ?? 300;
    this.position = bellState.position ?? options?.position ?? "bottom-right";
    this.typeAnimation = options?.typeAnimation ?? "fade-in";
    this.timeScreen = this.type == "promise" ? 100000 : bellState.timeScreen ?? options?.timeScreen ?? 3000;
    this.expand = options?.expand ?? false;
    this.theme = options?.theme !== "default" && options?.theme ? options?.theme : null
    this.borderRadius = options?.borderRadius !== "default" && options?.borderRadius ? options?.borderRadius : null
    this.customClass = options?.customClass !== "default" && options?.customClass ? options?.customClass : null
    this.timeline = options?.timeline ? "timeline" : ""
    if (!bellState.timeScreen) bellState.timeScreen = this.timeScreen;

    //if (!bellState.position) bellState.position = this.position;

    this.$bellContainer = document.createElement("li");
    const classContainer = ["b_c", this.position];
    this.$bellIcon = document.createElement("span");
    this.$bellTextContainer = document.createElement("div");
    this.$bellTitle = document.createElement("h3");
    const insertText = [];

    this.$bellTextContainer.classList.add("b_t-c");

    const classAdd = [this.isColored,this.type,this.theme,this.borderRadius,this.customClass, this.timeline]

    classAdd.forEach(classItem => classItem && classContainer.push(classItem))


    this.$bellContainer.classList.add(...classContainer);
    this.$bellContainer.classList.add(this.typeAnimation)

    this.$bellIcon.classList.add("b_i");
    this.$bellIcon.innerHTML = $icons[this.type];

    this.$bellTitle.classList.add("b_t");
    this.$bellTitle.textContent = this.text.title ?? "Text here";
    insertText.push(this.$bellTitle);

    //  || bellState.withDescription

    if (this.text.description) {
      bellState.withDescription = true
      const $bellDescription = document.createElement("p");
      $bellDescription.classList.add("b_d");
      $bellDescription.textContent = this.text.description ?? "Text here...";
      insertText.push($bellDescription);
    }

    this.$bellTextContainer.append(...insertText);
    this.$bellContainer.append(this.$bellIcon, this.$bellTextContainer);
    this.$bellContainer.setAttribute("bell-num", bellState.num++)

    if (!this.animate) {
      this.$bellContainer.style.transition = "none"
      this.$bellTextContainer.style.transition = "none"
    }else{
      this.$bellContainer.style.transition = `${this.transitionDuration}ms ease all ${bellState.timeBetween}ms`
    }

    this.$bellParent = document.querySelector(`.b_p.${this.position}`)


    if (!this.$bellParent) {
      this.$bellParent = document.createElement("ol")
      this.$bellParent.classList.add("b_p")
      document.body.append(this.$bellParent)
    }
    if (this.expand) {
      this.$bellParent.classList.add("expand")
    }
    this.$bellParent.classList.add(this.position)

    this.$bellParent.append(this.$bellContainer);
    bellState.timeBetween = Number((document.querySelectorAll(`.b_c.${this.position}`).length - 1).toString() + "0")
  }

  /**
   * @param {Promise} promise
   * @param {Array} states
   * */

  promise(promise, states) {
    this.$bellContainer.classList.remove(this.type)
    this.$bellContainer.classList.add("pending")
    const $title = document.createElement("h3")
    const $icon = document.createElement("span")
    $icon.classList.add("promise")
    $icon.innerHTML = $icons["promise"];
    this.$bellIcon.append($icon)
    $title.classList.add(["b_t_p"])
    this.$bellTextContainer.querySelector(".b_d")?.remove()
    this.$bellTextContainer.append($title)
    $title.textContent = states.pending
    this.launch(true)
    promise.then(() => {
      this.$bellIcon.innerHTML = $icons["success"]
      this.$bellContainer.classList.add("success")
      this.$bellContainer.classList.remove("pending")
      this.$bellContainer.classList.add("complete")
      this.$bellTitle.textContent = states.success
      if(this.timeline){
        this.#initTimeline()
      }
      this.timer = setTimeout(() => {
        this.removeOfScreen(this.$bellNums)
      }, this.timeScreen)
    }).catch((e) => {
      this.$bellIcon.innerHTML = $icons["error"]
      this.$bellContainer.classList.add("error")
      this.$bellContainer.classList.remove("pending")
      this.$bellContainer.classList.add("complete")
      this.$bellTitle.textContent = states.error  
      if(this.timeline){
        this.#initTimeline()
      }
      this.timer = setTimeout(() => {
        this.removeOfScreen(this.$bellNums)
      }, this.timeScreen)
    })
  }


  #initTimeline(){
    let widthTimeline = 350
    this.$bellContainer.classList.add("init_count")
    this.$bellContainer.style.setProperty("--t_an", this.timeScreen + "ms")
  }


  setPositions($bellNums, isRemove) {
    const $bellPrev = isRemove && this.$bellNums.length > 2 ? this.$bellNums[this.$bellNums.length - 3] :
      this.$bellNums[this.$bellNums.length - 1].previousElementSibling;
    if ($bellPrev?.className.includes("active"))
      $bellPrev.style.scale = ".94";
    let firstBell = $bellNums[$bellNums.length > 1 ? ($bellNums.length - 1) : 0]
    firstBell = firstBell ?? document.querySelector(`.b_c.${this.position}`)
    if (firstBell) firstBell.style.scale = "1"
    if (
      $bellPrev?.className.includes("top-left") ||
      $bellPrev?.className.includes("top-right") ||
      $bellPrev?.className.includes("top-center")
    ) {
      $bellPrev.style.top = "45px";
      firstBell.style.top = "30px"
    }
    else if ($bellPrev?.className.includes("b_c") && firstBell) {
      $bellPrev.className.includes("b_c");
      $bellPrev.style.bottom = "45px"; firstBell.style.bottom = "30px"
    }
    if (this.$bellNums.length > 2) {
      const $bellPrevPrev = $bellPrev?.previousElementSibling;
      if ($bellPrevPrev?.className.includes("b_c")) $bellPrevPrev.style.scale = ".88";
      if (
        ($bellPrev?.className.includes("top-right") ||
          $bellPrev?.className.includes("top-center") || 
          $bellPrev?.className.includes("top-left")) &&
        $bellPrevPrev?.className.includes("b_c")
      )
        $bellPrevPrev.style.top = "60px";
      if (
        ($bellPrev?.className.includes("bottom-left") || $bellPrev?.className.includes("bottom-center") ||
          $bellPrev?.className.includes("bottom-right")) &&
        $bellPrevPrev?.className.includes("b_c")
      )
        $bellPrevPrev.style.bottom = "60px";
    }
    let top = 30;
    const $bellNumsArray = [...$bellNums]
    if ($bellNums && $bellNums[$bellNums.length - 1]) bellState.maxHeight = $bellNums[$bellNums.length - 1].offsetHeight;
    $bellNumsArray.reverse().forEach(($bell, i) => {
      $bell.style.height = `${bellState.maxHeight}px`;
      top += i > 0 ? (Number($bellNumsArray[i - 1]?.getAttribute("bell-height")) + 15) : 0;
      $bell.style.setProperty("--top", `${top}px`);
      this.$bellParent.style.setProperty("--height-parent", `${top}px`)
    });
  }
  removeOnClick() {
    clearTimeout(this.timer)
    this.$bellNums = document.querySelectorAll(`.b_c.${this.position}`);
    const $bells = [...this.$bellNums].filter($bell => {
      return $bell.getAttribute("bell-num") !== this.$bellContainer.getAttribute("bell-num")
    })
    this.removeOfScreen($bells)

  }
  /**
   * Metodo que lanza el bellAlert y lo mues¨tra en pantalla
   */
  launch(isPromise) {
    this.$bellContainer.setAttribute("bell-height", this.$bellContainer.offsetHeight)
    setTimeout(() => {
      this.$bellContainer.addEventListener("click", this.removeOnClick.bind(this))
      this.$bellNums = document.querySelectorAll(`.b_c.${this.position}`);
      this.setPositions(this.$bellNums)
      this.$bellContainer.classList.add("active");
      if (!isPromise) {
        if(this.timeline){
          this.#initTimeline()
        }
        this.timer = setTimeout(() => {
          this.removeOfScreen(this.$bellNums);
        }, this.timeScreen);
      }
    }, 100)
  }

  /**
   * Metodo que remueve el bellAlert del DOM
   */
  removeOfScreen($bells) {
    /* Metodo que saca al bellAlert de la pantalla y remueve el elemento del DOM, ademas quita el hover */
    this.$bellContainer.classList.remove("active");
    $bells = Array.from($bells).filter($bell => $bell.className.includes("active"))
    this.setPositions($bells, $bells !== this.$bellNums)
    if (
      this.$bellContainer.className.includes("top-left") ||
      this.$bellContainer.className.includes("top-center") ||
      this.$bellContainer.className.includes("top-right")
    )
      this.$bellContainer.style.top = "-75px";
    if (
      this.$bellContainer.className.includes("bottom-left") ||
      this.$bellContainer.className.includes("bottom-center") ||
      this.$bellContainer.className.includes("bottom-right") 
    )
      this.$bellContainer.style.bottom = "-75px";

    setTimeout(() => {
      this.$bellContainer.remove();
      if (document.querySelectorAll(`.b_c.${this.position}`).length === 0) {
        this.$bellParent.remove();
        bellState.position = null
        bellState.timeScreen = null
        bellState.withDescription = false
        bellState.num = 0
      }
    }, this.transitionDuration + bellState.timeBetween);
  }
}
// Atento Primero se crea la instancia y luego se lanza

export default Bell
