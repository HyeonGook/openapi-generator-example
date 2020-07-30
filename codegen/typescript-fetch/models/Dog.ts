/* tslint:disable */
/* eslint-disable */
/**
 * Test
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Dog
 */
export interface Dog {
    /**
     * 
     * @type {boolean}
     * @memberof Dog
     */
    barkLove?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Dog
     */
    breedLike?: DogBreedLikeEnum;
    /**
     * 
     * @type {string}
     * @memberof Dog
     */
    petType: string;
}

export function DogFromJSON(json: any): Dog {
    return DogFromJSONTyped(json, false);
}

export function DogFromJSONTyped(json: any, ignoreDiscriminator: boolean): Dog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'barkLove': !exists(json, 'barkLove') ? undefined : json['barkLove'],
        'breedLike': !exists(json, 'breed_like') ? undefined : json['breed_like'],
        'petType': json['pet_type'],
    };
}

export function DogToJSON(value?: Dog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'barkLove': value.barkLove,
        'breed_like': value.breedLike,
        'pet_type': value.petType,
    };
}

/**
* @export
* @enum {string}
*/
export enum DogBreedLikeEnum {
    Dingo = 'Dingo',
    Husky = 'Husky',
    Retriever = 'Retriever',
    Shepherd = 'Shepherd'
}


