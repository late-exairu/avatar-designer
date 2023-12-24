import "./style.scss";
import setupControls from "./controls.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Avatar designer</h1>
    <p>Upload your image or try one of the provided options:</p>

    <img id="avatar" class="avatar" width="138px" height="138px" src="https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=Precious" alt="Avatar" />
    
    <div class="buttons" id="default-avatars">
      <button data-default-image="https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=Precious" class="button active">Image 1</button>
      <button data-default-image="https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=Fluffy" class="button">Image 2</button>
      <button data-default-image="https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=Luna" class="button">Image 3</button>
    </div>

    <div class="option">
      <input class="option__file" type="file" id="custom-avatar-image" name="avatar" accept="image/*" />
    </div>

    <div class="option">
      <label class="option__label" for="border-radius">Adjust avatar size:</label>
      <input class="option__range" type="range" id="avatar-size-input" name="border-radius" min="100" max="300" value="138" />
    </div>

    <div class="option">
      <label class="option__label" for="border-radius">Adjust border radius:</label>
      <input class="option__range" type="range" id="border-radius-input" name="border-radius" min="0" max="50" value="25" />
    </div>

    <div class="option">
      <label class="option__label" for="border-color">Choose border color:</label>
      <input class="option__color" type="color" id="border-color-input" name="border-color" value="#e66465" />
    </div>
  </div>
`;

setupControls();
