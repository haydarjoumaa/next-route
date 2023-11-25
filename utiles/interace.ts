export interface eventDataInterface {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export interface EventFilterFctInterface {
  filterHandler: (year: string, month: string) => void;
}
