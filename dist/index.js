// src/components/contributorProfiles.ts
var contributors = {
  lyr: {
    displayName: "Lyreon",
    avatar: "/static/contributors/lyr.png",
    catchphrase: "A Historia de todas as Sociedades ate aqui \xE9 a de um lobby de CoD."
  },
  gman: {
    displayName: "G-Man",
    avatar: "/static/contributors/gman.png",
    catchphrase: "ImmSims ou nada. Mas como \xE9 nicho, acho que d\xE1 pra variar"
  }
};

// src/components/Contributors.tsx
import { jsx, jsxs } from "preact/jsx-runtime";
var Contributors = ({ fileData, allFiles }) => {
  const raw = fileData?.frontmatter?.contributors;
  if (!raw) return null;
  const keys = Array.isArray(raw) ? raw : [raw];
  return /* @__PURE__ */ jsx("div", { class: "contributors popover-hint", children: keys.map((key) => {
    const profile = contributors[key];
    if (!profile) return null;
    const count = allFiles.filter((f) => {
      const c = f.frontmatter?.contributors;
      if (!c) return false;
      return Array.isArray(c) ? c.includes(key) : c === key;
    }).length;
    return /* @__PURE__ */ jsxs("div", { class: "contributor-card", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: profile.avatar,
          alt: profile.displayName,
          class: "contributor-avatar"
        }
      ),
      /* @__PURE__ */ jsxs("div", { class: "contributor-info", children: [
        /* @__PURE__ */ jsxs("div", { class: "contributor-top", children: [
          /* @__PURE__ */ jsx("span", { class: "contributor-name", children: profile.displayName }),
          /* @__PURE__ */ jsxs("span", { class: "contributor-count", children: [
            count,
            " ",
            count === 1 ? "artigo" : "artigos"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("span", { class: "contributor-catchphrase", title: profile.catchphrase, children: [
          '"',
          profile.catchphrase,
          '"'
        ] })
      ] })
    ] }, key);
  }) });
};
Contributors.css = `
  .contributors {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.5rem 0;
  }

  .contributor-card {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background: var(--highlight);
    border-radius: 10px;
    padding: 0.4rem 0.8rem 0.4rem 0.4rem;
    max-width: 220px;
  }

  .contributor-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }

  .contributor-info {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    min-width: 0;
  }

  .contributor-top {
    display: flex;
    align-items: baseline;
    gap: 0.4rem;
  }

  .contributor-name {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--dark);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .contributor-count {
    font-size: 0.7rem;
    color: var(--gray);
    white-space: nowrap;
  }

  .contributor-catchphrase {
    font-size: 0.72rem;
    color: var(--darkgray);
    font-style: italic;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    cursor: help;
  }
`;
var Contributors_default = Contributors;

// src/components/HeroImage.tsx
import { jsx as jsx2 } from "preact/jsx-runtime";
var HeroImage = (props) => {
  const hero = props.fileData?.frontmatter?.hero;
  if (!hero) return null;
  return /* @__PURE__ */ jsx2("div", { class: "hero-image popover-hint", children: /* @__PURE__ */ jsx2("img", { src: hero, alt: props.fileData?.frontmatter?.title ?? "" }) });
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
  Contributors_default as Contributors,
  HeroImage_default as HeroImage,
  contributors
};
//# sourceMappingURL=index.js.map