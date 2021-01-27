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
    this.name = name;
    this.surname = surname;
  }
  
  set name(str) {
    if(typeof str !== 'string'){
      throw new TypeError('Not string')
    }
    this._name = str;
  }

  get name() {
    return this._name;
  }

  set surname(str) {
    if(typeof str !== 'string'){
      throw new TypeError('Not string');
    }
    this._surname = str;
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
    super(name, surname)
    this.year = year;
  }
  set year(v) {
    if(typeof v !== 'number'){
      throw new TypeError('Enter a number');
    }
    this._year = v;
  }

  get year() {
    return this._year;
  }

  getCourse() {
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    const studentCourse = yearNow - this._year + 1;
    if(studentCourse > 5){
      return `Студент уже не студент`;
    }
    if(studentCourse === 1) {
      return `Студент в этом году поступит на ${studentCourse} курс`;
    }
    return `Студент в этом году перейдет на ${studentCourse} курс`;
  }
}

const test = new Student('Test', 'Testov', 2021);
const vasya = new Student('Vasya', 'Vasin', 2018);
const olya = new Student('Olya', 'Pozdniakova', 2015);
