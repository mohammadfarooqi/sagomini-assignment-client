export class Bundle {
  _id: string;
  name: string;
  build_number: string;

  constructor(name?, build_number?) {
    this.name = name ? name : '';
    this.build_number = build_number ? build_number : '';
  }
}
