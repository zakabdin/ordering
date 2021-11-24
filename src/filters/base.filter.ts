import { FilterQuery } from "mongoose";

export class BaseFilter<T> {
  private _filters: FilterQuery<T> = {};

  get filters(): FilterQuery<T> {
    return this._filters;
  }

  public buildFilters = (query: object): FilterQuery<T> => {
    for (const [key, value] of Object.entries(query)) {
      if (!value) continue;
      // @ts-ignore
      if (typeof this[key] === 'function') {
        // @ts-ignore
        this[key](value);
      }
    }

    return this._filters;
  }

}