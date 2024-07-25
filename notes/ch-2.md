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


## 3. Static Analysis

* The third step is Static Analysis

#### ***Static Analysis***

* At this point we know the syntatic structure of the code - things like which expression are nested in which - but we dont know much more than that
* In an expression like `a + b` we know we are syntactically correct but we don't know what those names refer to - are they global or local variable

1. The first bit of analysis that most languages do is called **binding** or **resolution**
  * For each **identifier** we find out where that name is defined and wire the two together. 
  * this is where scope comes into play - the region of the source code where a certain name can be used to refer to a certain declaration

2. If the language is statically typed, this is when we type check. 
   * once we know where `a` and `b` are declared we can also figure out their types
   * if the types don't support being added to each other we report a **type error**

## 4. Top of the mountain

* After semantic insight from all of this analysis is gained, the following is done: 
  * it gets stored back as attributes on the *AST* - extra fields in the nodes that aren't initialized during parsing but get filled in later 

* We may store data in the lookup table off to the side 
  * typically the keys to this table are identifier - names of variables and declarations
  * in that case we call it a *symbol table* and the values it associates with ea h key tell us what that identifier refers to.

* the most powerful bookkeeping tool is to transform the tree into an entirely new data structure that more directly expresses the semantics of the code.

> [!IMPORTANT]
> everything up to this point is considered the **front end** of the implementation


