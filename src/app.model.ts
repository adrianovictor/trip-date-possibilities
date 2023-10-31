export class Vocation {
  public StartDate: string;
  public EndDate: string;

  constructor(startDate: string, endDate: string) {
    this.StartDate = startDate;
    this.EndDate = endDate;
  }

  public static Create(startDate: string, endDate: string): Vocation {
    return new Vocation(startDate, endDate);
  }
}

export class DesiredTripDuration {
  public MinDays: number;
  public MaxDays: number;

  constructor(minDays: number, maxDays: number) {
    this.MinDays = minDays;
    this.MaxDays = maxDays;
  }

  public static Create(minDays: number, maxDays: number): DesiredTripDuration {
    return new DesiredTripDuration(minDays, maxDays);
  }
}
