import { Client } from "../client/Client"
import { Collection } from "../Utils/Collection"

/**
 * @name BaseManager
 * @description The Base for Structure managers
 */
export class BaseManager {
    public client: Client
    public cache: Map<string, any>
    private holds: any

    constructor(client: Client, holds: any) {

        this.client = client
        this.cache = new Map()
        this.holds = holds

    }
    add(data: any, cache = true, { id = null, extras = [] } = {}) {
        const existing = this.cache.get(id || data.id);
        if (existing && existing._patch && cache) existing._patch(data);
        if (existing) return existing;

        const entry = this.holds ? new this.holds(this.client, data, ...extras) : data;
        if (cache) this.cache.set(id || entry.id, entry);
        return entry;
    }
}