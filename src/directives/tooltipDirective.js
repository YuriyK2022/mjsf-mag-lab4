export default {
    beforeMount(el, binding) {
      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      tooltip.innerHTML = binding.value.content;
      el.appendChild(tooltip);
  
      // Стиль и поведение подсказки
      const style = `
        position: absolute;
        background-color: black;
        color: white;
        padding: 5px;
        border-radius: 5px;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
      `;
      tooltip.style.cssText = style;
  
      const showTooltip = () => {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
      };
  
      const hideTooltip = () => {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
      };
  
      if (binding.value.trigger.includes('hover')) {
        el.addEventListener('mouseover', showTooltip);
        el.addEventListener('mouseleave', hideTooltip);
      }
  
      if (binding.value.trigger.includes('click')) {
        el.addEventListener('click', showTooltip);
        document.addEventListener('click', (e) => {
          if (!el.contains(e.target)) hideTooltip();
        });
      }
  
      if (binding.value.trigger.includes('focus')) {
        el.addEventListener('focus', showTooltip);
        el.addEventListener('blur', hideTooltip);
      }
  
      if (binding.value.delay) {
        let timeout;
        const delayedShow = () => {
          timeout = setTimeout(showTooltip, binding.value.delay);
        };
        const delayedHide = () => clearTimeout(timeout);
        el.addEventListener('mouseover', delayedShow);
        el.addEventListener('mouseleave', delayedHide);
      }
  
      if (binding.value.html) {
        tooltip.innerHTML = binding.value.content;
      }
    }
  };
  