export class Hero {
  username: string;
  num_unhappy_messages: number;
  num_happy_messages: number;
  num_neutral_messages: number;

  total_num_messages(): number {
    return this.num_unhappy_messages + this.num_happy_messages + this.num_neutral_messages;
  }

  unhappy_description_string(): string {
    return `has made ${this.num_unhappy_messages} angry chat messages\nThis is ${this.num_unhappy_messages / this.total_num_messages() * 100}% out of ${this.total_num_messages()} total chat messages`;
  }

  happy_description_string(): string {
    return `has made ${this.num_happy_messages} friendly chat messages\nThis is ${this.num_happy_messages / this.total_num_messages() * 100}% out of ${this.total_num_messages()} total chat messages`;
  }

  description_string(): string {
    return `Out of ${this.total_num_messages()}, ${this.num_unhappy_messages / this.total_num_messages() * 100}% are unhappy and ${this.num_unhappy_messages / this.total_num_messages() * 100}% are happy`;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/