// This is the model that every employee is based on
export class Employees {
  id!: number;
  lastName!: string;
  firstName!: string;
  street!: string;
  postcode!: string;
  city!: string;
  phone!: string;
  skillSet?: string[];
}
