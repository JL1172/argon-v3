# The Parts of a language 

## 1a. Source code 

The source code starts as raw text such as the following:

```
var average = (min + max) / 2;
```

## 1b. Scanning/Lexing

* The first step in the process is scanning or lexing

#### ***Lexing or lexical analysis*** 

* The function of a lexer is: 
  * takes linear stream of characters and chunks them together into a series of something more akin to workds. 
  * each of these "words" is called a token
  * ***this process is also known as tokenization***

* visual example of lexer:

```
//source code 
var average = (min + max) / 2;
```

```
//source code tokenized
[var] [average] [=] [(] [min] [+] [max] [)] [/] [2] [;]
```

## 2. Parsing 

* The second step is parsing 

#### ***Parsing***

* the function of a parser is:
  * syntax gets a grammar
    * the ability to compose larger expressions and statements out of smaller parts
  * report syntax erros 

* ***Parser steps***
  1. takes flat sequence of tokens, or result of tokenization from lexer
  2. builds tree called AST ***(abstract syntax tree)***






