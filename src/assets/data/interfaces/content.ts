// src/assets/data/interfaces/content.ts
import { socialSvgComponents } from "../../../home/contact-section/socialSvgComponents";
// Interface pour le contenu "About"
export interface AboutCardIdentity {
    firstName: string;
    name: string;
    profession: string;
}

export interface AboutCardContent {
    description: string[];
}

export interface AboutContent {
    cardIdentity: AboutCardIdentity;
    cardContent: AboutCardContent;
}

// Interface pour le contenu "Slider"
export interface SliderContent {
    h2: string;
    h2bold: string;
    h2bold2?: string;
    h2bold3?: string;
    description: string;
    descriptionBold?: string;
    descriptionBoldEnd?: string;
    description2?: string;
    descriptionBold2?: string;
    ref: string;
    go: string;
    slideRef: number;
}
export interface SliderInfo {
    info: string;
}

export interface Slider {
    sliderContent: SliderContent;
    sliderInfo: SliderInfo;
}
// Interface pour le contenu "Service"
export interface ServiceContent {
    description: string;
}

export interface ServiceOption {
    id: string;
    label: string;
    value: string;
    condition: boolean;
}

export interface ServiceForm {
    id: string;
    question: string;
    name: string;
    options: ServiceOption[];
    state?: boolean | null;
    onOptionChange?: (value: boolean) => void;
}

// Type pour le contenus contact

export interface ContactContent {
    contactAnnouncement: ContactAnnouncement;
    contactDetail: ContactDetail;
    socialLink: SocialLink;
}

export interface ContactAnnouncement {
    message: string;
}

export interface ContactDetail {
    svg: string;
    text: string;
    link?: string;
    alt: string;
}

export interface SocialLink {
    svg: keyof typeof socialSvgComponents;
    link: string;
}

export type Content =
    | SliderContent
    | SliderInfo
    | AboutContent
    | ServiceContent
    | ContactAnnouncement
    | ContactDetail
    | SocialLink;
