it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

/*
Рекомендуется создавать отдельные тесты на каждую проверку.
Если при выполнении блока it какой-нибудь из assert'ов выкинет ошибку, то последующие assert'ы проверены не будут
*/