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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.tutorial-content-blocks': BlogTutorialContentBlocks;
    }
  }
}
