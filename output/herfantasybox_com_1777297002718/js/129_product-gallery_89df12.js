document.addEventListener("DOMContentLoaded", () => {
  const productGalleries = document.querySelectorAll(".product__gallery");

  function updateHeight(instance) {
    const slider = instance.container,
      index = instance.track.details.rel,
      height = instance.slides[index].scrollHeight;
    slider.style.height = height + "px"
  }

  function ThumbnailPlugin(main) {
    return slider => {
      function removeActive() {
        slider.slides.forEach(slide => {
          slide.classList.remove("active")
        })
      }

      function addActive(idx) {
        slider.slides[idx].classList.add("active")
      }

      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            main.moveToIdx(idx)
          })
        })
      }
      slider.on("created", () => {
        addActive(slider.track.details.rel), addClickEvents(), main.on("animationStarted", main2 => {
          removeActive();
          const next = main2.animator.targetIdx || 0;
          addActive(main2.track.absToRel(next)), slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
      })
    }
  }

  function navigation(slider) {
    let wrapper, dots, arrowLeft, arrowRight;

    function markup(remove) {
      wrapperMarkup(remove), dotMarkup(remove), arrowMarkup(remove)
    }

    function removeElement(elment) {
      elment.parentNode.removeChild(elment)
    }

    function createDiv(className) {
      var div = document.createElement("div"),
        classNames = className.split(" ");
      return classNames.forEach(name => div.classList.add(name)), div
    }

    function arrowMarkup(remove) {
      if (remove) {
        removeElement(arrowLeft), removeElement(arrowRight);
        return
      }
      arrowLeft = createDiv("arrow arrow--left"), arrowLeft.addEventListener("click", () => slider.prev()), arrowRight = createDiv("arrow arrow--right"), arrowRight.addEventListener("click", () => slider.next()), arrowRight.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>', arrowLeft.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" /></svg>', wrapper.appendChild(arrowLeft), wrapper.appendChild(arrowRight)
    }

    function wrapperMarkup(remove) {
      if (remove) {
        for (var parent = wrapper.parentNode; wrapper.firstChild;) parent.insertBefore(wrapper.firstChild, wrapper);
        removeElement(wrapper);
        return
      }
      wrapper = createDiv("navigation-wrapper"), slider.container.parentNode.appendChild(wrapper), wrapper.appendChild(slider.container)
    }

    function dotMarkup(remove) {
      if (remove) {
        removeElement(dots);
        return
      }
      dots = createDiv("dots"), slider.track.details.slides.forEach((_e, idx) => {
        var dot = createDiv("dot");
        dot.addEventListener("click", () => slider.moveToIdx(idx)), dots.appendChild(dot)
      }), wrapper.appendChild(dots)
    }

    function updateClasses() {
      var slide = slider.track.details.rel;
      slide === 0 ? arrowLeft.classList.add("arrow--disabled") : arrowLeft.classList.remove("arrow--disabled"), slide === slider.track.details.slides.length - 1 ? arrowRight.classList.add("arrow--disabled") : arrowRight.classList.remove("arrow--disabled"), Array.from(dots.children).forEach(function(dot, idx) {
        idx === slide ? dot.classList.add("dot--active") : dot.classList.remove("dot--active")
      }), slider.slides[slide + 1] && window.getComputedStyle(slider.slides[slide + 1]).display === "none" ? arrowRight.classList.add("arrow--disabled") : arrowRight.classList.remove("arrow--disabled")
    }
    slider.on("created", () => {
      markup(), updateClasses()
    }), slider.on("optionsChanged", () => {
      console.log(2), markup(!0), markup(), updateClasses()
    }), slider.on("slideChanged", () => {
      updateClasses()
    }), slider.on("destroyed", () => {
      markup(!0)
    })
  }
  productGalleries.forEach(productGallery => {
    const mainSliderElement = productGallery.querySelector(".gallery__main-images"),
      thumbnailsElement = productGallery.querySelector(".gallery__thumbnails");
    if (!(!mainSliderElement || !thumbnailsElement)) var mainSlider = new KeenSlider(mainSliderElement, {
        slides: {
          perView: 1,
          spacing: 16
        },
        created: instance => {
          productGallery.classList.remove("not-initialized"), setTimeout(() => {
            updateHeight(instance)
          }), window.addEventListener("resize", () => {
            setTimeout(() => {
              updateHeight(instance)
            })
          }, !0)
        },
        slideChanged: instance => {
          updateHeight(instance)
        },
        updated: instance => updateHeight(instance)
      }, [navigation]),
      thumbnails = new KeenSlider(thumbnailsElement, {
        initial: 0,
        slides: {
          perView: 4,
          spacing: 10
        },
        created: instance => {
          setTimeout(() => {
            productGallery.classList.remove("not-initialized")
          })
        }
      }, [ThumbnailPlugin(mainSlider)])
  })
});
//# sourceMappingURL=/cdn/shop/t/260/assets/product-gallery.js.map?v=172504723718609416491776951100