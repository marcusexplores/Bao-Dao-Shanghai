import type { ExternalLinkOption } from "./constants";

export type ExternalLinkOptionType = (typeof ExternalLinkOption)[keyof typeof ExternalLinkOption];