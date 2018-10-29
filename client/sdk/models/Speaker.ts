/* tslint:disable */

declare var Object: any;
export interface SpeakerInterface {
  "name": string;
  "avatar"?: string;
  "email"?: string;
  "phone"?: number;
  "twitter"?: string;
  "id"?: number;
}

export class Speaker implements SpeakerInterface {
  "name": string;
  "avatar": string;
  "email": string;
  "phone": number;
  "twitter": string;
  "id": number;
  constructor(data?: SpeakerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Speaker`.
   */
  public static getModelName() {
    return "Speaker";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Speaker for dynamic purposes.
  **/
  public static factory(data: SpeakerInterface): Speaker{
    return new Speaker(data);
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
      name: 'Speaker',
      plural: 'Speakers',
      path: 'Speakers',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "avatar": {
          name: 'avatar',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "phone": {
          name: 'phone',
          type: 'number'
        },
        "twitter": {
          name: 'twitter',
          type: 'string'
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
