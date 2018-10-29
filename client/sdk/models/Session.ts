/* tslint:disable */

declare var Object: any;
export interface SessionInterface {
  "room": string;
  "name": string;
  "description"?: string;
  "timeStart"?: Date;
  "timeEnd"?: Date;
  "tags"?: Array<any>;
  "id"?: number;
}

export class Session implements SessionInterface {
  "room": string;
  "name": string;
  "description": string;
  "timeStart": Date;
  "timeEnd": Date;
  "tags": Array<any>;
  "id": number;
  constructor(data?: SessionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Session`.
   */
  public static getModelName() {
    return "Session";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Session for dynamic purposes.
  **/
  public static factory(data: SessionInterface): Session{
    return new Session(data);
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
      name: 'Session',
      plural: 'Sessions',
      path: 'Sessions',
      idName: 'id',
      properties: {
        "room": {
          name: 'room',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "timeStart": {
          name: 'timeStart',
          type: 'Date'
        },
        "timeEnd": {
          name: 'timeEnd',
          type: 'Date'
        },
        "tags": {
          name: 'tags',
          type: 'Array&lt;any&gt;'
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
