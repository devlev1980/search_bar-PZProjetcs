import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
  } from '@microsoft/sp-webpart-base';

import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'SearchbargoodSpfxWebPartStrings';

/** Include Angular Elements JS and Style */
import 'searchbargood-wp/dist/searchbargoodWP/bundle';
require('../../../node_modules/searchbargood-wp/dist/searchbargoodWP/styles.css');

export interface ISearchbargoodSpfxWebPartProps {
  description: string;
}

export default class SearchbargoodSpfxWebPart extends BaseClientSideWebPart<ISearchbargoodSpfxWebPartProps> {
  constructor() {
    super();
  }
  public render(): void {
    this.domElement.innerHTML = `<app-searchbargood-spfx-web-part description="${ this.properties.description }"></app-searchbargood-spfx-web-part>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
