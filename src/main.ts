import "./style.scss";
import setupBorderColor from "./borderColor.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Avatar designer</h1>
    <p>Upload your image or try one of the provided options:</p>

    <img class="avatar" width="138px" height="138px" src="https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=Precious" alt="Avatar" />
    
    <div class="buttons" id="default-avatars">
      <button class="button">Image 1</button>
      <button class="button">Image 2</button>
      <button class="button">Image 3</button>
    </div>

    <div class="option">
      <input class="option__file" type="file" id="avatar-image" name="avatar" accept="image/png, image/jpeg" />
    </div>

    <div class="option">
      <label class="option__label" for="border-radius">Adjust border radius:</label>
      <input class="option__range" type="range" id="border-radius" name="border-radius" min="0" max="50" value="0" />
    </div>

    <div class="option">
      <label class="option__label" for="border-color">Choose border color:</label>
      <input class="option__color" type="color" id="border-color-input" name="border-color" value="#e66465" />
    </div>
  </div>
`;

setupBorderColor();
