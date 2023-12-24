export default function setupControls() {
  const avatar = document.querySelector("#avatar") as HTMLImageElement;
  const borderColorInput = document.querySelector(
    "#border-color-input"
  ) as HTMLInputElement;
  const borderRadiusInput = document.querySelector(
    "#border-radius-input"
  ) as HTMLInputElement;
  const avatarSizeInput = document.querySelector(
    "#avatar-size-input"
  ) as HTMLInputElement;
  const defaultAvatars = document.querySelectorAll(
    "#default-avatars button"
  ) as NodeListOf<HTMLButtonElement>;
  const customAvatar = document.querySelector(
    "#custom-avatar-image"
  ) as HTMLInputElement;

  const handleBorderColorChange = () => {
    localStorage.setItem("borderColor", `${borderColorInput.value}`);
    avatar.style.borderColor = borderColorInput.value;
  };

  const handleBorderRadiusChange = () => {
    avatar.style.borderRadius = `${borderRadiusInput.value}%`;
  };

  const handleCustomAvatarChange = () => {
    removeActiveClass();
    const file = customAvatar.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      avatar.src = reader.result as string;
    };
    reader.readAsDataURL(file);
    customAvatar.classList.add("active");
  };

  const handleAvatarSizeChange = () => {
    localStorage.setItem("avatarSize", `${avatarSizeInput.value}`);
    setAvatarSize(avatarSizeInput.value);
  };

  const handleDefaultAvatarChange = (e: MouseEvent) => {
    removeCustomAvatar();
    removeActiveClass();
    const target = e.currentTarget as HTMLElement;
    avatar.src = target.dataset.defaultImage!;
    target.classList.add("active");
  };

  const setAvatarSize = (size: string) => {
    avatar.style.width = `${size}px`;
    avatar.style.height = `${size}px`;
  };

  const initAvatarSize = () => {
    const avatarSize = localStorage.getItem("avatarSize");
    if (avatarSize) {
      avatarSizeInput.value = avatarSize;
      setAvatarSize(avatarSize);
    }
  };

  const initBorderColor = () => {
    const borderColor = localStorage.getItem("borderColor");
    if (borderColor) {
      borderColorInput.value = borderColor;
      avatar.style.borderColor = borderColor;
    }
  };

  const removeActiveClass = () => {
    const prevActiveButton = document.querySelector(
      "#default-avatars button.active"
    ) as HTMLButtonElement;
    prevActiveButton?.classList.remove("active");
  };

  const removeCustomAvatar = () => {
    customAvatar.value = "";
    customAvatar.classList.remove("active");
  };

  borderColorInput.addEventListener("input", handleBorderColorChange);
  borderRadiusInput.addEventListener("input", handleBorderRadiusChange);
  customAvatar.addEventListener("change", handleCustomAvatarChange);
  avatarSizeInput.addEventListener("input", handleAvatarSizeChange);
  defaultAvatars.forEach((button) => {
    button.addEventListener("click", handleDefaultAvatarChange);
  });

  initAvatarSize();
  initBorderColor();
}
