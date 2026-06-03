// src/components/HeroImage.tsx
import { jsx } from "preact/jsx-runtime";
var HeroImage = (props) => {
  if (!props?.fileData) return null;
  const hero = props.fileData?.frontmatter?.hero;
  if (!hero) return null;
  return /* @__PURE__ */ jsx("div", { class: "hero-image popover-hint", children: /* @__PURE__ */ jsx("img", { src: hero, alt: props.fileData?.frontmatter?.title ?? "" }) });
};
HeroImage.css = `
  .hero-image {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 8px;
    overflow: hidden;
  }
  .hero-image img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;
var HeroImage_default = (() => HeroImage);
export {
  HeroImage_default as HeroImage
};
//# sourceMappingURL=index.js.map