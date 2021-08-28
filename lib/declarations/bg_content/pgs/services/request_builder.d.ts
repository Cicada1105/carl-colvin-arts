declare abstract class RequestBuilderBase<T> {
    abstract URL(path: string): RequestBuilderBase<T>;
    abstract Method(method: string): RequestBuilderBase<T>;
    abstract makeRequest(): Promise<T>;
}
export default class RequestBuilder<T> extends RequestBuilderBase<T> {
    private _request;
    private _BASE_URL;
    constructor();
    URL(path: string): RequestBuilderBase<T>;
    Method(method: string): RequestBuilderBase<T>;
    makeRequest(): Promise<T>;
}
export {};
