function pow(x,n)    // фигурная скобка перенесена на новую строку, отсутствует пробел между аргументами
{
  let result=1;     // отсутствуют пробелы возле оператора "="
  for(let i=0;i<n;i++) {result*=x;}    // фигурные скобки не нужны, либо необходимо перенести выражение внутри скобок на новую строку
                                       // отсутствуют пробелы возле знаков
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')    // отсутствуют пробелы возле знаков и между аргументами
if (n<=0)    // отсутствуют пробелы возле знаков
{            // скобка перенесена на новую строку
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else    // рекомендуется придерживаться записи "} else {"
{
  alert(pow(x,n))    // отсутствует точка с запятой и пробелы между аргументами
}