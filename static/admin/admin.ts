import CMS from '@staticcms/core';
import '@staticcms/core/dist/main.css';

CMS.init(); 
/** Evemtlistener that reacts on the preSave event in order to reset the weights to the current order in the list
 The Hugo Navigation gets sorted through the weight field by default. There is no way to have it sorted by the order in the yaml config.

 @see https://gohugo.io/methods/menu/ and https://www.staticcms.org/docs/beta-features#pre-save
 **/
/** 
 CMS.registerEventListener({
    name: 'preSave',
    collection: 'config',
    file: 'config/_default/menus.yaml',
    handler: ({ data: { entry } }: { data: { entry: any } }) => {
      let n: number = 1;
      let currentValue: any[] = [...entry.data.main];
      currentValue.forEach((mainItem: any) => {
        mainItem.weight = n++;
      });
      return {
        ...entry.data,
        main: currentValue, 
      };
    },
  }); **/