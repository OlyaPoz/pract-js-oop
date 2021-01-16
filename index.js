'use strict';

/* Реализуйте класс Student (Студент), который будет наследовать от класса User.
 Этот класс должен иметь следующие свойства: name (имя, наследуется от User), 
 surname (фамилия, наследуется от User), year (год поступления в вуз). 
 Класс должен иметь метод getFullName() (наследуется от User), с помощью которого 
 можно вывести одновременно имя и фамилию студента. Также класс должен иметь 
 метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
 Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
 Текущий год получите самостоятельно.
 */

class User {
  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
  }
  
  set name(str) {
    if(typeof str !== 'string'){
      throw new TypeError('Not string')
    }
  }

  get name() {
    return this._name;
  }

  set surname(str) {
    if(typeof str !== 'string'){
      throw new TypeError('Not string')
    }
  }

  get surname() {
    return this._surname;
  }
  getFullName() {
    return `${this._name} ${this._surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this._year = year;
  }
  set year(v) {
    if(typeof v !== 'number'){
      throw new TypeError('Enter a number')
    }
  }

  get year() {
    return this._year;
  }

  getCourse() {
    return yearNow - this._year;
  }
}
const dateNow = new Date();
const yearNow = dateNow.getFullYear();
const test = new User('Test', 'Testov', 2017);
