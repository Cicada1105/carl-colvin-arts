interface ISingletonConstructor<T extends ComponentPositioning> {
    new (componentCont: HTMLDialogElement): T;
}
interface ISingleton extends ComponentPositioning {
    update(): void;
}
declare abstract class ComponentPositioning {
    private static SingletonObject;
    constructor();
    static getInstance(): typeof ComponentPositioning.SingletonObject;
    static create<T extends ComponentPositioning>(this: ISingletonConstructor<T>, componentCont: HTMLDialogElement): void;
    abstract update(): void;
}
declare class HomeComponentPositioning extends ComponentPositioning implements ISingleton {
    private imgPostCont;
    constructor(componentCont: HTMLDialogElement);
    update(): void;
}
export { HomeComponentPositioning };
