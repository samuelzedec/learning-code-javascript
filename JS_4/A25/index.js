const dayjs = require("dayjs")

function birthday(date) {
  const birthday = dayjs(date)
  //Aqui estamos passando a data inserida pelo user para a função DayJs

  const today = dayjs()
  //Quando não passamos a data nos parâmetros, automaticamente o DayJs irá pegar a data atual

  const ageInYears = today.diff(birthday, 'year')
  //Aqui estamos pegando a diferença entras a idade com o metodo diff e pegando em anos

  const nextBirthday = birthday.add(ageInYears + 1, 'year')
  //Aqui pegamos a idade do user e somamos mais 1, para dizer que queremos o próximo aniversári e por último passamos o formato que queremos

  const days = nextBirthday.diff(today, 'day') + 1
  //Aqui estamos pegando quantos dias faltam pro próximo aniversário do user
  //Adicionamos mais 1 para ele pegar a data atual

  console.log(`idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD MMM YYYY')}`)
  console.log(`Dias para o próximo aniversário: ${days}`)
}

birthday("2005-01-20")