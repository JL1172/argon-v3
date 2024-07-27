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

## 5. Intermediate Representation 

* This step is the middle ground with no tie between the front end and the backend

> [!IMPORTANT]
> You can think of the compiler as a pipeline where each stage's job is to organize the data representing the user's code in a way that makes the next stage simpler to implement
> the front end of the pipeline is specific to the source language the program is written in.
> the back end is concerned with the final architecture where the program will run

* *IR* is in the middle
* this isn't tied to either the source or destination 
* this lets you support multiple source languages and target platforms 

#### ***Additional Notes to review***

* control flow graph
* static single assignment
* continuation passing style 
* three address code

## 6. Optimization

* This section of language implementation is where the magic happens
* optimizations can be heavily made or not, it is up to the creator
* optimizations such as ***constant folding*** take place 
  * constant folding: if some expression always evaluates to the exact same value we can do the evaluation at compile time and replace the code for the expression with its result. This could be like memoization.

> [!IMPORTANT]
> constant propagation
> common subexpression elimination 
> loop invariant code motion
> global value umbering 
> strength reduction
> scalar replacement of aggregates
> dead code elimination 
> loop unrolling 

## 7. Code generation

* this can take place *natively* or on a *VM*

## 8. Virtual machine

## 9. runtime

* garbage collection

## Shortcuts and alternate routes

* single pass compiler 
* tree walk interpreters
* transpilers 
* jit








