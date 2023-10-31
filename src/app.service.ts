import { Injectable } from '@nestjs/common';
import { utc } from 'moment';

type TripDates = {
  tripStartDate: string; // YYYY-MM-DD
  tripEndDate: string; // YYYY-MM-DD
  duration: number; // In days
};

type GetTripDatesPossibilities = {
  vacation: Vacation;
  desiredTripDuration: DesiredTripDuration;
};

type Vacation = {
  vacationStartDate: string; // YYYY-MM-DD
  vacationEndDate: string; // YYYY-MM-DD
};

type DesiredTripDuration = {
  minDays: number;
  maxDays: number;
};

@Injectable()
export class AppService {
  private testInput: GetTripDatesPossibilities = {
    vacation: {
      vacationStartDate: '2024-06-01',
      vacationEndDate: '2024-06-30',
    },
    desiredTripDuration: {
      minDays: 5,
      maxDays: 10,
    },
  };

  getHello(): TripDates[] {
    const possibleTripDates: TripDates[] = [];
    const minDays = this.testInput.desiredTripDuration.minDays;
    const maxDays = this.testInput.desiredTripDuration.maxDays;
    const startTripDate = this.testInput.vacation.vacationStartDate;
    const endTripDate = this.testInput.vacation.vacationEndDate;

    for (let day: number = minDays; day <= maxDays; day++) {
      let hasEnded = false;
      let countDays = day;
      let incrementDays = 0;

      do {
        const startDate = this.dateSumDays(startTripDate, incrementDays);
        const endDate = this.dateSumDays(startTripDate, countDays);

        if (endDate <= endTripDate) {
          possibleTripDates.push({
            tripStartDate: startDate,
            tripEndDate: endDate,
            duration: day,
          });
          incrementDays++;
          countDays++;
        } else {
          hasEnded = true;
        }
      } while (!hasEnded);
    }

    return possibleTripDates;
  }

  private getTripDatesPossibilities({
    vacation,
    desiredTripDuration,
  }: GetTripDatesPossibilities): TripDates[] {
    const tripDates: TripDates[] = [];
    return tripDates;
  }

  private diffDays(departureDate: string, returnDate: string): number {
    return utc(returnDate, 'YYYY-MM-DD').diff(
      utc(departureDate, 'YYYY-MM-DD'),
      'd',
    );
  }

  private dateSumDays(date: string, days: number): string {
    return utc(date, 'YYYY-MM-DD').add(days, 'd').format('YYYY-MM-DD');
  }
}
