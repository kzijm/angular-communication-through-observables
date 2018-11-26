export class ContactRequest {
    personalData: PersonalData;
    requestType: any = '';
    text: string = '';
  }

export class PersonalData {
  email: string = 'default';
  mobile: string = '';
  country: string = '';
}