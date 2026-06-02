import { QuartzComponent } from '@quartz-community/types';

declare const Contributors: QuartzComponent;

declare const HeroImage: QuartzComponent;

interface ContributorProfile {
    displayName: string;
    avatar: string;
    catchphrase: string;
}
declare const contributors: Record<string, ContributorProfile>;

export { Contributors, HeroImage, contributors };
