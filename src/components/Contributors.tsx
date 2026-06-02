import type { QuartzComponent, QuartzComponentProps } from "@quartz-community/types";
import { contributors } from "./contributorProfiles";

const Contributors: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const raw = fileData?.frontmatter?.contributors;
  if (!raw) return null;

  const keys: string[] = Array.isArray(raw) ? raw : [raw];

  return (
    <div class="contributors popover-hint">
      {keys.map((key) => {
        const profile = contributors[key];
        if (!profile) return null;

        const count = allFiles.filter((f) => {
          const c = f.frontmatter?.contributors;
          if (!c) return false;
          return Array.isArray(c) ? c.includes(key) : c === key;
        }).length;

        return (
          <div class="contributor-card" key={key}>
            <img
              src={profile.avatar}
              alt={profile.displayName}
              class="contributor-avatar"
            />
            <div class="contributor-info">
              <div class="contributor-top">
                <span class="contributor-name">{profile.displayName}</span>
                <span class="contributor-count">
                  {count} {count === 1 ? "artigo" : "artigos"}
                </span>
              </div>
              <span class="contributor-catchphrase" title={profile.catchphrase}>
                "{profile.catchphrase}"
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
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

export default Contributors;
