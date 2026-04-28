(function(){
      function initFooterAccordion() {
        var section = document.getElementById("custom-footer-section-sections--19911933493292__footer");
        if (!section) return;

        var buttons = section.querySelectorAll('.mobile-accordion-heading');

        // Add click listeners once
        buttons.forEach(function(btn){
          var ul = section.querySelector('#' + btn.getAttribute('aria-controls'));
          btn.addEventListener('click', function() {
            // Only toggle on mobile viewport
            if (window.innerWidth > 768) return;
            var expanded = btn.getAttribute('aria-expanded') === 'true';
            if (ul) {
              ul.style.display = expanded ? 'none' : 'block';
            }
            btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
            btn.parentElement.setAttribute('aria-expanded', expanded ? 'false' : 'true');
            // update icon text
            var icon = btn.querySelector('.accordion-icon');
            if (icon) icon.textContent = expanded ? '+' : '-';
          });
        });

        // Set initial mode and handle resize
        function setMode() {
          if (window.innerWidth > 768) {
            // Desktop: ensure lists visible, buttons not required
            buttons.forEach(function(btn){
              var ul = section.querySelector('#' + btn.getAttribute('aria-controls'));
              if (ul) ul.style.display = 'block';
              btn.setAttribute('aria-expanded', 'true');
              btn.parentElement.removeAttribute('aria-expanded');
              var icon = btn.querySelector('.accordion-icon');
              if (icon) icon.textContent = '+';
            });
          } else {
            // Mobile: collapse all by default
            buttons.forEach(function(btn){
              var ul = section.querySelector('#' + btn.getAttribute('aria-controls'));
              if (ul) ul.style.display = 'none';
              btn.setAttribute('aria-expanded', 'false');
              btn.parentElement.setAttribute('aria-expanded', 'false');
              var icon = btn.querySelector('.accordion-icon');
              if (icon) icon.textContent = '+';
            });
          }
        }

        setMode();
        window.addEventListener('resize', setMode);
      }

      document.addEventListener('DOMContentLoaded', initFooterAccordion);
    })();