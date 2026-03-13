/**
 * Template tags for enabling embedded formatting with Oxfmt
 */

export const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

export const css = (strings, ...values) => String.raw({ raw: strings }, ...values);

export const md = (strings, ...values) => String.raw({ raw: strings }, ...values);

export const markdown = (strings, ...values) => String.raw({ raw: strings }, ...values);

export const gql = (strings, ...values) => String.raw({ raw: strings }, ...values);

export const graphql = (strings, ...values) => String.raw({ raw: strings }, ...values);
