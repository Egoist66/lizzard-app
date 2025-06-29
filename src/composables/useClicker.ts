import { useTemplateRef } from "vue";

/**
 * Custom hook that manages a clicker effect on an image element.
 * 
 * This hook provides a reactive reference to an image element and a function to handle click events.
 * When the image is clicked, it calculates offsets and applies a tilt effect to the image.
 * Additionally, it displays a "+1" element at the click position, which disappears after a short duration.
 * 
 * @returns {Object} - An object containing:
 *   - img: A reactive reference to the image element.
 *   - incrementClickCount: A function to handle click events on the image.
 */

export const useClicker = () => {
  const img = useTemplateRef<HTMLImageElement>("img");

  const incrementClickCount = (event: any) => {
    const rect = event?.target?.getBoundingClientRect();

    const offfsetX = event.clientX - rect.left - rect.width / 2;
    const offfsetY = event.clientY - rect.top - rect.height / 2;

    const DEG = 40;

    const tiltX = (offfsetY / rect.height) * DEG;
    const tiltY = (offfsetX / rect.width) * -DEG;

    img?.value?.style.setProperty("--tiltX", `${tiltX}deg`);
    img?.value?.style.setProperty("--tiltY", `${tiltY}deg`);

    const timer = setTimeout(() => {
      img?.value?.style.setProperty("--tiltX", `0deg`);
      img?.value?.style.setProperty("--tiltY", `0deg`);

      clearTimeout(timer);
    }, 300);

    const plusOne = document.createElement("div");
    plusOne.classList.add("plus-one");
    plusOne.textContent = "+1";
    plusOne.style.left = `${event.clientX - rect.left}px`;
    plusOne.style.top = `${event.clientY - rect.top}px`;

    img?.value?.parentElement?.appendChild(plusOne);

    const timer2 = setTimeout(() => {
      plusOne.remove();
      clearTimeout(timer2);
    }, 2000);
  };


  return {
    img,
    incrementClickCount
  }
};
