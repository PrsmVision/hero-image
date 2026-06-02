import type { QuartzComponent, QuartzComponentProps } from "@quartz-community/types";

const HeroImage: QuartzComponent = (props: QuartzComponentProps) => {
  const hero = props.fileData?.frontmatter?.hero as string | undefined;
  if (!hero) return null;

  return (
    <div class="hero-image popover-hint">
      <img src={hero} alt={props.fileData?.frontmatter?.title ?? ""} />
    </div>
  );
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

export default HeroImage;
