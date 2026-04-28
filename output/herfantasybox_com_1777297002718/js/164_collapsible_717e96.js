class CollapsibleElement extends HTMLElement {
  connectedCallback() {
    const title = this.querySelector(".collapsible__title"),
      content = this.querySelector(".collapsible__content"),
      setHeightToAuto = () => {
        content.style.height !== "0px" && title.getAttribute("active") === "true" && (content.style.height = "auto")
      },
      updateHeightForClose = () => {
        const currentHeight = content.scrollHeight + "px";
        content.style.height = currentHeight, content.offsetHeight, content.style.height = "0px"
      },
      updateHeight = () => {
        if (title.getAttribute("active") === "true") {
          const prevHeight = content.style.height;
          content.style.height = "auto";
          const newScrollHeight = `${content.scrollHeight}px`;
          content.style.height = prevHeight, requestAnimationFrame(() => {
            content.style.height = newScrollHeight, content.addEventListener("transitionend", setHeightToAuto, {
              once: !0
            })
          })
        } else updateHeightForClose()
      };
    title && title.getAttribute("active") === "true" ? updateHeight() : title?.setAttribute("active", "false"), title?.addEventListener("click", function() {
      const isActive = title.getAttribute("active") === "true";
      title.setAttribute("active", String(!isActive)), content.setAttribute("active", String(!isActive)), isActive ? title.classList.contains("read-more-link") && (title.innerHTML = title.dataset.readMore) : title.classList.contains("read-more-link") && (title.innerHTML = title.dataset.readLess), updateHeight()
    }), window.addEventListener("resize", () => {
      title.getAttribute("active") === "true" && (content.style.height = "auto", requestAnimationFrame(() => {
        const newScrollHeight = `${content.scrollHeight}px`;
        content.style.height = newScrollHeight
      }))
    })
  }
}
customElements.define("collapsible-element", CollapsibleElement);
//# sourceMappingURL=/cdn/shop/t/260/assets/collapsible.js.map?v=125821192424684826741749762315