import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogTutorialContentBlocks extends Schema.Component {
  collectionName: 'components_tutorial_tutorial_content_blocks';
  info: {
    displayName: 'Blog Content Block';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface LegalsLegals extends Schema.Component {
  collectionName: 'components_legals_legals';
  info: {
    displayName: 'Legals';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SeoSeoBlock extends Schema.Component {
  collectionName: 'components_seo_seo_blocks';
  info: {
    displayName: 'Seo Block';
    icon: 'earth';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.tutorial-content-blocks': BlogTutorialContentBlocks;
      'legals.legals': LegalsLegals;
      'seo.seo-block': SeoSeoBlock;
    }
  }
}
