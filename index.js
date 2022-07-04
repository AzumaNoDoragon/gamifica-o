
// PARA RODAR O CODIGO UTILIZE 'npm start' NO TERMINAL

const inquirer = require('inquirer')
const chalk = require('chalk')
var you, enemy, damage
console.log(chalk.bgWhite.black('Para jogar utilize as setas e enter!'))
operation()

function operation() {
    you = 100
    enemy = 100
    damage = 25
    inquirer
        .prompt([{
            type: 'list',
            name: 'pergunta1',
            message: 'Qual o prefixo para imprimir uma variavel em C?',
            choices: [
                'a) printf',
                'b) System.out.println',
                'c) print',
                'd) Console.WriteLine',
            ],
        },
        ])
        .then((answer) => {
            const pergunta1 = answer['pergunta1']

            if (pergunta1 === 'a) printf') {
                enemy -= damage
                console.log(chalk.bgBlue.black('Você acertou!'))
                console.log(`Sua vida é ${you} e a vida do oponente é ${enemy}`)
            } else {
                you -= damage
                console.log(chalk.bgRed.black('Você errou, a resposta correta era "a) printf"'))
                console.log(`Sua vida é ${you} e a vida do oponente é ${enemy}`)
            }
            operation2()
        })
        .catch((err) => console.log(err))
}

function operation2() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'pergunta2',
            message: 'Para que serve a estrutura if?',
            choices: [
                'a) Verificar uma string',
                'b) Executar um comando, caso sua condição seja satisfeita',
                'c) Valor alocado e acessível em um endereço de memoria',
                'd) Alocar uma variável',
            ],
        },
        ])
        .then((answer) => {
            const pergunta2 = answer['pergunta2']

            if (pergunta2 === 'b) Executar um comando, caso sua condição seja satisfeita') {
                enemy -= damage
                console.log(chalk.bgBlue.black('Você acertou!'))
                console.log(`Sua vida é ${you} e a vida do oponente é ${enemy}`)
            } else {
                you -= damage
                console.log(chalk.bgRed.black('Você errou, a resposta correta era "b) Executar um comando, caso sua condição seja satisfeita"'))
                console.log(`Sua vida é ${you} e a vida do oponente é ${enemy}`)
            }
            operation3()
        })
        .catch((err) => console.log(err))
}

function operation3() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'pergunta3',
            message: 'Quais os operadores relacionais de C?',
            choices: [
                'a) sizeof()',
                'b) &&, ||, !',
                'c) ==, !=, >, <, >=, <=',
                'd) TRUE, FALSE',
            ],
        },
        ])
        .then((answer) => {
            const operation3 = answer['pergunta3']

            if (operation3 === 'c) ==, !=, >, <, >=, <=') {
                enemy -= damage
                console.log(chalk.bgBlue.black('Você acertou!'))
                console.log(`Sua vida é ${you} e a vida do oponente é ${enemy}`)
            } else {
                you -= damage
                console.log(chalk.bgRed.black('Você errou, a resposta correta era "b) Executar um comando, caso sua condição seja satisfeita"'))
                console.log(`Sua vida é ${you} e a vida do oponente é ${enemy}`)
            }
            operation4()
        })
        .catch((err) => console.log(err))
}

function operation4() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'pergunta4',
            message: 'Linha de comando para se adicionar uma biblioteca em C?',
            choices: [
                'a) #include',
                'b) require',
                'c) init',
                'd) add',
            ],
        },
        ])
        .then((answer) => {
            const pergunta4 = answer['pergunta4']

            if (pergunta4 === 'a) #include') {
                enemy -= damage
                console.log(chalk.bgBlue.black('Você acertou!'))
                console.log(`Sua vida é ${you} e a vida do oponente é ${enemy}`)
            } else {
                you -= damage
                console.log(chalk.bgRed.black('Você errou, a resposta correta era "b) Executar um comando, caso sua condição seja satisfeita"'))
                console.log(`Sua vida é ${you} e a vida do oponente é ${enemy}`)
            }
            end()
        })
        .catch((err) => console.log(err))
}

function end() {
    if (enemy < you) {
        console.log(chalk.bgGreen.black("\nParabéns, você ganhou!"))
        inquirer
            .prompt([{
                type: 'list',
                name: 'end1',
                message: 'Você deseja jogar novamente?',
                choices: [
                    'Sim',
                    'Não',
                ],
            },
            ])
            .then((answer) => {
                const end1 = answer['end1']

                if (end1 === 'Sim') {
                    operation()
                } else {
                    console.log(chalk.bgBlue.black('Obrigado por jogar!'))
                    process.exit()
                }
            })
            .catch((err) => console.log(err))
    } else if (you < enemy) {
        console.log(chalk.bgRed.black("\nVocê perdeu, é uma pena, tente de novo!"))
        inquirer
            .prompt([{
                type: 'list',
                name: 'end2',
                message: 'Você deseja jogar novamente?',
                choices: [
                    'Sim',
                    'Não',
                ],
            },
            ])
            .then((answer) => {
                const end2 = answer['end2']

                if (end2 === 'Sim') {
                    operation()
                } else {
                    console.log(chalk.bgBlue.black('Obrigado por jogar!'))
                    process.exit()
                }
            })
            .catch((err) => console.log(err))
    } else if (enemy == you) {
        console.log(chalk.bgRed.black('Deu empate, tente novamente!'))
        inquirer
            .prompt([{
                type: 'list',
                name: 'end3',
                message: 'Você deseja jogar novamente?',
                choices: [
                    'Sim',
                    'Não',
                ],
            },
            ])
            .then((answer) => {
                const end3 = answer['end3']

                if (end3 === 'Sim') {
                    var you = 100
                    var enemy = 100
                    var damage = 25
                    operation()
                } else {
                    console.log(chalk.bgBlue.black('Obrigado por jogar!'))
                    process.exit()
                }
            })
            .catch((err) => console.log(err))
    }
}
