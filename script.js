let = str = document.getElementsByTagName('start'),
      budget = document.getElementsByClassName('budget-value'),
      daybudget = document.getElementsByClassName('daybudget-value')[0],
      level = document.getElementsByClassName('level-value')[0],
      expenses = document.getElementsByClassName('expenses-value')[0],
      optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
      income = document.getElementsByClassName('income-value')[0],
      monthsavings = document.getElementsByClassName('monthsavings')[0],
      yearsavings = document.getElementsByClassName('yearsavings-value')[0],


      expensesi = document.getElementsByClassName('expenses-item'),
      btnexp = document.getElementsByTagName('expenses-item-btn')[0],
      btnopexp = document.getElementsByTagName('optionalexpenses-btn')[1],
      conbdg = document.getElementsByTagName('count-budget-btn')[2],
      optionalexpensesi = document.querySelectorAll('.optionalexpenses-item'),
      chooseincomeladel = document.querySelector('.choose-income-ladel'),
      checkSavings = document.querySelector('#savings'),
      sum = document.querySelector('.choose-sum'),
      percent = document.querySelector('.choose-percent'),
      year = document.querySelector('.year-value'),
      month = document.querySelector('.month-value'),
      day = document.querySelector('.day-value');


let money,time;
function start() {
    money = +prompt("Ваш бюджет на месяц?",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?",'');
}
}
start();


let appData = {
  budget:money,
  timeData:time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i=0; i<2; i++) {
      let = a = prompt("Введите обязательную статью разходов в этом месяце",''),
            b = prompt("Во сколько обойдется?",'');
    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
        a != '' && b != '' && a.length <50 ) {
        console.log ("done");
        appData.expenses[a]=b;
    } else {
      i = i - 1;
     }
   }
  },
  detectDayBudget: function(){
    appData.moneyPerDay=(appData.budget/30).toFixed();
    alert("Ежедневный бюджет: "+ appData.moneyPerDay);
  },
  detectLevel: function(){
    if(appData.moneyPerDay<100) {
      console.log("Mинимальный уровень достатка");
    } else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
      console.log ("Средний уровень достатка");
    }else if (appData.moneyPerDay>2000){
      console.log ("Высокий уровень достатка");
    }else {
      console.log("Произошла ошибка");
    }
  },
  checkSaving: function(){
    if (appData.savings == true) {
      let save = +prompt("Какова ваша сумма накоплений?");
          percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function(){
    for(let i=0; i<3; i++){
      let opt = prompt("Статья необязательных расходов?","");
       appData.optionalExpenses[i]=opt;
    }
  },
  chooseIncome: function(){
    for (let i=0; i<1; i++) {
     let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)",'');
      if (typeof(items) != 'string' || items == '' || typeof(items) == null){
        console.log("Произошла ошибочка");
      } else {
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
      }
    }
      appData.income.forEach(function(itemmassive, i) {
        alert("Cпособы дополнительного зароботка: " + (i+1) + "-" + itemmassive);
      });
    }
  };
  
  for (let key in appData){
    console.log("Наша программа включает себя: " + key + "-" + appData[key]);
  }
