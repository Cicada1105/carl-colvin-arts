// Interfaces shared by all performances
interface PerformanceDataInterface<T> {
  page_intro:string;
  performances: T[];
}

export { PerformanceDataInterface }