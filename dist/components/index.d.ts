import { QuartzComponent } from '@quartz-community/types';

declare const Contributors: QuartzComponent;

declare const _default: () => QuartzComponent;

interface ContributorProfile {
    displayName: string;
    avatar: string;
    catchphrase: string;
}
declare const contributors: Record<string, ContributorProfile>;

export { Contributors, _default as HeroImage, contributors };
