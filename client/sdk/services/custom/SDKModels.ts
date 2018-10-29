/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Conference } from '../../models/Conference';
import { Session } from '../../models/Session';
import { Speaker } from '../../models/Speaker';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Conference: Conference,
    Session: Session,
    Speaker: Speaker,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
