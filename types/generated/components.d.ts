import type { Schema, Attribute } from '@strapi/strapi';

export interface TutorialTutorialContentBlocks extends Schema.Component {
  collectionName: 'components_tutorial_tutorial_content_blocks';
  info: {
    displayName: 'TutorialContentBlocks';
    icon: 'database';
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
      'tutorial.tutorial-content-blocks': TutorialTutorialContentBlocks;
    }
  }
}
