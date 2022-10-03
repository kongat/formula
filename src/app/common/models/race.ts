export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  date: string;
  Results: Result[];
  Circuit: Circuit[];
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface Location{
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface Result{
  number: string;
  position: string;
  positionText: string;
  points: string;
  grid: string;
  laps: string;
  status: string;
  Driver: Driver;
  Constructor: Constructor;
  Time: Time;
}

export interface Driver{
  driverId: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface Constructor{
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface Time{
  millis: string;
  time: string;
}

export interface Season{
  season: string;
  url: string;
}
