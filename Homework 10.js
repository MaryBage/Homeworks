/* 1. Create an Author class and a Book class.*/

class Author {
	
	constructor(name, email, gender){
		this.name = name;
		this.email = email;
		this.gender = gender;
	}

	get name(){
		return this._name;
	}
	
	set name(v){
		this._name = v;
	}
	
	get email(){
		return this._email;
	}
	
	set email(v){
		this._email = v;
	}
	
	get gender(){
		return this._gender;
	}
	
	set gender(v){
		this._gender = v;
	}
	
	toString(){
		return `Name: ${this.name}\nEmail: ${this.email}\nGender: ${this.gender}`;
	}
	
}

class Book {
	
	constructor(title, author, price, quantity){
		this.title = title;
		this.author = author;
		this.price = price;
		this.quantity = quantity;
	}
	
	get title(){
		return this._title;
	}
	
	set title(v){
		this._title = v;
	}
	
	get author(){
		return this._author;
	}
	
	set author(v){
		if(v instanceof Author)
			this._author = v;
		else
			 console.log('Invalid Author');
	}
	
	get price(){
		return this._price;
	}
	
	set price(v){
		this._price = v;
	}
	
	get quantity(){
		return this._quantity;
	}
	
	set quantity(v){
		this._quantity = v;
	}
	
	getProfit() {
		return this.price*this.quantity;
	}
	
	toString(){
		return `Title: ${this.title}\nAuthor: ${this.author.name}\nPrice: ${this.price}\nQuantity: ${this.quantity}`;
	}
	
}

let author1 = new Author('Joe Dispenza', 'joe@dispenza.com', 'Male');

console.log(author1);

let author2 = {
		name : 'Carol Dweck',
		email: 'carol@dweck.com',
		gender: 'Female'
	}

console.log(author2);

console.log(author1.toString());

let book1 = new Book('Becoming supernatural', author1, 8000, 15);

console.log(book1);

let book2 = new Book('Growth mindset', author2, 7000, 25);

console.log(book1.getProfit());

console.log(book1.toString());


/* 2. Create an Account class. Account should have: id, name, balance.*/
class Account {
	
	constructor(id, name, balance){
		this.id = id;
		this.name = name;
		this.balance = balance;
	}
	
	getId(){
		return this.id;
	}
	get name(){
		return this._name;
	}
	get balance(){
		return this._balance;
	}
	set name(v){
		this._name = v;
	}
	set balance(v){
		this._balance = v;
	}
	
	credit(amount) {
		this.balance +=amount; 
		return this.balance;
	}
	
	debit(amount) {
		if(amount < this.balance){
			this.balance -=amount; 
			return this.balance;
		}
		else 
			console.log('Amount exceeded balance.')
	}
	
	transferTo(anotherAccount, amount){
		if(anotherAccount instanceof Account){
			if(amount < this.balance){
				this.balance -=amount; 
				anotherAccount.balance +=amount;
				return this.balance;
			}
			else 
				console.log('Amount exceeded balance.')
			 
		}
		else
			 console.log('Invalid Account for transfer');
		
	}
	
	static identifyAccounts(accountFirst, accountSecond){
		
		if(accountFirst instanceof Account && accountSecond instanceof Account){
			
			let identity = true;
			
			for (let k in accountFirst){
				
				if( accountFirst[k] != accountSecond[k]){
					identity = false;
					break;
				}
				
			}
			return identity;
	
		}
		else
			console.log('Invalid Accounts');
	}
	
	toString(){
		return `ID: ${this.id}\nName: ${this.name}\nBalance: ${this.balance}`;
	}
	
}

let acc1 = new Account(123456789, 'John Doe',  500000);

console.log(acc1);

let acc2 = new Account(123654789, 'Jane Doe',  500000);

console.log(acc2);

console.log(acc1.credit(150000));

console.log(acc2.debit(150000));

console.log(acc1.transferTo(acc2, 200000));

console.log(Account.identifyAccounts(acc1, acc2));

console.log(Account.identifyAccounts(acc1, acc1));

console.log(acc1.toString());



/* 3. Write classes: Person, Student, Staff.*/

class Person {
	
	constructor(firstName, lastName, gender, age){
		this.firstName = firstName; 
		this.lastName = lastName; 
		this.gender = gender; 
		this.age = age;
	}
	
	get firstName(){
		return this._firstName;
	}
	get lastName(){
		return this._lastName;
	}
	get gender(){
		return this._gender;
	}
	get age(){
		return this._age;
	}
	set firstName(v){
		this._firstName = v;
	}
	set lastName(v){
		this._lastName = v;
	}
	set gender(v){
		this._gender = v;
	}
	set age(v){
		this._age = v;
	}
	
	toString(){
		return `Name: ${this.firstName} ${this.lastName}\nGender: ${this.gender}\nAge: ${this.age}`;
	}
	
}
class Student extends Person{
	
	constructor(args, program, year, fee) {
		super(...args);
		this.program = [...program];
		this.year = year;
		this.fee = fee;
	}
	
	get program(){
		return this._program;
	}	
	get year(){
		return this._year;
	}	
	get fee(){
		return this._fee;
	}
	set program(v){
		this._program = [...v];
		this.data = this._program.reduce((o, key) => ({ ...o, [key]: 0}), {})
	}
	set year(v){
		this._year = v;
	}
	set fee(v){
		this._fee = v;
	}
	passExam(program, grade) {
		this.data[program] = grade;
		this.year += Object.values(this.data).every(el => el >= 50);
	}
	toString(){
		return `Name: ${this.firstName} ${this.lastName}\nGender: ${this.gender}\nAge:${this.age}\nPrograms: ${this.program}\nYear: ${this.year}\nFee: ${this.fee}`;
	}
	
}
class Teacher extends Person{
	
	constructor(args, program, pay) {
		super(...args);
		this.program = program;
		this.pay = pay;
	}
	get program(){
		return this._program;
	}	
	get pay(){
		return this._pay;
	}
	set program(v){
		this._program = v;
	}
	set pay(v){
		this._pay = v;
	}
	toString(){
		return `Name: ${this.firstName} ${this.lastName}\nGender: ${this.gender}\nAge: ${this.age}\nProgram: ${this.program}\nPay: ${this.pay}`;
	}
}


let student1 = new Student(['John', 'Doe', 'Male', '19'], ['Mathematics','Physics','Biology'], 2020, 450000);

let teacher1 = new Teacher(['Jane', 'Smith', 'Female', '27'], 'Biology', 250000 );

student1.passExam('Mathematics', 92);
student1.passExam('Physics', 68);
student1.passExam('Biology', 89);

console.log(student1);

console.log(student1.toString());

console.log(teacher1);

console.log(teacher1.toString());























