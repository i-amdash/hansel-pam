import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#3E2B4E',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: '/t-avt-1.png',
    fullDecal: '/t-avt-1.png',
});

export default state;