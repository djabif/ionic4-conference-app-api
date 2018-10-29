/* tslint:disable */

declare var Object: any;
export interface ConferenceInterface {
  "name": string;
  "location": string;
  "startDate"?: Date;
  "endDate"?: Date;
  "id"?: number;
}

export class Conference implements ConferenceInterface {
  "name": string;
  "location": string;
  "startDate": Date;
  "endDate": Date;
  "id": number;
  constructor(data?: ConferenceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Conference`.
   */
  public static getModelName() {
    return "Conference";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Conference for dynamic purposes.
  **/
  public static factory(data: ConferenceInterface): Conference{
    return new Conference(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Conference',
      plural: 'Conferences',
      path: 'Conferences',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "location": {
          name: 'location',
          type: 'string'
        },
        "startDate": {
          name: 'startDate',
          type: 'Date'
        },
        "endDate": {
          name: 'endDate',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
